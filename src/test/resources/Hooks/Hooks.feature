Feature: Check login functionality

  Scenario Outline:Check if login is successful with valid credentials
    Given user is on amazon home page - hooks
    When user clicks on login button - hooks
    And user enters <email> email - hooks
    And user clicks continue button - hooks
    And user enters <password> password - hooks
    And user clicks on sign in button - hooks
    Then user is navigated to the home page - hooks


    Examples:
      |         email               | password    |
      |    testskit12345@gmail.com  |    Skit123! |

  Scenario Outline: Check if login is unsuccessful with invalid password
    Given user is on amazon home page - hooks
    When user clicks on login button - hooks
    And user enters <email> email - hooks
    And user clicks continue button - hooks
    And user enters incorrect <password> - hooks
    And user clicks on sign in button - hooks
    Then page displays invalid password error message - hooks

    Examples:
      |       email                  |      password         |
      |   testskit12345@gmail.com    |     WrongPassword     |