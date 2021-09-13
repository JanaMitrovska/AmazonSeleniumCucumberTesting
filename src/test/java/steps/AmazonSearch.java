package steps;

import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageFactory.HomePage_PF;
import pageFactory.LoginPage_PF;

import java.util.concurrent.TimeUnit;

public class AmazonSearch {

    public WebDriver driver = null;
    HomePage_PF home;

    @Given("browser is open - search")
    public void browserIsOpenSearch() {
        System.out.println("Browser is open");

        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("user is on amazon home page - search")
    public void userIsOnAmazonHomePageSearch() {
        System.out.println("User is on amazon home page");

        driver.navigate().to("https://amazon.com");
    }

    @When("^user enters search input (.*)$")
    public void userEntersSearchInputInput(String input) {
        System.out.println("user enters valid input");

        home = new HomePage_PF(driver);

        home.ClickSearchBar(input);
    }



    @When("user clicks enter")
    public void user_clicks_enter() {
        System.out.println("user clicks enter");

        home.ClickEnter();
    }

    @Then("page displays search items")
    public void page_displays_search_items() {
        System.out.println("user sees search result");

        home.SearchResultDisplayed();

        driver.close();

        driver.quit();
    }

    //=======

    @Then("page displays search error")
    public void page_displays_search_error() {
        System.out.println("user sees search error");

        home.SearchErrorDisplayed();

        driver.close();

        driver.quit();
    }



}
