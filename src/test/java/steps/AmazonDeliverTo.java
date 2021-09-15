package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageFactory.HomePage_PF;

import java.util.concurrent.TimeUnit;

public class AmazonDeliverTo {

    WebDriver driver = null;
    HomePage_PF home;

    @Given("browser is open - deliver to")
    public void browserIsOpenDeliverTo() {
        System.out.println("Browser is open");

        System.setProperty("webdriver.chrome.driver",
                "src/test/resources/drivers/chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("user is on amazon home page - deliver to")
    public void userIsOnAmazonHomePageDeliverTo() {
        System.out.println("User is on amazon home page");

        driver.navigate().to("https://amazon.com");
    }



    @When("user clicks on deliver to button")
    public void user_clicks_on_deliver_to_button() throws InterruptedException {
        System.out.println("User clicks deliver to button");

        home = new HomePage_PF(driver);

        home.DeliverToClicked();

        Thread.sleep(2000);
    }

    @And("^user enters deliver to zipcode (.*)$")
    public void userEntersDeliverToZipcodeZipcode(String zipcode) throws InterruptedException {
        System.out.println("User enters zipcode");

        home.ZipCodeIsEntered(zipcode);

        Thread.sleep(2000);
    }



    @Then("user is navigated to the home page")
    public void user_is_navigated_to_the_home_page() {
        System.out.println("User is on home page");

        home.IsDisplayed();

        driver.close();
        driver.quit();


    }

    //===================
    @Then("page displays error")
    public void page_displays_error() {
        System.out.println("User sees the error");

        home.DeliverToErrorDisplayed();

        driver.close();
        driver.quit();
    }



}
