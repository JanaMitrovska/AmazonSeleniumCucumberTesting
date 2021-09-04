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
  "name": "user is on amazon home page",
  "keyword": "Given "
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
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page",
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
  "name": "user clicks on login button",
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
  "name": "user enters testskit12345@gmail.com email",
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
  "name": "user clicks continue button",
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
  "name": "user enters Skit123! password",
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
  "name": "user clicks on sign in button",
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
  "name": "user is navigated to the home page - login",
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
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check if login is unsuccessful with invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on amazon home page",
  "keyword": "Given "
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
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user is on amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.userIsOnAmazonHomePageLogin()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 18.930\n  (Session info: chrome\u003d93.0.4577.63)\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027TEODORA\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.63, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\Teodora\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:52529}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6e49082c7476d36c3d67206fced60032\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:282)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:935)\r\n\tat stepsForHooks.HooksSteps.userIsOnAmazonHomePageLogin(HooksSteps.java:57)\r\n\tat ✽.user is on amazon home page(file:///F:/6%20семестар%202021/Софтверски%20квалитет%20и%20тестирање/Testing/AmazonSeleniumCucumberTesting/src/test/resources/Hooks/Hooks.feature:18)\r\n",
  "status": "failed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_clicks_on_log_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user enters testskit12345@gmail.com email",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_clicks_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user enters invalid WrongPassword",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_enters_invalid_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "page displays invalid password error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsForHooks.HooksSteps.page_displays_invalid_password_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});