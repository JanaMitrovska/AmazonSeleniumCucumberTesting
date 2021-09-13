$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddToCart.feature");
formatter.feature({
  "name": "Test add to cart functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check if add to cart feature is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - add to cart",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - add to cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button - add to cart",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cemail\u003e email - add to cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks continue button - add to cart",
  "keyword": "And "
});
formatter.step({
  "name": "user enters valid \u003cpassword\u003e - add to cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on sign in button - add to cart",
  "keyword": "And "
});
formatter.step({
  "name": "page displays products",
  "keyword": "And "
});
formatter.step({
  "name": "products are displayed",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on product",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks add to cart",
  "keyword": "And "
});
formatter.step({
  "name": "product is displayed in shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "testskit12345@gmail.com",
        "Skit123!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if add to cart feature is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - add to cart",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AddToCartTest.browserIsOpenLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddToCartTest.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button - add to cart",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddToCartTest.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters testskit12345@gmail.com email - add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddToCartTest.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks continue button - add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddToCartTest.user_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid Skit123! - add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddToCartTest.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button - add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddToCartTest.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page displays products",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddToCartTest.pageDisplaysProducts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "products are displayed",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddToCartTest.productsAreDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on product",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddToCartTest.user_clicks_on_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddToCartTest.user_clicks_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product is displayed in shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddToCartTest.product_is_displayed_in_shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AmazonChangeLanguage.feature");
formatter.feature({
  "name": "Test Changing the language functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check if change language feature is functional",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "browser is open - change language",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.ChangeLanguage.browserIsOpenDeliverTo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - change language",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ChangeLanguage.userIsOnAmazonHomePageDeliverTo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on flag",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ChangeLanguage.userClicksOnFlag()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects spanish",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ChangeLanguage.userSelectsSpanish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user saves changes",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ChangeLanguage.userSavesChanges()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the spanish home page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ChangeLanguage.userIsNavigatedToTheSpanishHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AmazonDeliverTo.feature");
formatter.feature({
  "name": "Test deliver to functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check if deliver to information is valid",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - deliver to",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - deliver to",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on deliver to button",
  "keyword": "When "
});
formatter.step({
  "name": "user enters deliver to zipcode \u003czipcode\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "zipcode"
      ]
    },
    {
      "cells": [
        "20008"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if deliver to information is valid",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - deliver to",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonDeliverTo.browserIsOpenDeliverTo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - deliver to",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonDeliverTo.userIsOnAmazonHomePageDeliverTo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on deliver to button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonDeliverTo.user_clicks_on_deliver_to_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters deliver to zipcode 20008",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonDeliverTo.userEntersDeliverToZipcodeZipcode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonDeliverTo.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check if deliver to is invalid",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - deliver to",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - deliver to",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on deliver to button",
  "keyword": "When "
});
formatter.step({
  "name": "user enters deliver to zipcode \u003czipcode\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "page displays error",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "zipcode"
      ]
    },
    {
      "cells": [
        "1300"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if deliver to is invalid",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - deliver to",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonDeliverTo.browserIsOpenDeliverTo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - deliver to",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonDeliverTo.userIsOnAmazonHomePageDeliverTo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on deliver to button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonDeliverTo.user_clicks_on_deliver_to_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters deliver to zipcode 1300",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonDeliverTo.userEntersDeliverToZipcodeZipcode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page displays error",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonDeliverTo.page_displays_error()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AmazonLogin.feature");
formatter.feature({
  "name": "Test login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check if login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "browser is open - login",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - login",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cemail\u003e email",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks continue button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cpassword\u003e password",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to the home page - login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "testskit12345@gmail.com",
        "Skit123!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "browser is open - login",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonLogin.browserIsOpenLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - login",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonLogin.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters testskit12345@gmail.com email",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Skit123! password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page - login",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonLogin.userIsNavigatedToTheHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check if login is unsuccessful with invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - login",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - login",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cemail\u003e email",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks continue button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters invalid \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "page displays invalid password error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "testskit12345@gmail.com",
        "WrongPassword"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if login is unsuccessful with invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - login",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonLogin.browserIsOpenLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - login",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonLogin.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters testskit12345@gmail.com email",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid WrongPassword",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_enters_invalid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page displays invalid password error message",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonLogin.page_displays_invalid_password_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check if login is unsuccessful with invalid email",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - login",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - login",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "name": "user enters wrong \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks continue button",
  "keyword": "And "
});
formatter.step({
  "name": "page displays invalid email error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "test_skit12345@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if login is unsuccessful with invalid email",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - login",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonLogin.browserIsOpenLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - login",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonLogin.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters wrong test_skit12345@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_enters_wrong_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page displays invalid email error message",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonLogin.page_displays_invalid_email_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AmazonSearch.feature");
formatter.feature({
  "name": "Test search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check if search is successful with valid search words",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - search",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - search",
  "keyword": "And "
});
formatter.step({
  "name": "user enters search input \u003cinput\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks enter",
  "keyword": "And "
});
formatter.step({
  "name": "page displays search items",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "input"
      ]
    },
    {
      "cells": [
        "laptop"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if search is successful with valid search words",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - search",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonSearch.browserIsOpenSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - search",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonSearch.userIsOnAmazonHomePageSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters search input laptop",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonSearch.userEntersSearchInputInput(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks enter",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonSearch.user_clicks_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page displays search items",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonSearch.page_displays_search_items()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check if search is successful with invalid search words",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - search",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - search",
  "keyword": "And "
});
formatter.step({
  "name": "user enters search input \u003cinput\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks enter",
  "keyword": "And "
});
formatter.step({
  "name": "page displays search error",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "input"
      ]
    },
    {
      "cells": [
        "fjskdzslmdcbjfskd123e4r323"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if search is successful with invalid search words",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - search",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonSearch.browserIsOpenSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - search",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonSearch.userIsOnAmazonHomePageSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters search input fjskdzslmdcbjfskd123e4r323",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonSearch.userEntersSearchInputInput(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks enter",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonSearch.user_clicks_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page displays search error",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonSearch.page_displays_search_error()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AmazonShoppingCart.feature");
formatter.feature({
  "name": "Testing shopping cart functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check if quantity feature is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - Shopping cart",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button - Shopping cart",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cemail\u003e email - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks continue button - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cpassword\u003e password - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on sign in button - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks cart button",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on quantity dropdown button",
  "keyword": "And "
});
formatter.step({
  "name": "user selects a quantity",
  "keyword": "And "
});
formatter.step({
  "name": "multiple products are displayed in shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "testskit12345@gmail.com",
        "Skit123!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if quantity feature is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - Shopping cart",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.browserIsOpenLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button - Shopping cart",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters testskit12345@gmail.com email - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks continue button - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Skit123! password - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks cart button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.UserClicksCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on quantity dropdown button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.UserClicksOnQuantityDropdownButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a quantity",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.UserSelectsAQuantity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "multiple products are displayed in shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.mulitple_products_are_displayed_in_shopping_cart()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat steps.AmazonShoppingCart.mulitple_products_are_displayed_in_shopping_cart(AmazonShoppingCart.java:134)\r\n\tat ✽.multiple products are displayed in shopping cart(file:///C:/Users/mitro/Desktop/AmazonTesting/src/test/resources/features/AmazonShoppingCart.feature:14)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Check if quantity feature is unsuccessful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - Shopping cart",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button - Shopping cart",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cemail\u003e email - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks continue button - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cpassword\u003e password - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on sign in button - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks cart button",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on quantity dropdown button",
  "keyword": "And "
});
formatter.step({
  "name": "user selects a invalid quantity",
  "keyword": "And "
});
formatter.step({
  "name": "error is displayed in shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "testskit12345@gmail.com",
        "Skit123!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if quantity feature is unsuccessful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - Shopping cart",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.browserIsOpenLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button - Shopping cart",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters testskit12345@gmail.com email - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks continue button - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Skit123! password - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks cart button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.UserClicksCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on quantity dropdown button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.UserClicksOnQuantityDropdownButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a invalid quantity",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.UserSelectsAInvalidQuantity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error is displayed in shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.error_is_displayed_in_shopping_cart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".a\\-popover\\-content\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027DESKTOP-UJ6OHJT\u0027, ip: \u0027192.168.100.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\mitro\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51341}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4c9b892d33762afde1bf9694b6099513\n*** Element info: {Using\u003dclass name, value\u003da-popover-content}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:431)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:437)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat pageFactory.HomePage_PF.ErrorInQuantity(HomePage_PF.java:109)\r\n\tat steps.AmazonShoppingCart.error_is_displayed_in_shopping_cart(AmazonShoppingCart.java:151)\r\n\tat ✽.error is displayed in shopping cart(file:///C:/Users/mitro/Desktop/AmazonTesting/src/test/resources/features/AmazonShoppingCart.feature:33)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Check if delete feature is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - Shopping cart",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button - Shopping cart",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cemail\u003e email - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks continue button - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cpassword\u003e password - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on sign in button - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks cart button",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks delete button",
  "keyword": "And "
});
formatter.step({
  "name": "cart is empty",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "testskit12345@gmail.com",
        "Skit123!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if delete feature is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - Shopping cart",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.browserIsOpenLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button - Shopping cart",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters testskit12345@gmail.com email - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks continue button - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Skit123! password - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks cart button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.UserClicksCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks delete button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cart is empty",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.cart_is_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check if save for later is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - Shopping cart",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button - Shopping cart",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cemail\u003e email - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks continue button - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cpassword\u003e password - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on sign in button - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks cart button",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks save for later button",
  "keyword": "And "
});
formatter.step({
  "name": "product is in save for later",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "testskit12345@gmail.com",
        "Skit123!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if save for later is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - Shopping cart",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.browserIsOpenLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button - Shopping cart",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters testskit12345@gmail.com email - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks continue button - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Skit123! password - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks cart button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.UserClicksCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save for later button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_save_for_later_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027submit.save-for-later.Cb8f43b40-5726-453f-82e1-f068698822df\u0027]\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027DESKTOP-UJ6OHJT\u0027, ip: \u0027192.168.100.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\mitro\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51361}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5df89affa772c5ed0dd346b27e6e5859\n*** Element info: {Using\u003dname, value\u003dsubmit.save-for-later.Cb8f43b40-5726-453f-82e1-f068698822df}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:311)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageFactory.HomePage_PF.SaveForLaterButton(HomePage_PF.java:119)\r\n\tat steps.AmazonShoppingCart.user_clicks_save_for_later_button(AmazonShoppingCart.java:192)\r\n\tat ✽.user clicks save for later button(file:///C:/Users/mitro/Desktop/AmazonTesting/src/test/resources/features/AmazonShoppingCart.feature:69)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "product is in save for later",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.productIsInSaveForLater()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Check if moving product from save for later to cart is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - Shopping cart",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button - Shopping cart",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cemail\u003e email - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks continue button - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cpassword\u003e password - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on sign in button - Shopping cart",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks cart button",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks move to cart button",
  "keyword": "And "
});
formatter.step({
  "name": "product is in shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "testskit12345@gmail.com",
        "Skit123!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check if moving product from save for later to cart is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open - Shopping cart",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.browserIsOpenLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button - Shopping cart",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters testskit12345@gmail.com email - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks continue button - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Skit123! password - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button - Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks cart button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.UserClicksCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks move to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.userClicksMoveToCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product is in shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonShoppingCart.productIsInShoppingCart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#sc\\-subtotal\\-label\\-activecart\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027DESKTOP-UJ6OHJT\u0027, ip: \u0027192.168.100.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\mitro\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63867}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0049f1a4155812a1c204bf5168c99062\n*** Element info: {Using\u003did, value\u003dsc-subtotal-label-activecart}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat pageFactory.HomePage_PF.getSubtotalText(HomePage_PF.java:115)\r\n\tat steps.AmazonShoppingCart.productIsInShoppingCart(AmazonShoppingCart.java:229)\r\n\tat ✽.product is in shopping cart(file:///C:/Users/mitro/Desktop/AmazonTesting/src/test/resources/features/AmazonShoppingCart.feature:88)\r\n",
  "status": "failed"
});
});