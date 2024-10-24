import 'dotenv/config';
import { fetchToken } from "./utils.js";
/**
 * Generate chat inference with LLM
 * @param {*} url Inference URL
 * @param {*} payload Request payload
 * @returns LLM response object
 */
export async function chat(payload) {
    const token = await fetchToken();
    // auth-related variables from env
    const aiResourceGroup = process.env.AI_RESOURCE_GROUP;

    // model-related variables from env
    const model = process.env.MODEL;
    const deploymentUrl = process.env.DEPLOYMENT_URL;
    const apiVersion = process.env.API_VERSION || "2023-05-15";

    // inference endpoint
    const endpoint = "/chat/completions";
    // overall url
    // please refer to documentation for other providers at the bottom of the page
    const inferenceUrl = `${deploymentUrl}${endpoint}?api-version=${apiVersion}`;
    const body = JSON.stringify(payload);
    try {
        const response = await fetch(
            inferenceUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                    "ai-resource-group": aiResourceGroup
                },
                body: body,
            }
        );
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching response:', error);
    }
}