import { Given, Then } from "@cucumber/cucumber";
import { state } from "../support/state";
import { WhyPage } from "../pages/why.page";
import { WhoPage } from "../pages/who.page";
import { HowPage } from "../pages/how.page";
import { WhatPage } from "../pages/what.page";

function why() { return new WhyPage(state.page!); }
function who() { return new WhoPage(state.page!); }
function how() { return new HowPage(state.page!); }
function what() { return new WhatPage(state.page!); }

// ── Why ───────────────────────────────────────────────────────────────────────

Given("I open the DirectBooks Why page", async () => {
  await why().open();
});

Then("I should see the streamlining the new issue process headline", async () => {
  await why().expectHeadline();
});

Then("I should see the in the past section", async () => {
  await why().expectInThePastSection();
});

Then("I should see the today section", async () => {
  await why().expectTodaySection();
});

Then("I should see the why join the platform call to action", async () => {
  await why().expectJoinPlatformCallToAction();
});

// ── Who ───────────────────────────────────────────────────────────────────────

Given("I open the DirectBooks Who page", async () => {
  await who().open();
});

Then("I should see the institutional investors and underwriters headline", async () => {
  await who().expectHeadline();
});

Then("I should see the investor profile section", async () => {
  await who().expectInvestorProfile();
});

Then("I should see the onboarding steps section", async () => {
  await who().expectOnboardingSteps();
});

Then("I should see the who join the platform call to action", async () => {
  await who().expectJoinPlatformCallToAction();
});

// ── How ───────────────────────────────────────────────────────────────────────

Given("I open the DirectBooks How page", async () => {
  await how().open();
});

Then("I should see the underwriters capabilities section", async () => {
  await how().expectUnderwritersSection();
});

Then("I should see the investors capabilities section", async () => {
  await how().expectInvestorsSection();
});

Then("I should see the ISO 27001 certification", async () => {
  await how().expectISOCertification();
});

Then("I should see the FIX protocol information", async () => {
  await how().expectFIXProtocol();
});

Then("I should see the SOC 2 compliance information", async () => {
  await how().expectSOC2Compliance();
});

// ── What ──────────────────────────────────────────────────────────────────────

Given("I open the DirectBooks What page", async () => {
  await what().open();
});

Then("I should see the global fixed income workflows headline", async () => {
  await what().expectHeadline();
});

Then("I should see the what join the platform call to action", async () => {
  await what().expectJoinPlatformCallToAction();
});
