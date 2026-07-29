import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";

setDefaultTimeout(60000);

Before(async function () {
    try {
        console.log("Browser Opening...");

        this.browser = await chromium.launch({
            headless: true
        });

        console.log("Browser launched successfully");

        this.page = await this.browser.newPage();

        console.log("New page created");

    } catch (err) {
        console.error("Launch Error:", err);
        throw err;
    }
});

After(async function () {
    console.log("Closing Browser...");

    if (this.browser) {
        await this.browser.close();
        console.log("Browser Closed");
    } else {
        console.log("Browser was not created");
    }
});