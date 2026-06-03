Feature: DirectBooks Solution pages (Why, Who, How, What)

  # ── Why ─────────────────────────────────────────────────────────────────────

  Scenario: Validate Why page headline and value proposition
    Given I open the DirectBooks Why page
    Then I should see the streamlining the new issue process headline

  Scenario: Validate Why page before and after comparison
    Given I open the DirectBooks Why page
    Then I should see the in the past section
    And I should see the today section

  Scenario: Validate Why page call to action
    Given I open the DirectBooks Why page
    Then I should see the why join the platform call to action

  # ── Who ─────────────────────────────────────────────────────────────────────

  Scenario: Validate Who page headline
    Given I open the DirectBooks Who page
    Then I should see the institutional investors and underwriters headline

  Scenario: Validate Who page investor profile and onboarding
    Given I open the DirectBooks Who page
    Then I should see the investor profile section
    And I should see the onboarding steps section

  Scenario: Validate Who page call to action
    Given I open the DirectBooks Who page
    Then I should see the who join the platform call to action

  # ── How ─────────────────────────────────────────────────────────────────────

  Scenario: Validate How page capabilities sections
    Given I open the DirectBooks How page
    Then I should see the underwriters capabilities section
    And I should see the investors capabilities section

  Scenario: Validate How page security certifications
    Given I open the DirectBooks How page
    Then I should see the ISO 27001 certification
    And I should see the FIX protocol information
    And I should see the SOC 2 compliance information

  # ── What ────────────────────────────────────────────────────────────────────

  Scenario: Validate What page headline
    Given I open the DirectBooks What page
    Then I should see the global fixed income workflows headline

  Scenario: Validate What page call to action
    Given I open the DirectBooks What page
    Then I should see the what join the platform call to action
