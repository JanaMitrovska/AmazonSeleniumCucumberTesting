package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class AmazonLoginPage {

    WebDriver driver;

    By txt_email = By.id("ap_email");
    By txt_password = By.id("ap_password");
    By signin_button = By.id("signInSubmit");
    By display = By.id("nav-logo-sprites");
    By login_button = By.id("nav-link-accountList-nav-line-1");
    By continue_button = By.id("continue");
    By password_error = By.className("a-alert-heading");
    By email_error = By.className("a-alert-content");

    public AmazonLoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void clickLogin() {driver.findElement(login_button).click();}
    public void enterEmail(String email){
        driver.findElement(txt_email).sendKeys(email);
    }
    public void clickContinueButton() {driver.findElement(continue_button).click();}
    public void enterPassword(String password){
        driver.findElement(txt_password).sendKeys(password);
    }
    public void clickSignIn(){
        driver.findElement(signin_button).click();
    }
    public void UserIsLoggedIn(){
        driver.findElement(display).isDisplayed();
    }
    public void InvalidPasswordError() { driver.findElement(password_error).isDisplayed(); }
    public void InvalidEmailError() { driver.findElement(email_error).isDisplayed(); }
}

