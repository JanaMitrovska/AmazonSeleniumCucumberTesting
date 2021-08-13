package steps;

import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageFactory.HomePage_PF;

import java.util.concurrent.TimeUnit;

public class AmazonDeliverTo {

    WebDriver driver = null;
    HomePage_PF home;

    @Given("browser is open")
    public void browser_is_open() {
        System.out.println("Browser is open");
        //smeni lokacija na driver
        System.setProperty("webdriver.chrome.driver",
                "C:/Users/Teodora/Desktop/AmazonSeleniumCucumberTesting/src/test/resources/drivers/chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }
    @Given("user is on amazon home page")
    public void user_is_on_amazon_home_page() {
        System.out.println("User is on amazon home page");

        driver.navigate().to("https://amazon.com");
    }


    @When("user clicks on deliver to button")
    public void user_clicks_on_deliver_to_button() {
        System.out.println("User clicks deliver to button");

        home = new HomePage_PF(driver);

        home.DeliverToClicked();
    }


    @When("^user enters (.*) zipcode$")
    public void user_enters_zipcode(String zipcode) {
        System.out.println("User enters zipcode");

        home.ZipCodeIsEntered(zipcode);
    }

    @Then("user is navigated to the home page")
    public void user_is_navigated_to_the_home_page() {
        System.out.println("User is on home page");

        home.IsDisplayed();

        driver.close();
        driver.quit();
    }

    //===================

    @When("^user enters invalid (.*)$")
    public void user_enters_invalid(String zipcode) {
        System.out.println("User enters invalid zipcode");

        home.ZipCodeIsEntered(zipcode);

    }


    @Then("page displays  error")
    public void page_displays_error() {
        System.out.println("User sees the error");

        home.DeliverToErrorDisplayed();

        driver.close();
        driver.quit();
    }



}
