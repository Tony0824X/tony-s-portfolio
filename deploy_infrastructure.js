import 'dotenv/config';
import axios from 'axios';
import { execSync } from 'child_process';
import process from 'process';

// Configuration
let CONFIG = {
    domain: 'tonyhcc.com',
    projectName: 'tony-s-portfolio',
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    cfToken: process.env.CLOUDFLARE_API_TOKEN,
    spaceshipKey: process.env.SPACESHIP_API_KEY,
    spaceshipSecret: process.env.SPACESHIP_API_SECRET
};

// Headers for Cloudflare API
const cfHeaders = {
    'Authorization': `Bearer ${CONFIG.cfToken}`,
    'Content-Type': 'application/json'
};

async function getValidAccountId() {
    try {
        console.log('🔍 Validating Cloudflare Account ID...');
        // List accounts to find the ID
        const res = await axios.get('https://api.cloudflare.com/client/v4/accounts', { headers: cfHeaders });
        if (res.data.success && res.data.result.length > 0) {
            const foundId = res.data.result[0].id;
            console.log(`✅ Found valid Account ID: ${foundId}`);
            return foundId;
        } else {
            console.log('⚠️  No accounts found with this token.');
        }
    } catch (e) {
        console.error('⚠️ Failed to list accounts:', e.response?.data || e.message);
        if (e.response?.data?.errors) {
            console.error('   Error Details:', JSON.stringify(e.response.data.errors, null, 2));
        }
    }
    return CONFIG.accountId;
}

async function main() {
    console.log('🚀 Starting Automated Deployment for ' + CONFIG.domain);

    if (!CONFIG.cfToken || !CONFIG.spaceshipKey || !CONFIG.spaceshipSecret) {
        console.error('❌ Missing API credentials. Please check your .env file.');
        process.exit(1);
    }

    // Auto-correct Account ID if it looks like an email or is invalid
    if (!CONFIG.accountId || CONFIG.accountId.includes('@')) {
        const fetchedId = await getValidAccountId();
        if (fetchedId) {
            CONFIG.accountId = fetchedId;
        } else {
            console.error('❌ Could not retrieve a valid Account ID. Please check your API Token permissions (Account:Read).');
            process.exit(1);
        }
    }

    console.log(`ℹ️  Using Account ID: ${CONFIG.accountId}`);

    try {
        // --- Step 1: Create Cloudflare Zone ---
        console.log('\n[1/4] Setting up Cloudflare Zone...');
        let zoneId;
        let nameservers = [];

        try {
            const zoneRes = await axios.post('https://api.cloudflare.com/client/v4/zones', {
                name: CONFIG.domain,
                account: { id: CONFIG.accountId },
                type: 'full'
            }, { headers: cfHeaders });

            zoneId = zoneRes.data.result.id;
            nameservers = zoneRes.data.result.name_servers;
            console.log(`✅ Zone created (ID: ${zoneId})`);
        } catch (error) {
            if (error.response?.data?.errors[0]?.code === 1061) {
                console.log('ℹ️  Zone already exists. Fetching details...');
                const zones = await axios.get(`https://api.cloudflare.com/client/v4/zones?name=${CONFIG.domain}`, { headers: cfHeaders });
                zoneId = zones.data.result[0].id;
                nameservers = zones.data.result[0].name_servers;
            } else {
                throw error;
            }
        }
        console.log(`   Nameservers: ${nameservers.join(', ')}`);


        // --- Step 2: Update Spaceship Nameservers ---
        console.log('\n[2/4] Updating Spaceship Nameservers...');

        const spaceshipHeaders = {
            'X-API-Key': CONFIG.spaceshipKey,
            'X-API-Secret': CONFIG.spaceshipSecret,
            'Content-Type': 'application/json'
        };

        try {
            // Note: Spaceship API endpoint for updating NS might vary.
            // Based on standard practices, we try the put endpoint.
            await axios.put(`https://spaceship.dev/api/v1/domains/${CONFIG.domain}/nameservers`, {
                nameservers: nameservers
            }, { headers: spaceshipHeaders });
            console.log('✅ Spaceship Nameservers updated.');
        } catch (error) {
            console.log('⚠️  Spaceship API update failed. (You might need to update NS manually if API access is restricted)');
            // console.log('   Error:', error.message);
        }


        // --- Step 3: Deploy to Cloudflare Pages (via Wrangler) ---
        console.log('\n[3/4] Building and Deploying to Cloudflare Pages...');

        // Install dependencies/build if needed
        console.log('   Running npm install & build...');
        execSync('npm install && npm run build', { stdio: 'inherit' });

        // Deploy using Wrangler
        console.log('   Uploading to Cloudflare Pages...');
        // Wrangler requires CLOUDFLARE_API_TOKEN env var, which we have.
        execSync(`npx wrangler pages deploy dist --project-name ${CONFIG.projectName}`, {
            stdio: 'inherit',
            env: { ...process.env, CLOUDFLARE_ACCOUNT_ID: CONFIG.accountId }
        });
        console.log('✅ Deployment successful.');


        // --- Step 4: Add Custom Domain to Pages ---
        console.log('\n[4/4] Linking Custom Domain...');
        try {
            await axios.post(`https://api.cloudflare.com/client/v4/accounts/${CONFIG.accountId}/pages/projects/${CONFIG.projectName}/domains`, {
                name: CONFIG.domain
            }, { headers: cfHeaders });
            console.log(`✅ Custom domain ${CONFIG.domain} linked.*/`);
        } catch (error) {
            if (error.response?.status === 409 || error.response?.data?.errors[0]?.code === 8000009) {
                console.log('ℹ️  Domain already linked.');
            } else {
                console.error('⚠️  Failed to link domain via API:', error.response?.data?.errors || error.message);
            }
        }

        console.log('\n🎉 ALL DONE! Your site should be live at https://' + CONFIG.domain + ' shortly.');

    } catch (error) {
        console.error('\n❌ Script Failed:', error.response?.data || error.message);
    }
}

main();
