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

public class AmazonShoppingCart {

    WebDriver driver = null;
    HomePage_PF home;
    LoginPage_PF login;

    //-------------------------------------------------------------------------------------------
    //Quantity button steps
    //-------------------------------------------------------------------------------------------

    @Given("browser is open - Shopping cart")
    public void browserIsOpenLogin() {
        System.out.println("Browser is open");

        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("user is on amazon home page - Shopping cart")
    public void userIsOnAmazonHomePageLogin() {
        System.out.println("User is on amazon home page");

        driver.navigate().to("https://amazon.com");
    }

    @When("user clicks on login button - Shopping cart")
    public void user_clicks_on_log_in_button() {
        System.out.println("User clicks on login button");

        login = new LoginPage_PF(driver);

        login.clickLogin();
    }

    @When("^user enters (.*) email - Shopping cart$")
    public void user_enters_email(String email) {
        System.out.println("User enters email");

        login.enterEmail(email);
    }

    @When("user clicks continue button - Shopping cart")
    public void user_clicks_continue_button() {
        System.out.println("User clicks continue button");

        login.clickContinue();
    }

    @When("^user enters (.*) password - Shopping cart$")
    public void user_enters_password(String password) {
        System.out.println("User enters password");

        login.enterPassword(password);
    }

    @When("user clicks on sign in button - Shopping cart")
    public void user_clicks_on_sign_in_button() throws InterruptedException {
        System.out.println("User clicks signin button");

        login.clickSignIn();

        Thread.sleep(2000);
    }

    @Given("home page is open - Shopping cart")
    public void HomePageIsOpen() {
        System.out.println("home page is open");

        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);

        driver.navigate().to("https://www.amazon.com");
    }


    @When("user clicks cart button")
    public void UserClicksCartButton() {
        System.out.println("user clicks cart button");
        home = new HomePage_PF(driver);

        home.ClickShoppingCart();

    }


    @When("user clicks on quantity dropdown button")
    public void UserClicksOnQuantityDropdownButton() {
        System.out.println("user clicks on quantity dropdown button");
        home.ClickQuantityDropdown();

    }


    @When("user selects a quantity")
    public void UserSelectsAQuantity() {
        System.out.println("user selects a quantity");
        home.SelectQuantity2();

    }


    @Then("multiple products are displayed in shopping cart")
    public void mulitple_products_are_displayed_in_shopping_cart() {
        System.out.println("multiple products are displayed in shopping cart");

        String text = home.getSubtotalText();

        if(text.equals("Subtotal (2 items):")){
            driver.close();
            driver.quit();
        }else{
            throw new NullPointerException();
        }
    }



    @When("user selects a invalid quantity")
    public void UserSelectsAInvalidQuantity() {
        System.out.println("user selects a invalid quantity");
        home.SelectQuantity4();

    }

    @Then("error is displayed in shopping cart")
    public void error_is_displayed_in_shopping_cart() {
        System.out.println("error is displayed in shopping cart");

        home.ErrorInQuantity();

        driver.close();
        driver.quit();
    }

    //-------------------------------------------------------------------------------------------
    //Delete button steps
    //-------------------------------------------------------------------------------------------


    @When("user clicks delete button")
    public void user_clicks_delete_button() {
        System.out.println("user clicks delete button");

        home.DeleteButton();
    }

    @Then("cart is empty")
    public void cart_is_empty() {
        System.out.println("cart is empty");

        String text = home.getSubtotalText();

        if(text.equals("Subtotal (0 items):")){
            driver.close();
            driver.quit();
        }else{
            throw new NullPointerException();
        }
    }


    //-------------------------------------------------------------------------------------------
    //Save for later button steps
    //-------------------------------------------------------------------------------------------

    @When("user clicks save for later button")
    public void user_clicks_save_for_later_button() throws InterruptedException {
        System.out.println("user clicks save for later button");

        home.SaveForLaterButton();

        Thread.sleep(2000);
    }

    @Then("product is in save for later")
    public void productIsInSaveForLater() {
        System.out.println("product is in save for later");

        String text = home.getSaveForLaterText();
        System.out.println(text);
        if(text.equals("Saved for later (1 item)")){
            driver.close();
            driver.quit();
        }else{
            throw new NullPointerException();
        }
    }


    //-------------------------------------------------------------------------------------------
    //Move from Save for later to Cart steps
    //-------------------------------------------------------------------------------------------

    @And("user clicks move to cart button")
    public void userClicksMoveToCartButton() throws InterruptedException {
        System.out.println("user clicks move to cart button");

        home.ClickMoveToCart();

        Thread.sleep(2000);
    }

    @Then("product is in shopping cart")
    public void productIsInShoppingCart() {
        System.out.println("product is in shopping cart");

        String text = home.getSubtotalText();
        System.out.println(text);
        if(text.equals("Subtotal (1 item):")){
            driver.close();
            driver.quit();
        }else{
            throw new NullPointerException();
        }

    }
}
