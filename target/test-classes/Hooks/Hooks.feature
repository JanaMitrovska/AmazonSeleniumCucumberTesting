Feature: Check login functionality

  Scenario Outline:Check if login is successful with valid credentials
    Given user is on amazon home page
    When user clicks on login button
    And user enters <email> email
    And user clicks continue button
    And user enters <password> password
    And user clicks on sign in button
    Then user is navigated to the home page - login


    Examples:
      |         email               | password    |
      |    testskit12345@gmail.com  |    Skit123! |

  Scenario Outline: Check if login is unsuccessful with invalid password
    Given user is on amazon home page
    When user clicks on login button
    And user enters <email> email
    And user clicks continue button
    And user enters invalid <password>
    And user clicks on sign in button
    Then page displays invalid password error message

    Examples:
      |       email                  |      password         |
      |   testskit12345@gmail.com    |     WrongPassword     |