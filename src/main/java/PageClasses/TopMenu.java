package PageClasses;

import Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TopMenu  extends  _01_parentClass{

    public TopMenu(){

        PageFactory.initElements(Driver.getDriver(),this);

    }

    @FindBy(linkText = "Pay Bills")
    private WebElement payBillsButton;

    @FindBy(linkText = "Add New Payee")
    private WebElement addNewPayee;

    @FindBy(linkText = "Purchase Foreign Currency")
    private WebElement purchaseForeignCurrency;

    WebElement myElement;

    public void findElementAndClickFunction(String ElementName) {

        switch (ElementName) {
            case "payBillsButton":
                myElement = payBillsButton;
                break;
            case "addNewPayee":
                myElement = addNewPayee;
                break;
            case "purchaseForeignCurrency":
                myElement = purchaseForeignCurrency;
                break;
        }

        clickFunction(myElement);
    }

}
