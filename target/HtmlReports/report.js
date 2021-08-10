$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/GoogleSearch.feature");
formatter.feature({
  "name": "feature to test google search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate google search is working",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters a text in search box",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "hits enter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/features/LoginDemo.feature");
formatter.feature({
  "name": "Test login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button",
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
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Jana",
        "12345"
      ]
    },
    {
      "cells": [
        "Elle",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Jana and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_enters_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Elle and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_enters_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/demo.feature");
formatter.feature({
  "name": "demo functionality test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user calculated 1/0",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_enters_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Check login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_is_on_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.navigate()\" because \"this.driver\" is null\r\n\tat steps.LoginDemoStepsPOM.user_is_on_login_page(LoginDemoStepsPOM.java:31)\r\n\tat ✽.user is on login page(file:///C:/Users/mitro/Desktop/CucumberTests/src/test/resources/features/demo.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters invalid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_enters_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "error message is displayed - Invalid Credentials",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "login functionality test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_is_on_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.navigate()\" because \"this.driver\" is null\r\n\tat steps.LoginDemoStepsPOM.user_is_on_login_page(LoginDemoStepsPOM.java:31)\r\n\tat ✽.user is on login page(file:///C:/Users/mitro/Desktop/CucumberTests/src/test/resources/features/login.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_enters_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Check login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_is_on_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.navigate()\" because \"this.driver\" is null\r\n\tat steps.LoginDemoStepsPOM.user_is_on_login_page(LoginDemoStepsPOM.java:31)\r\n\tat ✽.user is on login page(file:///C:/Users/mitro/Desktop/CucumberTests/src/test/resources/features/login.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters invalid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginDemoStepsPOM.user_enters_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "error message is displayed - Invalid Credentials",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});