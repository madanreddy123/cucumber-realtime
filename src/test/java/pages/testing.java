package pages;


import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import TestBase.Waithelper;

public class testing 
{

    WebDriver driver;
    Waithelper waithelper;
   

	public testing(WebDriver driver) {
		this.driver = driver;
		waithelper = new Waithelper(driver);	
	}


	By Primary_School = By.xpath("//input[@placeholder='Primary School Name']");
	By Secondary_School = By.xpath("//input[@placeholder='Secondary School Name']");
	By Intermediate = By.xpath("//input[@placeholder='Intermediate College Name']");
	By Engineering = By.xpath("//input[@placeholder='Engineering College Name']");
	By University = By.xpath("//input[@placeholder='University Name']");
	By Intermediate_Percentage = By.xpath("//input[@placeholder='Intermediate Percentage']");
	By Gender = By.xpath("//input[@id='profession-0']");

	

	public String gettile()
	{
		return driver.getTitle();
		
	}
	

	public void Primary_School(String university) 

	{
	
		
		waithelper.waitforelement(driver.findElement(Primary_School), 20);
		
		driver.findElement(Primary_School).sendKeys(university);
		
	}
	public boolean Primary_School() 

	{
		return driver.findElement(Primary_School).isDisplayed();
	}
	public  void Secondary_School(String university) throws InterruptedException

	{
		  List<WebElement> ld =  driver.findElements(Secondary_School);

		  ld.get(0).sendKeys(university);
	}
	
	public boolean Secondary_School() 

	{
		return driver.findElement(Secondary_School).isDisplayed();
	}

	public  void Intermediate(String university)

	{
	
		WebElement ls = driver.findElement(Intermediate);
		ls.sendKeys(university);
		
	}
	
	public boolean Intermediate() 

	{
		return driver.findElement(Intermediate).isDisplayed();
	}

		public  void Engineering(String university) throws InterruptedException
		{
			
			driver.findElement(Engineering).sendKeys(university);
			   
			    }
		public boolean Engineering() 

		{
			return driver.findElement(Engineering).isDisplayed();
		}
		
		
		public  void University(String university) throws InterruptedException

		{
			driver.findElement(University).sendKeys(university);

			
		}	
		
		public boolean University() 

		{
			return driver.findElement(University).isDisplayed();
		}
    			
		public  void Intermediate_Percentage(String university) throws InterruptedException

		{
			driver.findElement(Intermediate_Percentage).click();
			driver.findElement(Intermediate_Percentage).sendKeys(university);
			driver.findElement(Intermediate_Percentage).sendKeys(Keys.ENTER);

			
		}
		

		public  void Gender() throws InterruptedException

		{
			driver.findElement(Gender).click();


		}
	
}

