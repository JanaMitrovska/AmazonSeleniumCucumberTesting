Feature: Testing shopping cart functionality

  Scenario Outline: Check if quantity feature is successful
    Given browser is open - login
    And user is on amazon home page - login
    When user clicks on login button
    And user enters <email> email
    And user clicks continue button
    And user enters <password> password
    And user clicks on sign in button
    When user clicks cart button
    And user clicks on quantity dropdown button
    And user selects a quantity
    Then multiple products are displayed in shopping cart


    Examples:
      | email                   | password |
      | testskit12345@gmail.com | Skit123! |


  Scenario Outline: Check if quantity feature is unsuccessful
    Given browser is open - login
    And user is on amazon home page - login
    When user clicks on login button
    And user enters <email> email
    And user clicks continue button
    And user enters <password> password
    And user clicks on sign in button
    When user clicks cart button
    And user clicks on quantity dropdown button
    And user selects a invalid quantity
    Then error is displayed in shopping cart


    Examples:
      | email                   | password |
      | testskit12345@gmail.com | Skit123! |



  