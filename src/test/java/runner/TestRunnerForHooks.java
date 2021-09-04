package runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Hooks/Hooks.feature",
        monochrome = true,
        glue= {"stepsForHooks"},
        plugin = {"pretty", "junit:target/JUnitReports/JUnitReport.xml",
                "json:target/JSONReports/CucumberReport.json",
                "html:target/HtmlReports"})
public class TestRunnerForHooks {
}
