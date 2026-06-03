Feature: DirectBooks public website

  # ── Homepage ────────────────────────────────────────────────────────────────

  Scenario: Validate homepage hero section
    Given I open the DirectBooks homepage
    Then I should see the hero headline
    And I should see the trusted community of global underwriters message
    And I should see the reaching 1000+ global investors message

  Scenario: Validate homepage platform messaging
    Given I open the DirectBooks homepage
    Then I should see the main DirectBooks messaging
    And I should see the Join the Platform call to action

  Scenario: Validate homepage product and community sections
    Given I open the DirectBooks homepage
    Then I should see the product section
    And I should see the community section

  Scenario: Validate homepage news section
    Given I open the DirectBooks homepage
    Then I should see the in the news section

  Scenario: Validate homepage navigation and footer
    Given I open the DirectBooks homepage
    Then I should see the navigation menu
    And I should see the footer copyright
    And I should see the footer info email

  # ── FAQ ─────────────────────────────────────────────────────────────────────

  Scenario: Validate FAQ page headings
    Given I open the DirectBooks FAQ page
    Then I should see frequently asked questions
    And I should see information about who can use DirectBooks

  Scenario: Validate FAQ participating underwriters
    Given I open the DirectBooks FAQ page
    Then I should see a list of participating underwriters

  Scenario: Validate FAQ platform access methods
    Given I open the DirectBooks FAQ page
    Then I should see the platform access methods

  Scenario: Validate FAQ DART analytics
    Given I open the DirectBooks FAQ page
    Then I should see information about DART analytics

  # ── Contact ──────────────────────────────────────────────────────────────────

  Scenario: Validate Contact page headings
    Given I open the DirectBooks Contact page
    Then I should see contact information
    And I should see client services information

  Scenario: Validate Contact phone numbers
    Given I open the DirectBooks Contact page
    Then I should see the US phone number
    And I should see the Europe phone number

  Scenario: Validate Contact email addresses
    Given I open the DirectBooks Contact page
    Then I should see the info email address
    And I should see the client experience email address

  # ── Community Portal ─────────────────────────────────────────────────────────

  Scenario: Validate Community Portal login page
    Given I open the DirectBooks Community Portal
    Then I should see the login form
    And I should see the forgot password option
