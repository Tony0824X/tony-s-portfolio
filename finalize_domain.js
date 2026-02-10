import 'dotenv/config';
import axios from 'axios';
import process from 'process';

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

async function linkDomain() {
    console.log(`🔗 Linking ${CONFIG.domain} to Pages project ${CONFIG.projectName}...`);
    try {
        const res = await axios.post(
            `https://api.cloudflare.com/client/v4/accounts/${CONFIG.accountId}/pages/projects/${CONFIG.projectName}/domains`,
            { name: CONFIG.domain },
            { headers: cfHeaders }
        );
        console.log(`✅ Success! Domain linked. Status: ${res.data.success ? 'Active' : 'Pending'}`);
        console.log('🎉 Your site should be live at https://tonyhcc.com');
    } catch (error) {
        if (error.response?.status === 409 || error.response?.data?.errors[0]?.code === 8000009) {
            console.log('ℹ️  Domain already active on this project.');
            console.log('🎉 Your site is live at https://tonyhcc.com');
        } else {
            console.error('❌ Failed:', error.response?.data || error.message);
        }
    }
}

linkDomain();
