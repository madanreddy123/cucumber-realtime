package steps;

import org.junit.Assert;
import Static.Static;
import TestBase.TestBase;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Steps extends TestBase
{

@Before
	
	public void intialisation()
	{
		TestBase.initialization();  
	}
	
	

@Given("^I enter the name a Primary_School \"([^\"]*)\"$")
public void i_enter_the_name_a_Primary_School(String primary_School) throws Throwable 
{
	
	Static login = new Static(driver);
	login.Primary_School("primary");
	Assert.assertTrue(login.Primary_School());
	System.out.println("Assert passed");
  
}

@Given("^I enter the name a Secondary_School \"([^\"]*)\"$")
public void i_enter_the_name_a_Secondary_School(String secondary_School) throws Throwable 
{
	
	Static login = new Static(driver);
	login.Secondary_School(secondary_School);
	Assert.assertTrue(login.Primary_School());
	System.out.println("Assert passed");
  
}

@Given("^I enter the name a Intermediate \"([^\"]*)\"$")
public void i_enter_the_name_a_Intermediate(String intermediate) throws Throwable 
{
	
	Static login = new Static(driver);
	
	login.Intermediate(intermediate);
   
}

@When("^I enter the name a Engineering \"([^\"]*)\"$")
public void i_enter_the_name_a_Engineering(String engineering) throws Throwable 
{
	
	Static login = new Static(driver);
	login.Engineering(engineering);

}

@When("^I enter the name a University \"([^\"]*)\"$")
public void i_enter_the_name_a_University(String University) throws Throwable 
{
	
	Static login = new Static(driver);
	login.University(University);

}

@When("^I enter the intermediate_Percentage \"([^\"]*)\"$")
public void i_enter_the_intermediate_Percentage(String intermediate_Percentage) throws Throwable 
{
	Static login = new Static(driver);
	login.Intermediate_Percentage(intermediate_Percentage);
 
}

@When("^I click on gender$")
public void i_click_on_gender() throws Throwable 
{
	Static login = new Static(driver);
	login.Gender();

}

}
