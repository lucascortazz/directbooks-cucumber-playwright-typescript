import { Given, Then } from "@cucumber/cucumber";
import { state } from "../support/state";
import { LegalPage } from "../pages/legal.page";

function legal() { return new LegalPage(state.page!); }

// ── Terms of Use ──────────────────────────────────────────────────────────────

Given("I open the DirectBooks Terms of Use page", async () => {
  await legal().openTermsOfUse();
});

Then("I should see the terms of use heading", async () => {
  await legal().expectTermsOfUseHeading();
});

Then("I should see the terms legal contact email", async () => {
  await legal().expectTermsLegalEmail();
});

Then("I should see the governing law statement", async () => {
  await legal().expectTermsGoverningLaw();
});

// ── Privacy Policy ────────────────────────────────────────────────────────────

Given("I open the DirectBooks Privacy Policy page", async () => {
  await legal().openPrivacyPolicy();
});

Then("I should see the privacy policy heading", async () => {
  await legal().expectPrivacyPolicyHeading();
});

Then("I should see the privacy contact email", async () => {
  await legal().expectPrivacyContactEmail();
});

Then("I should see the New York mailing address", async () => {
  await legal().expectPrivacyNewYorkAddress();
});

// ── Cookie Policy ─────────────────────────────────────────────────────────────

Given("I open the DirectBooks Cookie Policy page", async () => {
  await legal().openCookiePolicy();
});

Then("I should see the cookie policy heading", async () => {
  await legal().expectCookiePolicyHeading();
});

Then("I should see the cookie types description", async () => {
  await legal().expectCookieTypesDescription();
});

Then("I should see the cookie contact email", async () => {
  await legal().expectCookieContactEmail();
});
