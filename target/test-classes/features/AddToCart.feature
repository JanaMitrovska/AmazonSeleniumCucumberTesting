Feature: Test add to cart functionality

  Scenario Outline: Check if add to cart feature is successful
    Given browser is open - add to cart
    And user is on amazon home page - add to cart
    When user clicks on login button - add to cart
    And user enters <email> email - add to cart
    And user clicks continue button - add to cart
    And user enters valid <password> - add to cart
    And user clicks on sign in button - add to cart
    And page displays products
    When products are displayed
    And user clicks on product
    And user clicks add to cart
    Then product is displayed in shopping cart

    Examples:
      |         email               | password    |
      |    testskit12345@gmail.com  |    Skit123! |
