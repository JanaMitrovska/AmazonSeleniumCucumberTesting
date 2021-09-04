package pageFactory;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage_PF {

    @FindBy(id = "nav-logo-sprites")
    WebElement display;

    @FindBy(id = "twotabsearchtextbox")
    WebElement search;

    @FindBy(className = "a-button-inner")
    WebElement searchDisplay;

    @FindBy(className = "a-text-normal")
    WebElement searchError;

    @FindBy(id = "nav-packard-glow-loc-icon")
    WebElement deliverTo;

    @FindBy(id = "GLUXZipUpdateInput")
    WebElement zipcodeInput;

    @FindBy(className = "a-button a-button-span12")
    WebElement applyButton;

    @FindBy(className = "GLUXConfirmClose")
    WebElement continueButton;

    ////*[@id="GLUXZipError"]/div/div/i
    @FindBy(xpath = "//*[@id='GLUXZipError']/div/div/i")
    WebElement deliverToError;

    @FindBy(id = "nav-cart-count-container")
    WebElement cartButton;

    @FindBy(className = "a-dropdown-prompt")
    WebElement quantityDropdown;

    @FindBy(id = "quantity_2")
    WebElement quantity;

    @FindBy(className = "a-popover-content")
    WebElement errorQuantity;



    WebDriver driver;

    public HomePage_PF(WebDriver driver) {
        this.driver = driver;
        //koga ke se povika konstruktorot na ovaa linija se inicijaliziraat site promenlivi
        PageFactory.initElements(driver, this);
    }

    public void IsDisplayed(){
        display.isDisplayed();
    }
    public void ClickSearchBar(String input) {
        search.click();
        search.sendKeys(input);}
    public void ClickEnter(){search.sendKeys(Keys.ENTER);}
    public void SearchResultDisplayed(){searchDisplay.isDisplayed();}
    public void SearchErrorDisplayed(){searchError.isDisplayed();}
    public void DeliverToClicked(){deliverTo.click();}
    public void ZipCodeIsEntered(String zipcode){
        zipcodeInput.sendKeys(zipcode);
        zipcodeInput.sendKeys(Keys.ENTER);
        zipcodeInput.sendKeys(Keys.ENTER);
    }
    public void ApplyButtonClicked(){applyButton.click();}
    public void ContinueButtonIsClicked(){continueButton.click();}
    public void DeliverToErrorDisplayed(){deliverToError.isDisplayed();}


    public void ClickShoppingCart() {cartButton.click();}
    public void ClickQuantityDropdown() {quantityDropdown.click();}
    public void SelectQuantity2() { quantity.click();}
    public void SelectQuantity4() { quantity.click();}
    public void ErrorInQuantity() { errorQuantity.isDisplayed(); }


}
