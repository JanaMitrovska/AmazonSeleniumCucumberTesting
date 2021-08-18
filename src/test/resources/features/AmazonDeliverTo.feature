Feature: Test deliver to functionality

  Scenario Outline: Check if deliver to information is valid
    Given browser is open - deliver to
    And user is on amazon home page - deliver to
    When user clicks on deliver to button
    And user enters deliver to zipcode <zipcode>
    Then user is navigated to the home page

    Examples:
    | zipcode |
    | 20008   |

  Scenario Outline: Check if deliver to is invalid
    Given browser is open - deliver to
    And user is on amazon home page - deliver to
    When user clicks on deliver to button
    And user enters deliver to zipcode <zipcode>
    Then page displays error

    Examples:
      | zipcode  |
      | 1300     |