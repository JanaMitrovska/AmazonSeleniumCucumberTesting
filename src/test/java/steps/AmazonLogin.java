package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageFactory.HomePage_PF;
import pageFactory.LoginPage_PF;

import java.util.concurrent.TimeUnit;

public class AmazonLogin {
    WebDriver driver = null;
    HomePage_PF home;
    LoginPage_PF login;

    @Given("browser is open - login")
    public void browserIsOpenLogin() {
        System.out.println("Browser is open");

        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("user is on amazon home page - login")
    public void userIsOnAmazonHomePageLogin() {
        System.out.println("User is on amazon home page");

        driver.navigate().to("https://amazon.com");
    }

    @When("user clicks on login button")
    public void user_clicks_on_log_in_button() {
        System.out.println("User clicks on login button");

        login = new LoginPage_PF (driver);

        login.clickLogin();
    }

    @When("^user enters (.*) email$")
    public void user_enters_email(String email) {
        System.out.println("User enters email");

        login.enterEmail(email);
    }

    @When("user clicks continue button")
    public void user_clicks_continue_button() {
        System.out.println("User clicks continue button");

        login.clickContinue();
    }

    @When("^user enters (.*) password$")
    public void user_enters_password(String password) {
        System.out.println("User enters password");

        login.enterPassword(password);
    }

    @When("user clicks on sign in button")
    public void user_clicks_on_sign_in_button() throws InterruptedException {
        System.out.println("User clicks signin button");

        login.clickSignIn();

        Thread.sleep(2000);
    }

    @Then("user is navigated to the home page - login")
    public void userIsNavigatedToTheHomePageLogin() {
        System.out.println("User is on home page");

        home = new HomePage_PF(driver);

        home.IsDisplayed();

        driver.close();
        driver.quit();
    }


    //------------------------------------------------------------------------------------------------------------------
    //Pogreshen password cekori
    @When("^user enters invalid (.*)$")
    public void user_enters_invalid_password(String password) {
        System.out.println("User enters invalid password");

        login.enterPassword(password);
    }

    @Then("page displays invalid password error message")
    public void page_displays_invalid_password_error_message() {
        System.out.println("page displays invalid password error message");

        login.displayPasswordError();

        driver.close();
        driver.quit();
    }

    //------------------------------------------------------------------------------------------------------------------
    @When("^user enters wrong (.*)$")
    public void user_enters_wrong_email(String email) {
        System.out.println("User enters wrong email");

        login.enterEmail(email);
    }

    @Then("page displays invalid email error message")
    public void page_displays_invalid_email_error_message() {
        System.out.println("page displays invalid email error message");

        login.displayEmailError();

        driver.close();
        driver.quit();
    }
}

