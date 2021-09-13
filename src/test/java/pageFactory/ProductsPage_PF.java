package pageFactory;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductsPage_PF {

    @FindBy(className = "sg-col-inner")
    WebElement productsDisplayed;

    @FindBy(className = "s-image")
    WebElement product;

    @FindBy(id = "add-to-cart-button")
    WebElement addToCart;

    @FindBy(id = "attach-desktop-sideSheet")
    WebElement itemIsInCart;

    WebDriver driver;

    public ProductsPage_PF(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void ProductsAreDisplayed(){productsDisplayed.isDisplayed();}

    public void ProductIsClicked() {
        product.click();
    }

    public void AddToCartButtonIsClicked() {addToCart.click();}

    public void ItemIsInCart() {itemIsInCart.isDisplayed();}

}
