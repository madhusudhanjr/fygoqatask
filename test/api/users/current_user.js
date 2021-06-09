const request = require("sync-request");
const endpoints = require("../../config/endpoints").config;
const data = require("../../config/strings").config;

class CurrentUser {

    currentUser(token, method=data.http_methods.GET) {
        var url = global.api_url + endpoints.currentUser;
        var body = null;
        var currentUser = request(method, url, {
            headers: {
                "Authorization" : "Bearer "+token
            },
            body: body
        });
        if (currentUser.statusCode == 200) {
            var body = JSON.parse(currentUser.getBody().toString('utf8'));
        }
        return {
            code: currentUser.statusCode,
            body: body
        };
    }

    verifyCurrentUser(api, db) {
        expect(api.uuid).to.eq(db.Id);
        expect(api.email).to.eq(db.Email);
    }

}

module.exports = new CurrentUser();