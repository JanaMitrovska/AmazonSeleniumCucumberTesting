Feature: Test login functionality

  @Smoke
  Scenario Outline: Check if login is successful with valid credentials
    Given browser is open - login
    And user is on amazon home page - login
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
    Given browser is open - login
    And user is on amazon home page - login
    When user clicks on login button
    And user enters <email> email
    And user clicks continue button
    And user enters invalid <password>
    And user clicks on sign in button
    Then page displays invalid password error message

    Examples:
      |       email                  |      password         |
      |   testskit12345@gmail.com    |     WrongPassword     |


  Scenario Outline: Check if login is unsuccessful with invalid email
    Given browser is open - login
    And user is on amazon home page - login
    When user clicks on login button
    And user enters wrong <email>
    And user clicks continue button
    Then page displays invalid email error message

    Examples:
      |       email                  |
      |   test_skit12345@gmail.com   |