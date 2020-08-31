package PageClasses;

import Utilities.Driver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.text.DecimalFormat;

public class _01_parentClass {

    WebDriver driver;
    WebDriverWait wait;

    public _01_parentClass(){

        driver = Driver.getDriver();
        wait = new WebDriverWait(driver,5);

    }

    //    Click on element method
    public void clickFunction(WebElement element){

        waitUntilClickable(element);

        element.click();

    }

    //    Send keys function
    public void sendKeysFunction(WebElement element , String value){

        waitUntilVisible(element);

        element.clear();
        element.sendKeys(value);

    }

    //    Waiting until element become visible
    public void waitUntilVisible(WebElement elementToWait){

        wait.until(ExpectedConditions.visibilityOf(elementToWait));

    }


    //    WaitForClickable
    public void waitUntilClickable(WebElement elmentToWait){

//        wait until clickable is working as if the element is not visible
        wait.until(ExpectedConditions.elementToBeClickable(elmentToWait));
    }

    //  Verify element is contains specific text
    public void ElementContainsText(WebElement element , String myText){

        waitUntilVisible(element);
        Assert.assertTrue(element.getText().contains(myText));
    }

    public void waiting(int howLong){
        try {
            Thread.sleep(howLong);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void scrollToElement(WebElement elementToScroll){

        JavascriptExecutor js = (JavascriptExecutor) driver;

        js.executeScript("arguments[0].scrollIntoView();", elementToScroll);
    }

    public double getStringAndReturnDouble(String num){

        int equalPos = num.indexOf("=");

        num = num.substring(equalPos+1);

        num = num.replaceAll("[^\\d.]","");

        num = num.substring(0,num.length()-2);

        double numDo = Double.parseDouble(num);

        DecimalFormat df2 = new DecimalFormat( "#.00" );
        String s1 = df2.format(numDo);

        double numDo2 = Double.parseDouble(s1);
        System.out.println(numDo2+ " <----------  numdo2");

        return numDo2;
    }


}
