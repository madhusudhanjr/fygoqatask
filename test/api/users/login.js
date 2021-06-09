const request = require("sync-request");
const endpoints = require("../../config/endpoints").config;
const data = require("../../config/strings").config;

class Login {

    loginAPI(email, password, method = data.http_methods.POST) {
        var url = global.api_url + endpoints.login;
        var body = null;
        var login = request(method, url, {
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email: email, password:password })
        });
        if (login.statusCode == 200) {
            var body = JSON.parse(login.getBody().toString('utf8'));
        }
        return {
            code: login.statusCode,
            body: body
        };
    }

}

module.exports = new Login();