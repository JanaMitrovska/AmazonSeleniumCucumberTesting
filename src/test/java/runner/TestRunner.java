package runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features",
monochrome = true,
glue= {"steps"},
//generiranje na izveshtai vo target papkata:
plugin = {"pretty", "junit:target/JUnitReports/JUnitReport.xml",
        "json:target/JSONReports/CucumberReport.json",
        "html:target/HtmlReports"})
public class TestRunner {

}
