Feature: DirectBooks About pages (Senior Team, History, Careers)

  # ── Senior Team ──────────────────────────────────────────────────────────────

  Scenario: Validate Senior Team page headline
    Given I open the DirectBooks Senior Team page
    Then I should see the best-in-class team headline

  Scenario: Validate Senior Team page leadership profiles
    Given I open the DirectBooks Senior Team page
    Then I should see the CEO profile
    And I should see the COO profile

  # ── History ──────────────────────────────────────────────────────────────────

  Scenario: Validate History page headline
    Given I open the DirectBooks History page
    Then I should see the DirectBooks journey headline

  Scenario: Validate History page milestones content
    Given I open the DirectBooks History page
    Then I should see the milestones content

  # ── Careers ──────────────────────────────────────────────────────────────────

  Scenario: Validate Careers page heading
    Given I open the DirectBooks Careers page
    Then I should see the careers heading

  Scenario: Validate Careers page talent email
    Given I open the DirectBooks Careers page
    Then I should see the talent email address
