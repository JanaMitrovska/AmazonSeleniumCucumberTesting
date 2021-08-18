package steps;

import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageFactory.ProductsPage_PF;

import java.util.concurrent.TimeUnit;

public class AddToCartTest {
    WebDriver driver = null;
    ProductsPage_PF products;

    @Given("page displays products")
    public void pageDisplaysProducts() {
        System.out.println("Browser is open");
        //smeni lokacija na driver
        System.setProperty("webdriver.chrome.driver", "C:/Users/mitro/Desktop/CucumberTests/src/test/resources/drivers/chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);

        driver.navigate().to("https://www.amazon.com/s?k=laptop&ref=nb_sb_noss_1");
    }


    @When("products are displayed")
    public void productsAreDisplayed() {
        System.out.println("Products are displayed");
        products = new ProductsPage_PF(driver);

        products.ProductsAreDisplayed();
    }


    @When("user clicks on product")
    public void user_clicks_on_product() {
        System.out.println("User clicks on product");

        products.ProductIsClicked();
    }


    @When("user clicks add to cart")
    public void user_clicks_add_to_cart() {
        System.out.println("User clicks add to cart");
        products.AddToCartButtonIsClicked();
    }


    @Then("product is displayed in shopping cart")
    public void product_is_displayed_in_shopping_cart() {
        System.out.println("Product is in shopping cart");
        products.ItemIsInCart();
        driver.close();
        driver.quit();
    }



}
