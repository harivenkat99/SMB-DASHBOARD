import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";

setDefaultTimeout(60000);

Before(async function () {

    console.log("Browser Opening...");

    this.browser = await chromium.launch({
        headless: false
    });

    this.page = await this.browser.newPage();

    console.log("Browser Opened");
});

After(async function () {

    console.log("Closing Browser...");

    await this.browser.close();

    console.log("Browser Closed");
});