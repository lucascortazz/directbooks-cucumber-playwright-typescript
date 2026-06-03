import { Given, Then } from "@cucumber/cucumber";
import { state } from "../support/state";
import { NewsroomPage } from "../pages/newsroom.page";
import { DemoRequestPage } from "../pages/demo-request.page";

function newsroom() { return new NewsroomPage(state.page!); }
function demoRequest() { return new DemoRequestPage(state.page!); }

// ── Newsroom ──────────────────────────────────────────────────────────────────

Given("I open the DirectBooks Newsroom page", async () => {
  await newsroom().open();
});

Then("I should see the press releases heading", async () => {
  await newsroom().expectPressReleasesHeading();
});

Then("I should see the most recent press release", async () => {
  await newsroom().expectRecentPressRelease();
});

Then("I should see multiple press releases", async () => {
  await newsroom().expectMultiplePressReleases();
});

// ── Demo Request ──────────────────────────────────────────────────────────────

Given("I open the DirectBooks Demo Request page", async () => {
  await demoRequest().open();
});

Then("I should see the demo request form", async () => {
  await demoRequest().expectDemoRequestForm();
});
