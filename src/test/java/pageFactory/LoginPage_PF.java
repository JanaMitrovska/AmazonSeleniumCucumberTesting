package pageFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage_PF {

    @FindBy(id = "ap_email")
    WebElement txt_email;

    @FindBy(id = "ap_password")
    WebElement txt_password;

    @FindBy(id = "signInSubmit")
    WebElement signin_button;

    @FindBy(id = "nav-link-accountList-nav-line-1")
    WebElement login_button;

    @FindBy(id = "continue")
    WebElement continue_button;

    @FindBy(className = "a-alert-heading")
    WebElement password_error;

    @FindBy(className = "a-alert-content")
    WebElement email_error;

    WebDriver driver;

    public LoginPage_PF(WebDriver driver) {
        this.driver = driver;
        //koga ke se povika konstruktorot na ovaa linija se inicijaliziraat site promenlivi
        PageFactory.initElements(driver, this);
    }


    public void enterEmail (String email){
        txt_email.sendKeys(email);
    }

    public void enterPassword (String password){
        txt_password.sendKeys(password);
    }

    public void clickSignIn (){
        signin_button.click();
    }

    public void clickLogin () { login_button.click(); }

    public void clickContinue() { continue_button.click(); }

    public void displayPasswordError() { password_error.isDisplayed(); }

    public void  displayEmailError() { email_error.isDisplayed(); }

}
