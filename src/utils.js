import 'dotenv/config';

// auth-related variables
const authUrl = process.env.AUTH_URL;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const aiResourceGroup = process.env.AI_RESOURCE_GROUP;

/**
 * Fetches an access token from the OAuth2 token endpoint
 * 
 * @returns {Promise<string>} - The access token
 */
async function fetchToken() {
    try {
        const response = await fetch(authUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}&resource=${aiResourceGroup}`,
        });
        if (!response.ok) {
            throw new Error('Failed to fetch token');
        }
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error fetching token:', error); 
    }
}

export { fetchToken };