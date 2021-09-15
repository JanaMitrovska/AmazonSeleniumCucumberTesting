package stepsForHooks;

import io.cucumber.java.*;
import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageFactory.HomePage_PF;
import pageFactory.LoginPage_PF;

import java.util.concurrent.TimeUnit;

public class HooksSteps {

    WebDriver driver = null;
    HomePage_PF home;
    LoginPage_PF login;

    @Before
    public void browserSetup(){
        System.out.println("Inside browser setup");

        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");

        driver = new ChromeDriver();

        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @After(order = 2)
    public  void tearDown(){
        System.out.println("Inside tearDown");
        driver.close();
    }

    @After(order = 1)
    public  void quitDown(){
        System.out.println("Quiting the driver");
        driver.quit();
    }

    @BeforeStep
    public static void beforeSteps(){
        System.out.println("== Start of step");
    }

    @AfterStep
    public static void afterSteps(){
        System.out.println("Finishing the step ==");
    }

    @Given("user is on amazon home page - hooks")
    public void userIsOnAmazonHomePageLogin() {
        System.out.println("User is on amazon home page");

        driver.navigate().to("https://amazon.com");
    }

    @When("user clicks on login button - hooks")
    public void user_clicks_on_log_in_button() {
        System.out.println("User clicks on login button");

        login = new LoginPage_PF(driver);

        login.clickLogin();
    }

    @When("^user enters (.*) email - hooks$")
    public void user_enters_email(String email) {
        System.out.println("User enters email");

        login.enterEmail(email);
    }

    @When("user clicks continue button - hooks")
    public void user_clicks_continue_button() {
        System.out.println("User clicks continue button");

        login.clickContinue();
    }

    @When("^user enters (.*) password - hooks$")
    public void user_enters_password(String password) {
        System.out.println("User enters password");

        login.enterPassword(password);
    }

    @When("user clicks on sign in button - hooks")
    public void user_clicks_on_sign_in_button() throws InterruptedException {
        System.out.println("User clicks signin button");

        login.clickSignIn();

        Thread.sleep(2000);
    }

    @Then("user is navigated to the home page - hooks")
    public void user_is_navigated_to_the_home_page_login() {
        System.out.println("User is on home page");

        home = new HomePage_PF(driver);

        home.IsDisplayed();
    }
    //------------------------------------------------------------------------------------------------------------------
    //Pogreshen password cekori
    @When("^user enters incorrect (.*) - hooks$")
    public void user_enters_invalid_password(String password) {
        System.out.println("User enters invalid password");

        login.enterPassword(password);
    }

    @Then("page displays invalid password error message - hooks")
    public void page_displays_invalid_password_error_message() {
        System.out.println("page displays invalid password error message");

        login.displayPasswordError();
    }
}
