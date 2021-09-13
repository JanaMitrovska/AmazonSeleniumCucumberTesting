Feature: Test Changing the language functionality

  Scenario: Check if change language feature is functional
    Given browser is open - change language
    And user is on amazon home page - change language
    When user clicks on flag
    And user selects spanish
    And user saves changes
    Then user is navigated to the spanish home page