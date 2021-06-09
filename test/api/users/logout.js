const request = require("sync-request");
const endpoints = require("../../config/endpoints").config;
const data = require("../../config/strings").config;

class Logout {

    logoutAPI(token, method = data.http_methods.POST) {
        var url = global.api_url + endpoints.logout;
        var body = null;
        var logout = request(method, url, {
            headers: {
                "Authorization" : "Bearer "+token
            },
            body: body
        });
        if (logout.statusCode == 200) {
            var body = JSON.parse(logout.getBody().toString('utf8'));
        }
        return {
            code: logout.statusCode,
        };
    }

}

module.exports = new Logout();