package steps;

import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageFactory.LoginPage_PF;
import pageFactory.ProductsPage_PF;

import java.util.concurrent.TimeUnit;

public class AddToCartTest {
    WebDriver driver = null;
    ProductsPage_PF products;
    LoginPage_PF login;


    @Given("browser is open - add to cart")
    public void browserIsOpenLogin() {
        System.out.println("Browser is open");
        //smeni lokacija na driver
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("user is on amazon home page - add to cart")
    public void userIsOnAmazonHomePageLogin() {
        System.out.println("User is on amazon home page");

        driver.navigate().to("https://amazon.com");
    }

    @When("user clicks on login button - add to cart")
    public void user_clicks_on_log_in_button() {
        System.out.println("User clicks on login button");

        login = new LoginPage_PF(driver);

        login.clickLogin();
    }

    @When("^user enters (.*) email - add to cart$")
    public void user_enters_email(String email) {
        System.out.println("User enters email");

        login.enterEmail(email);
    }

    @When("user clicks continue button - add to cart")
    public void user_clicks_continue_button() {
        System.out.println("User clicks continue button");

        login.clickContinue();
    }

    @When("^user enters valid (.*) - add to cart$")
    public void user_enters_password(String password) {
        System.out.println("User enters password");

        login.enterPassword(password);
    }

    @When("user clicks on sign in button - add to cart")
    public void user_clicks_on_sign_in_button() throws InterruptedException {
        System.out.println("User clicks signin button");

        login.clickSignIn();

        Thread.sleep(2000);
    }

    @Given("page displays products")
    public void pageDisplaysProducts() {
        System.out.println("Browser is open");
        //smeni lokacija na driver
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");

        driver.navigate().to("https://www.amazon.com/s?k=laptop&ref=nb_sb_noss_1");
    }

    @When("products are displayed")
    public void productsAreDisplayed() {
        System.out.println("Products are displayed");
        products = new ProductsPage_PF(driver);

        products.ProductsAreDisplayed();
    }


    @When("user clicks on product")
    public void user_clicks_on_product() throws InterruptedException {
        System.out.println("User clicks on product");

        products.ProductIsClicked();

        Thread.sleep(2000);
    }


    @When("user clicks add to cart")
    public void user_clicks_add_to_cart() throws InterruptedException {
        System.out.println("User clicks add to cart");
        products.AddToCartButtonIsClicked();

        Thread.sleep(2000);
    }


    @Then("product is displayed in shopping cart")
    public void product_is_displayed_in_shopping_cart() {
        System.out.println("Product is in shopping cart");
        products.ItemIsInCart();
        driver.close();
        driver.quit();
    }



}
