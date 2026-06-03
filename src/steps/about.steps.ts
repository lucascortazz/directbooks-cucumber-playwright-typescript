import { Given, Then } from "@cucumber/cucumber";
import { state } from "../support/state";
import { SeniorTeamPage } from "../pages/senior-team.page";
import { HistoryPage } from "../pages/history.page";
import { CareersPage } from "../pages/careers.page";

function seniorTeam() { return new SeniorTeamPage(state.page!); }
function history() { return new HistoryPage(state.page!); }
function careers() { return new CareersPage(state.page!); }

// ── Senior Team ───────────────────────────────────────────────────────────────

Given("I open the DirectBooks Senior Team page", async () => {
  await seniorTeam().open();
});

Then("I should see the best-in-class team headline", async () => {
  await seniorTeam().expectHeadline();
});

Then("I should see the CEO profile", async () => {
  await seniorTeam().expectCEO();
});

Then("I should see the COO profile", async () => {
  await seniorTeam().expectCOO();
});

// ── History ───────────────────────────────────────────────────────────────────

Given("I open the DirectBooks History page", async () => {
  await history().open();
});

Then("I should see the DirectBooks journey headline", async () => {
  await history().expectHeadline();
});

Then("I should see the milestones content", async () => {
  await history().expectMilestonesContent();
});

// ── Careers ───────────────────────────────────────────────────────────────────

Given("I open the DirectBooks Careers page", async () => {
  await careers().open();
});

Then("I should see the careers heading", async () => {
  await careers().expectHeadline();
});

Then("I should see the talent email address", async () => {
  await careers().expectTalentEmail();
});
