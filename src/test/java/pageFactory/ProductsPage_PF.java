package pageFactory;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductsPage_PF {

    @FindBy(className = "sg-col-inner")
    WebElement productsDisplayed;

    //vidi dali moze outline da se napravi da se zimaat razlicni produkti
    @FindBy(xpath = "//*[@id='search']/div[1]/div/div[1]/div[1]/span[3]/div[2]/div[3]/div/span/div/div/div/div/div[2]/div[2]/div/div/div[1]/h2/a/span")
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
