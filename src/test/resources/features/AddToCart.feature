Feature: Test add to cart functionality

  @Smoke
  Scenario: Check if add to cart feature is successful
    Given page displays products
    When products are displayed
    And user clicks on product
    And user clicks add to cart
    Then product is displayed in shopping cart

