$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddToCart.feature");
formatter.feature({
  "name": "Test add to cart functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check if add to cart feature is successful",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "page displays products",
  "keyword": "Given "
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
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on amazon home page",
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
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is on amazon home page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AmazonLogin.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters wrong test_skit12345@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_enters_wrong_email(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AmazonLogin.user_clicks_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "page displays invalid email error message",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AmazonLogin.page_displays_invalid_email_error_message()"
});
formatter.result({
  "status": "skipped"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
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
});