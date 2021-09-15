$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Hooks/Hooks.feature");
formatter.feature({
  "name": "Check login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check if login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on amazon home page - hooks",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on login button - hooks",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cemail\u003e email - hooks",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks continue button - hooks",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cpassword\u003e password - hooks",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on sign in button - hooks",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to the home page - hooks",
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
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - hooks",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button - hooks",
  "keyword": "When "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enters testskit12345@gmail.com email - hooks",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks continue button - hooks",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enters Skit123! password - hooks",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button - hooks",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page - hooks",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_is_navigated_to_the_home_page_login()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027TEODORA\u0027, ip: \u0027192.168.100.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:128)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:639)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:468)\r\n\tat stepsForHooks.HooksSteps.tearDown(HooksSteps.java:35)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Check if login is unsuccessful with invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on amazon home page - hooks",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on login button - hooks",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cemail\u003e email - hooks",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks continue button - hooks",
  "keyword": "And "
});
formatter.step({
  "name": "user enters incorrect \u003cpassword\u003e - hooks",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on sign in button - hooks",
  "keyword": "And "
});
formatter.step({
  "name": "page displays invalid password error message - hooks",
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
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page - hooks",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button - hooks",
  "keyword": "When "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enters testskit12345@gmail.com email - hooks",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks continue button - hooks",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enters incorrect WrongPassword - hooks",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_enters_invalid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign in button - hooks",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "page displays invalid password error message - hooks",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.page_displays_invalid_password_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027TEODORA\u0027, ip: \u0027192.168.100.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:128)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:639)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:468)\r\n\tat stepsForHooks.HooksSteps.tearDown(HooksSteps.java:35)\r\n",
  "status": "failed"
});
});