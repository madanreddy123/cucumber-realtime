package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import TestBase.TestBase;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks extends  TestBase
{

@Before
	
	public void intialisation()
	{
		TestBase.initialization();  
	}
	
	@After(order = 2)
	
	public void endTest(Scenario scenario) {
		if (scenario.isFailed()) {

			try {
				
				scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");

			} catch (WebDriverException e) {
				e.printStackTrace();
			}

		}
		else {
			try {
				
				scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}	
	}
	
@After(order = 1)
	
	public void end()
	{
		
		driver.quit();
		
	}


}
