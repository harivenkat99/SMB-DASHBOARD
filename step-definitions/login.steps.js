console.log("step file loaded");
import { Given, When, Then } from "@cucumber/cucumber";
 import { LoginPage } from "../page/LoginPage.js";

Given("User opens SMB Walkin page", async function () {

     this.loginPage = new LoginPage(this.page);

    await this.loginPage.openURL();

});

When("User enters username and password", async function () {

    await this.loginPage.enterUsername();

    await this.loginPage.enterPassword();

});

When("User clicks Login button", async function () {

    await this.loginPage.clickLogin();

});

Then("Dashboard should display", async function () {

    await this.loginPage.verifyDashboard();

});