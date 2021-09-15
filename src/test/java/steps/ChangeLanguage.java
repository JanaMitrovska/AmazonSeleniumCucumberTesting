package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageFactory.HomePage_PF;

import java.util.concurrent.TimeUnit;

public class ChangeLanguage {
    WebDriver driver = null;
    HomePage_PF home;

    @Given("browser is open - change language")
    public void browserIsOpenDeliverTo() {
        System.out.println("Browser is open");

        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");

        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("user is on amazon home page - change language")
    public void userIsOnAmazonHomePageDeliverTo() {
        System.out.println("User is on amazon home page");

        driver.navigate().to("https://amazon.com");
    }


    @When("user clicks on flag")
    public void userClicksOnFlag() {
        System.out.println("user clicks on flag");

        home = new HomePage_PF(driver);

        home.ClickFlag();

    }

    @And("user selects spanish")
    public void userSelectsSpanish() {
        System.out.println("user selects spanish");

        home.SelectLanguage();
    }

    @And("user saves changes")
    public void userSavesChanges() {
        System.out.println("user saves changes");
        home.saveChanges();
    }

    @Then("user is navigated to the spanish home page")
    public void userIsNavigatedToTheSpanishHomePage() {
        System.out.println("user is navigated to the spanish home page");
        String text = home.getLanguageText();

        if(text.equals("Hola, Identifícate")){
            driver.close();
            driver.quit();
        }else{
            throw new NullPointerException();
        }
    }
}
