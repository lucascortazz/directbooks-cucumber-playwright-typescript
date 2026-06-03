Feature: DirectBooks Legal pages (Terms of Use, Privacy Policy, Cookie Policy)

  # ── Terms of Use ─────────────────────────────────────────────────────────────

  Scenario: Validate Terms of Use page heading
    Given I open the DirectBooks Terms of Use page
    Then I should see the terms of use heading

  Scenario: Validate Terms of Use legal contact and governing law
    Given I open the DirectBooks Terms of Use page
    Then I should see the terms legal contact email
    And I should see the governing law statement

  # ── Privacy Policy ───────────────────────────────────────────────────────────

  Scenario: Validate Privacy Policy page heading
    Given I open the DirectBooks Privacy Policy page
    Then I should see the privacy policy heading

  Scenario: Validate Privacy Policy contact information
    Given I open the DirectBooks Privacy Policy page
    Then I should see the privacy contact email
    And I should see the New York mailing address

  # ── Cookie Policy ────────────────────────────────────────────────────────────

  Scenario: Validate Cookie Policy page heading
    Given I open the DirectBooks Cookie Policy page
    Then I should see the cookie policy heading

  Scenario: Validate Cookie Policy describes cookie types
    Given I open the DirectBooks Cookie Policy page
    Then I should see the cookie types description
    And I should see the cookie contact email
