Feature: Testing shopping cart functionality

  Scenario Outline: Check if quantity feature is successful
    Given browser is open - Shopping cart
    And user is on amazon home page - Shopping cart
    When user clicks on login button - Shopping cart
    And user enters <email> email - Shopping cart
    And user clicks continue button - Shopping cart
    And user enters <password> password - Shopping cart
    And user clicks on sign in button - Shopping cart
    When user clicks cart button
    And user clicks on quantity dropdown button
    And user selects a quantity
    Then multiple products are displayed in shopping cart


    Examples:
      | email                   | password |
      | testskit12345@gmail.com | Skit123! |


  Scenario Outline: Check if quantity feature is unsuccessful
    Given browser is open - Shopping cart
    And user is on amazon home page - Shopping cart
    When user clicks on login button - Shopping cart
    And user enters <email> email - Shopping cart
    And user clicks continue button - Shopping cart
    And user enters <password> password - Shopping cart
    And user clicks on sign in button - Shopping cart
    When user clicks cart button
    And user clicks on quantity dropdown button
    And user selects a invalid quantity
    Then error is displayed in shopping cart


    Examples:
      | email                   | password |
      | testskit12345@gmail.com | Skit123! |


  Scenario Outline: Check if delete feature is successful
    Given browser is open - Shopping cart
    And user is on amazon home page - Shopping cart
    When user clicks on login button - Shopping cart
    And user enters <email> email - Shopping cart
    And user clicks continue button - Shopping cart
    And user enters <password> password - Shopping cart
    And user clicks on sign in button - Shopping cart
    When user clicks cart button
    And user clicks delete button
    Then cart is empty


    Examples:
      | email                   | password |
      | testskit12345@gmail.com | Skit123! |



  Scenario Outline: Check if save for later is successful
    Given browser is open - Shopping cart
    And user is on amazon home page - Shopping cart
    When user clicks on login button - Shopping cart
    And user enters <email> email - Shopping cart
    And user clicks continue button - Shopping cart
    And user enters <password> password - Shopping cart
    And user clicks on sign in button - Shopping cart
    When user clicks cart button
    And user clicks save for later button
    Then product is in save for later


    Examples:
      | email                   | password |
      | testskit12345@gmail.com | Skit123! |


  Scenario Outline: Check if moving product from save for later to cart is successful
    Given browser is open - Shopping cart
    And user is on amazon home page - Shopping cart
    When user clicks on login button - Shopping cart
    And user enters <email> email - Shopping cart
    And user clicks continue button - Shopping cart
    And user enters <password> password - Shopping cart
    And user clicks on sign in button - Shopping cart
    When user clicks cart button
    And user clicks move to cart button
    Then product is in shopping cart


    Examples:
      | email                   | password |
      | testskit12345@gmail.com | Skit123! |