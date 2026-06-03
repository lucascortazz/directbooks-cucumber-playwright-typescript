Feature: DirectBooks Newsroom and Demo Request pages

  # ── Newsroom ─────────────────────────────────────────────────────────────────

  Scenario: Validate Newsroom page heading
    Given I open the DirectBooks Newsroom page
    Then I should see the press releases heading

  Scenario: Validate Newsroom most recent press release
    Given I open the DirectBooks Newsroom page
    Then I should see the most recent press release

  Scenario: Validate Newsroom shows multiple press releases
    Given I open the DirectBooks Newsroom page
    Then I should see multiple press releases

  # ── Demo Request ─────────────────────────────────────────────────────────────

  Scenario: Validate Demo Request page form
    Given I open the DirectBooks Demo Request page
    Then I should see the demo request form
