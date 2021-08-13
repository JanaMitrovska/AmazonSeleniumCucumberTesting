Feature: Test search functionality

  Scenario Outline: Check if search is successful with valid search words
    Given browser is open
    And user is on amazon home page
    When user enters valid <input> input
    And user clicks enter
    Then page displays search items

    Examples:
      | input  |
      | laptop |

  Scenario Outline: Check if search is successful with invalid search words
    Given browser is open
    And user is on amazon home page
    When user enters invalid <input> input
    And user clicks enter
    Then page displays search error

    Examples:
      | input  |
      | fjskdzslmdcbjfskd123e4r323 |