class APIRequestHandler {

    constructor(url) {
        this.url = url;
        this.apiKeyString = "";
    }

    async get(endpoint, id = "") {

        const response = await fetch(this.url + endpoint + id + this.apiKeyString);
    
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
    
        const jsonResponse = await response.json();
    
        return jsonResponse.data.results;
    }
    
    async function postData(endpoint, data) {

        const response = await fetch(url + endpoint + apiKeyString, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
    }

    async function getApiKey(url, endpoint) {
        const response = await fetch(url + endpoint);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
    
        const jsonResponse = await response.json();
        const apiKey = jsonResponse.data;
        
        _setApiKeyString(apiKey.timestamp, apiKey.publicKey, apiKey.hash);
    }

    function _setApiKeyString(timestamp, publicKey, hash) {
        this.apiKeyString = `?ts=${timestamp}&apiKey=${publicKey}&hash=${hash}`;
    }
}

export default APIRequestHandler;