const auth = require("./auth");
const users = require("./users").config;
const fs = require('fs');
const secret = JSON.parse(fs.readFileSync("./test/config/secret.json"));

before("GLOBAL BEFORE", async function() {
	global.api_url = secret.urls.api_url;
    global.userToken = auth.getToken(users.username, users.password);
	global.adminToken = auth.getToken(users.adminemail, users.adminpassword);
	global.invalidToken = "invalid_token";
	await preExecutionSetup();
});

async function preExecutionSetup() {
	// pre-requisite test data setup like Users creation
}
