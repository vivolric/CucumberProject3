package Runner;


import Utilities.Driver;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Parameters;

import java.io.File;

@CucumberOptions(

        plugin = {
                "html:target/cucumber-Html-Report",
                "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport/ExtentReportEnd2End.html" // to generate a extend report we need this plugin
        },
        tags = {"@Reg"},
        features = {"src/test/java/Features"},
        glue = {"StepDefinition"},
        dryRun = false

)

public class RegRunner extends AbstractTestNGCucumberTests {

    //        After runner is done this after method will run and put username application name information in the report.
    @AfterClass
    public static void afterClass(){

//                Location of the xml file
        Reporter.loadXMLConfig(new File("src\\test\\java\\Features\\extentReport.xml"));
        Reporter.setSystemInfo("User Name" , "Ali Koklu");
        Reporter.setSystemInfo("Application Name", "Basqar");
        Reporter.setSystemInfo("Operating System Type" , System.getProperty("os.name"));
        Reporter.setSystemInfo("Environment", "QA");
        Reporter.setTestRunnerOutput("Test execution Cucumber report");
    }
}

