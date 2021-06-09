const fs = require("fs");
const secret = JSON.parse(fs.readFileSync("./test/config/secret.json"));
var request = require('sync-request');

class Auth {

    getToken(email, password) {
        var payload = secret.auth0;
        payload.username = email;
        payload.password = password;
        var authResponse = request("POST", secret.urls.token_url, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        var responseBody = JSON.parse(authResponse.getBody().toString('utf8'));  
        return responseBody.id_token;  
    }

}

module.exports = new Auth();

