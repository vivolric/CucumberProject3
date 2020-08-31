package PageClasses;

import Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends _01_parentClass {


    public LoginPage(){

        PageFactory.initElements(Driver.getDriver(),this);

    }

    @FindBy(id = "user_login")
    private WebElement username;

    @FindBy(id = "user_password")
    private WebElement password;

    @FindBy(xpath = "//input[@value='Sign in']")
    private WebElement signin;

    WebElement myElement;

    public void findElementAndClickFunction(String ElementName) {

        switch (ElementName) {
            case "signin":
                myElement = signin;
                break;

        }

        clickFunction(myElement);
    }

    public void findElementAndSendKeysFunction(String ElementName , String value) {

        switch (ElementName) {
            case "username":
                myElement = username;
                break;
            case "password":
                myElement = password;
                break;
        }
        sendKeysFunction(myElement , value);
    }

}
