export class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async openURL() {
       await this.page.goto("https://smb.sulekha.com/walkin");

    await this.page.waitForLoadState("networkidle");

    }

    async enterUsername() {
        console.log("Entering Username...");
    }

    async enterPassword() {
        console.log("Entering Password...");
    }

    async clickLogin() {
        console.log("Clicking Login Button...");
    }

    async verifyDashboard() {
        console.log("Dashboard Verified...");
    }

}