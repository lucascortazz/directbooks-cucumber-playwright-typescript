import { Given, Then } from "@cucumber/cucumber";
import { state } from "../support/state";
import { DirectBooksPage } from "../pages/directbooks.page";
import { CommunityPortalPage } from "../pages/community-portal.page";

function page() {
  return new DirectBooksPage(state.page!);
}

function portal() {
  return new CommunityPortalPage(state.page!);
}

// ── Navigation ────────────────────────────────────────────────────────────────

Given("I open the DirectBooks homepage", async () => {
  await page().openHomePage();
});

Given("I open the DirectBooks FAQ page", async () => {
  await page().openFaqPage();
});

Given("I open the DirectBooks Contact page", async () => {
  await page().openContactPage();
});

Given("I open the DirectBooks Community Portal", async () => {
  await portal().open();
});

// ── Homepage ──────────────────────────────────────────────────────────────────

Then("I should see the main DirectBooks messaging", async () => {
  await page().expectMainMessaging();
});

Then("I should see the Join the Platform call to action", async () => {
  await page().expectJoinPlatformCallToAction();
});

Then("I should see the hero headline", async () => {
  await page().expectHeroHeadline();
});

Then("I should see the trusted community of global underwriters message", async () => {
  await page().expectTrustedCommunityBanner();
});

Then("I should see the reaching 1000+ global investors message", async () => {
  await page().expectReachingInvestorsMessage();
});

Then("I should see the product section", async () => {
  await page().expectProductSection();
});

Then("I should see the community section", async () => {
  await page().expectCommunitySection();
});

Then("I should see the in the news section", async () => {
  await page().expectInTheNewsSection();
});

Then("I should see the navigation menu", async () => {
  await page().expectNavigationMenu();
});

Then("I should see the footer copyright", async () => {
  await page().expectFooterCopyright();
});

Then("I should see the footer info email", async () => {
  await page().expectFooterInfoEmail();
});

// ── FAQ ───────────────────────────────────────────────────────────────────────

Then("I should see frequently asked questions", async () => {
  await page().expectFrequentlyAskedQuestions();
});

Then("I should see information about who can use DirectBooks", async () => {
  await page().expectWhoCanUseDirectBooksInformation();
});

Then("I should see a list of participating underwriters", async () => {
  await page().expectParticipatingUnderwriters();
});

Then("I should see the platform access methods", async () => {
  await page().expectAccessMethods();
});

Then("I should see information about DART analytics", async () => {
  await page().expectDartAnalytics();
});

// ── Contact ───────────────────────────────────────────────────────────────────

Then("I should see contact information", async () => {
  await page().expectContactInformation();
});

Then("I should see client services information", async () => {
  await page().expectClientServicesInformation();
});

Then("I should see the US phone number", async () => {
  await page().expectUSPhoneNumber();
});

Then("I should see the Europe phone number", async () => {
  await page().expectEuropePhoneNumber();
});

Then("I should see the info email address", async () => {
  await page().expectInfoEmail();
});

Then("I should see the client experience email address", async () => {
  await page().expectClientExperienceEmail();
});

// ── Community Portal ──────────────────────────────────────────────────────────

Then("I should see the login form", async () => {
  await portal().expectLoginForm();
});

Then("I should see the forgot password option", async () => {
  await portal().expectForgotPasswordOption();
});
