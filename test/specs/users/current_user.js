var currentUser = require("../../api/users/current_user");
const db = require("../../config/connection");
const query = require("../../config/query");
const expect = require("chai").expect;
const data = require("../../config/strings").config;

describe("Users: Get current User", function() {

    it("should return currentuser details using admin token", async function() {  
        var currentUserApi = currentUser.currentUser(global.adminToken);
        expect(currentUserApi.code).to.eq(200);
        var currentUserDetailsFromDb = await db.getResult(query.getUserDetailsByID(currentUserApi.body.uuid));
        currentUser.verifyCurrentUser(currentUserApi.body, currentUserDetailsFromDb);
    });

    it("should not return user details using invalid token", async function() {
        var currentUserApi = currentUser.currentUser(global.invalidToken);
        expect(currentUserApi.code).to.eq(403);
    });

    it("should not return user details using http method POST", async function() {
        var currentUserApi = currentUser.currentUser(global.adminToken, data.http_methods.POST);
        expect(currentUserApi.code).to.eq(405);
    });

    it("should not return user details using http method PUT", async function() {
        var currentUserApi = currentUser.currentUser(global.adminToken, data.http_methods.PUT);
        expect(currentUserApi.code).to.eq(405);
    });

    it("should not return user details using http method DELETE", async function() {
        var currentUserApi = currentUser.currentUser(global.adminToken, data.http_methods.DELETE);
        expect(currentUserApi.code).to.eq(405);
    });

});