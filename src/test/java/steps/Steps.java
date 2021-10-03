package steps;






import org.junit.Assert;

import TestBase.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pages.testing;

public class Steps extends TestBase
{

@Given("^I enter the name a Primary_School \"([^\"]*)\"$")
public void i_enter_the_name_a_Primary_School(String primary_School) throws Throwable 
{
	
	testing login = new testing(driver);
	
    Assert.assertEquals("Education Form - Test Automation & IT Consultancy Services", login.gettile());
	login.Primary_School("primary");
    Assert.assertTrue(login.Primary_School());

  
}

@Given("^I enter the name a Secondary_School \"([^\"]*)\"$")
public void i_enter_the_name_a_Secondary_School(String secondary_School) throws Throwable 
{
	
	testing login = new testing(driver);
    Assert.assertEquals("Education Form - Test Automation & IT Consultancy Services", login.gettile());

	login.Secondary_School(secondary_School);
	Assert.assertTrue(login.Secondary_School());
  
}

@Given("^I enter the name a Intermediate \"([^\"]*)\"$")
public void i_enter_the_name_a_Intermediate(String intermediate) throws Throwable 
{
	
	testing login = new testing(driver);
	
    Assert.assertEquals("Education Form - Test Automation & IT Consultancy Services", login.gettile());

	login.Intermediate(intermediate);
	Assert.assertTrue(login.Intermediate());
	
   
}

@When("^I enter the name a Engineering \"([^\"]*)\"$")
public void i_enter_the_name_a_Engineering(String engineering) throws Throwable 
{
	
	testing login = new testing(driver);
    Assert.assertEquals("Education Form - Test Automation & IT Consultancy Services", login.gettile());

	login.Engineering(engineering);
	Assert.assertTrue(login.Engineering());

}

@When("^I enter the name a University \"([^\"]*)\"$")
public void i_enter_the_name_a_University(String University) throws Throwable 
{
	
	testing login = new testing(driver);
	
    Assert.assertEquals("Education Form - Test Automation & IT Consultancy Services", login.gettile());

	login.University(University);
	Assert.assertTrue(login.University());

}

@When("^I enter the intermediate_Percentage \"([^\"]*)\"$")
public void i_enter_the_intermediate_Percentage(String intermediate_Percentage) throws Throwable 
{
	testing login = new testing(driver);
    Assert.assertEquals("Education Form - Test Automation & IT Consultancy Services", login.gettile());

	login.Intermediate_Percentage(intermediate_Percentage);
 
}

@When("^I click on gender$")
public void i_click_on_gender() throws Throwable 
{
	testing login = new testing(driver);
    Assert.assertEquals("Education Form - Test Automation & IT Consultancy Services", login.gettile());

	login.Gender();

}

}
