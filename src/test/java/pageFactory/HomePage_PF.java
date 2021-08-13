package pageFactory;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.security.Key;

public class HomePage_PF {

    @FindBy(id = "nav-logo-sprites")
    WebElement display;

    @FindBy(id = "twotabsearchtextbox")
    WebElement search;

    @FindBy(className = "a-button-inner")
    WebElement searchDisplay;

    @FindBy(className = "a-text-normal")
    WebElement searchError;

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

}
