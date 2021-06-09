var login = require("../../api/users/login")
const expect = require("chai").expect;
const data = require("../../config/strings").config;
const users = require("../../config/users").config;

describe("Users: Login to Fygo", function() {

    it("should be able to login using valid email/password to Fygo platform", async function() {
        var loginAPI = login.loginAPI(users.email, users.password);
        expect(loginAPI.code).to.eq(200);
        expect(loginAPI.body.token).to.not.be.empty;
    });

    it("should not be able to login using wrong email to Fygo platform", async function() {
        var loginAPI = login.loginAPI(users.xemail, users.password);
        expect(loginAPI.code).to.eq(401);
    });

    it("should not be able to login using wrong password to Fygo platform", async function() {
        var loginAPI = login.loginAPI(users.email, users.xpassword);
        expect(loginAPI.code).to.eq(401);
    });

    it("should not be able to login using wrong email/password to Fygo platform", async function() {
        var loginAPI = login.loginAPI(users.xemail, users.xpassword);
        expect(loginAPI.code).to.eq(401);
    });

    it("should not be able to login to Fygo platform with http method GET", function() {
        var loginAPI = login.loginAPI(users.email, users.password, data.http_methods.GET);
        expect(loginAPI.code).to.eq(405);
    });

    it("should not be able to login to Fygo platform with http method PUT", function() {
        var loginAPI = login.loginAPI(users.email, users.password, data.http_methods.PUT);
        expect(loginAPI.code).to.eq(405);
    });

    it("should not be able to login to Fygo platform with http method DELETE", function() {
        var loginAPI = login.loginAPI(users.email, users.password, data.http_methods.DELETE);
        expect(loginAPI.code).to.eq(405);
    });

});