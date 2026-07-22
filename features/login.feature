Feature: SMB Dashboard Login

  Scenario: Valid Login

    Given User opens SMB Walkin page
    When User enters username and password
    And User clicks Login button
    Then Dashboard should display