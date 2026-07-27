export class LoginPage {

    constructor(page) {
        this.page = page;
          this.username = page.locator("#txtemailphone");
    this.password = page.locator("#txtpass");
    this.loginButton = page.locator("#frmsmbsubmit");
    }

    async openURL() {
       await this.page.goto("https://smb.sulekha.com/walkin");

    await this.page.waitForLoadState("networkidle");

    }

   async enterUsername(username) {
    await this.username.fill(username);
}

    async enterPassword(password) {
    await this.password.fill(password);
}

  async clickLogin() {
    // await this.loginButton.click();
        console.log("Before Login Click");

    await this.loginButton.click();

    console.log("After Login Click");

    await this.page.waitForTimeout(5000);
}

    async verifyDashboard() {
        await this.page.waitForTimeout(5000);

    console.log("Current URL:", await this.page.url());

    console.log("Dashboard Verified...");
    }

}