var logout = require("../../api/users/logout")
var login = require("../../api/users/login")
const expect = require("chai").expect;
const data = require("../../config/strings").config;
const users = require("../../config/users").config;

describe("Users: Logout from Fygo", function() {

    before("Pre-requisite - User login to Fygo", function() { 
        var loginAPI = login.loginAPI(users.email, users.password);
        expect(loginAPI.code).to.eq(200);
    });

    it("should be able to logout from Fygo platform with valid token", async function() {
        var logoutAPI = logout.logoutAPI(global.userToken);
        expect(logoutAPI.code).to.eq(200);
    });

    it("should not be able to logout from Fygo platform with invalid token", async function() {
        var logoutAPI = logout.logoutAPI(global.invalidToken);
        expect(logoutAPI.code).to.eq(401);
    });

    it("should not be able to logout from Fygo platform with http method GET", function() {
        var logoutAPI = logout.logoutAPI(data.http_methods.GET);
        expect(logoutAPI.code).to.eq(405);
    });

    it("should not be able to logout from Fygo platform with http method PUT", function() {
        var logoutAPI = logout.logoutAPI(data.http_methods.PUT);
        expect(logoutAPI.code).to.eq(405);
    });

    it("should not be able to logout from Fygo platform with http method DELETE", function() {
        var logoutAPI = logout.logoutAPI(data.http_methods.DELETE);
        expect(logoutAPI.code).to.eq(405);
    });

});