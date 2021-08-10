package pageFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage_PF {

    @FindBy(id = "nav-logo-sprites")
    WebElement display;

    WebDriver driver;

    public HomePage_PF(WebDriver driver) {
        this.driver = driver;
        //koga ke se povika konstruktorot na ovaa linija se inicijaliziraat site promenlivi
        PageFactory.initElements(driver, this);
    }

    public void IsDisplayed(){
        display.isDisplayed();
    }

}
