import 'dotenv/config';
import axios from 'axios';
import process from 'process';
import dns from 'dns/promises';

const CONFIG = {
    domain: 'tonyhcc.com',
    projectName: 'tony-s-portfolio',
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    cfToken: process.env.CLOUDFLARE_API_TOKEN
};

const cfHeaders = {
    'Authorization': `Bearer ${CONFIG.cfToken}`,
    'Content-Type': 'application/json'
};

async function debug() {
    console.log(`🕵️‍♂️ Starting Diagnosis for ${CONFIG.domain}...\n`);

    try {
        // 1. Check Cloudflare Zone Status
        console.log('--- [1] Checking Cloudflare Zone Status ---');
        const zonesRes = await axios.get(`https://api.cloudflare.com/client/v4/zones?name=${CONFIG.domain}`, { headers: cfHeaders });
        const zone = zonesRes.data.result[0];

        if (!zone) {
            console.error('❌ Zone not found in Cloudflare Account!');
        } else {
            console.log(`✅ Zone ID: ${zone.id}`);
            console.log(`   Status: ${zone.status.toUpperCase()}`);
            console.log(`   Paused: ${zone.paused}`);
            console.log(`   Nameservers (Expected): ${zone.name_servers.join(', ')}`);
        }

        // 1.5 Check DNS Records
        console.log('\n--- [1.5] Checking Cloudflare DNS Records ---');
        try {
            const dnsRes = await axios.get(`https://api.cloudflare.com/client/v4/zones/${zone.id}/dns_records`, { headers: cfHeaders });
            const records = dnsRes.data.result;
            if (records.length === 0) {
                console.log('⚠️  No DNS records found.');
            } else {
                records.forEach(r => {
                    console.log(`   ${r.type.padEnd(5)} ${r.name} -> ${r.content} (Proxied: ${r.proxied})`);
                });
            }
        } catch (e) {
            console.error('⚠️ Failed to fetch DNS records:', e.message);
        }

        // 2. Check Pages Custom Domain Status
        console.log('\n--- [2] Checking Pages Custom Domain Configuration ---');
        try {
            const domainsRes = await axios.get(
                `https://api.cloudflare.com/client/v4/accounts/${CONFIG.accountId}/pages/projects/${CONFIG.projectName}/domains`,
                { headers: cfHeaders }
            );
            const domainConfig = domainsRes.data.result.find(d => d.name === CONFIG.domain);

            if (!domainConfig) {
                console.error('❌ Domain NOT linked to Pages Project!');
            } else {
                console.log(`✅ Domain Linked: Yes`);
                console.log(`   Status: ${domainConfig.status.toUpperCase()}`);
                console.log(`   Certificate Status: ${domainConfig.certificate_status || 'Unknown'}`);
                if (domainConfig.verification_error) {
                    console.error(`   Verification Error: ${domainConfig.verification_error}`);
                }
            }
        } catch (e) {
            console.error('⚠️ Failed to fetch Pages domains:', e.response?.data?.errors || e.message);
        }

        // 3. DNS Lookup (What this machine sees)
        console.log('\n--- [3] Performing DNS Lookup (Local Node.js) ---');
        try {
            const ns = await dns.resolveNs(CONFIG.domain);
            console.log(`✅ NS Records found: ${ns.join(', ')}`);
        } catch (e) {
            console.error(`❌ NS Lookup Failed: ${e.code}`);
        }

        try {
            const a = await dns.resolve4(CONFIG.domain);
            console.log(`✅ A Records found: ${a.join(', ')}`);
        } catch (e) {
            console.error(`❌ A Record Lookup Failed: ${e.code}`);
        }

    } catch (error) {
        console.error('\n❌ Diagnosis Script Failed:', error.message);
    }
}

debug();
