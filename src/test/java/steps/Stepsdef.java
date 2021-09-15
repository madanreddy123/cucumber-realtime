package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pages.Static;

public class Stepsdef 
{
	WebDriver driver;
	

	@Before()
	
	public void before()
	{
		    driver = new ChromeDriver();
	        driver.get("https://testzenlabs.ie/education-form/");
			driver.manage().window().maximize();
		
	}
	

@After()
	
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
		driver.quit();
	}



	@Given("^I enter the name a Primary_School$")
	public void i_enter_the_name_a_Primary_School() throws Throwable {
		
			
			Static login = new Static(driver);
			login.Primary_School("primary");
			
	}

	@Given("^I enter the name a Secondary_School$")
	public void i_enter_the_name_a_Secondary_School() throws Throwable {
		Static login = new Static(driver);
		login.Secondary_School("mmhs");
	}

	@Given("^I enter the name a Intermediate$")
	public void i_enter_the_name_a_Intermediate() throws Throwable {
Static login = new Static(driver);
		
		login.Intermediate("gghhh");
	}

	@When("^I enter the name a Engineering$")
	public void i_enter_the_name_a_Engineering() throws Throwable {
		Static login = new Static(driver);
		login.Engineering("ghhh");
	}

	@When("^I enter the name a University$")
	public void i_enter_the_name_a_University() throws Throwable {
		Static login = new Static(driver);
		login.University("vggg");
		
	}

	@When("^I enter the intermediate_Percentage$")
	public void i_enter_the_intermediate_Percentage() throws Throwable {
		Static login = new Static(driver);
		login.Intermediate_Percentage("Intermediate Percentage");
	}

	@When("^I click on gender$")
	public void i_click_on_gender() throws Throwable {
	
		
		driver.quit();
	}


}
