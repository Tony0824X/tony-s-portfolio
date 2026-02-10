import 'dotenv/config';
import axios from 'axios';
import process from 'process';

const CONFIG = {
    domain: 'tonyhcc.com',
    projectName: 'tony-s-portfolio',
    pagesDomain: 'tony-s-portfolio.pages.dev', // Default pages subdomain
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    cfToken: process.env.CLOUDFLARE_API_TOKEN
};

const cfHeaders = {
    'Authorization': `Bearer ${CONFIG.cfToken}`,
    'Content-Type': 'application/json'
};

async function addDnsRecord() {
    console.log(`🛠️ Adding CNAME record for ${CONFIG.domain} -> ${CONFIG.pagesDomain}...`);

    // First get Zone ID
    try {
        const zoneRes = await axios.get(`https://api.cloudflare.com/client/v4/zones?name=${CONFIG.domain}`, { headers: cfHeaders });
        const zoneId = zoneRes.data.result[0]?.id;

        if (!zoneId) {
            console.error('❌ Zone not found.');
            return;
        }

        // Add CNAME record for root domain (@)
        await axios.post(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, {
            type: 'CNAME',
            name: '@', // Root domain
            content: CONFIG.pagesDomain,
            proxied: true // Enable Cloudflare Proxy (CDN/SSL)
        }, { headers: cfHeaders });

        // Add CNAME record for www
        await axios.post(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, {
            type: 'CNAME',
            name: 'www',
            content: CONFIG.pagesDomain,
            proxied: true
        }, { headers: cfHeaders });

        console.log('✅ Success! DNS Records added.');
        console.log('   @   CNAME  proxied');
        console.log('   www CNAME  proxied');

    } catch (error) {
        if (error.response?.data?.errors[0]?.code === 81053 || error.response?.data?.errors[0]?.code === 81057) {
            console.log('ℹ️  Record already exists.');
        } else {
            console.error('❌ Failed:', error.response?.data || error.message);
        }
    }
}

addDnsRecord();
