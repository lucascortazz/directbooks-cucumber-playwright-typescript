import { chromium, firefox, webkit, BrowserType } from "@playwright/test";
import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { state } from "./state";

setDefaultTimeout(30 * 1000);

const browsers: Record<string, BrowserType> = { chromium, firefox, webkit };
const browserName = process.env.BROWSER ?? "chromium";
const browserType = browsers[browserName];

if (!browserType) {
  throw new Error(`Unknown browser "${browserName}". Use chromium, firefox, or webkit.`);
}

Before(async () => {
  state.browser = await browserType.launch({ headless: true });
  state.page = await state.browser.newPage();
});

After(async () => {
  await state.browser!.close();
});
