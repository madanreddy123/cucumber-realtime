package TestBase;



import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Waithelper 
{
	
	public WebDriver driver;
	
	
	
	public Waithelper(WebDriver driver) {
		this.driver = driver;
	}



	public  void waitforelement(WebElement element, long timeout)
	{
		WebDriverWait wait = new WebDriverWait(driver, timeout);
		
		wait.until(ExpectedConditions.visibilityOf(element));
	}



	







	


	



	
}
