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
    LoginPage_PF login;

    @Given("browser is open")
    public void browser_is_open() {
        System.out.println("Browser is open");
        //smeni lokacija na driver
        System.setProperty("webdriver.chrome.driver", "C:/Users/Teodora/Desktop/AmazonSeleniumCucumberTesting/src/test/resources/drivers/chromedriver.exe");

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

    @When("^user enters valid (.*) input$")
    public void user_enters_valid_input(String input) {
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
    @When("^user enters invalid (.*) input$")
    public void user_enters_invalid_input(String input) {
        System.out.println("user enters invalid input");

        home = new HomePage_PF(driver);

        home.ClickSearchBar(input);
    }

    @Then("page displays search error")
    public void page_displays_search_error() {
        System.out.println("user sees search error");

        home.SearchErrorDisplayed();

        driver.close();

        driver.quit();
    }



}
