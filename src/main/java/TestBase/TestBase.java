package TestBase;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import TestUtil.TestUtil;


public class TestBase {
	
	public static WebDriver driver;
	public static Properties prop;

	
	public TestBase(){
		try {
			prop = new Properties();
			FileInputStream ip = new FileInputStream(System.getProperty("user.dir")+ "/src/main/java/com/properties/com.properties");
			prop.load(ip);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	public static void initialization(){
		
		
       String browserName = prop.getProperty("browser");
		
		if(browserName.equals("chrome")){
			
			System.setProperty("webdriver.chrome.driver", "/Users/madanmohanreddy/Desktop/gitrepository/cucumberrealtime/drivers/chromedriver");

			driver = new ChromeDriver(); 
		}
		else if(browserName.equals("FF")){
			
			System.setProperty("webdriver.firefox.driver", "/Users/madanmohanreddy/Desktop/gitrepository/cucumberrealtime/drivers/geckodriver");

			driver = new FirefoxDriver(); 
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtil.pageload_wait, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.implictywait_wait, TimeUnit.SECONDS);
		driver.get(prop.getProperty("url"));
        driver.getTitle();
    
	}
	
	
}