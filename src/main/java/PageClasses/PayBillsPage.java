package PageClasses;

import Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import java.text.DecimalFormat;
import java.util.Random;

public class PayBillsPage extends _01_parentClass{

    public PayBillsPage(){

        PageFactory.initElements(Driver.getDriver(),this);

    }

    @FindBy(id = "np_new_payee_name")
    private WebElement payeeName;

    @FindBy(id = "np_new_payee_address")
    private WebElement payeeAddress;

    @FindBy(id = "np_new_payee_account")
    private WebElement payeeAccount;

    @FindBy(id = "np_new_payee_details")
    private WebElement payeeDetails;

    @FindBy(id = "add_new_payee")
    private WebElement add_new_payee;

    @FindBy(xpath="//div[contains(text(),'successfully')]")
    private WebElement successfullyMessageCreated;

    @FindBy(id="pc_currency")
    private WebElement CurrencyDropdown;

    @FindBy(id="pc_inDollars_true")
    private WebElement radioButton1;

    @FindBy(id="pc_inDollars_false")
    private WebElement radioButton2;

    @FindBy(id="purchase_cash")
    private WebElement purchase_cash;

    @FindBy(id="pc_calculate_costs")
    private WebElement pc_calculate_costs;

    @FindBy(id="pc_amount")
    private WebElement pc_amount;

    @FindBy(id="sp_sell_rate")
    private WebElement sellRate;

    @FindBy(id="pc_conversion_amount")
    private WebElement conversionAmount;


    WebElement myElement;

    public void findElementAndClickFunction(String ElementName) {

        switch (ElementName) {
            case "add_new_payee":
                myElement = add_new_payee;
                break;
            case "radioButton1":
                myElement = radioButton1;
                break;
            case "radioButton2":
                myElement = radioButton2;
                break;
            case "purchase_cash":
                myElement = purchase_cash;
                break;
            case "pc_calculate_costs":
                myElement = pc_calculate_costs;
                break;

        }

        clickFunction(myElement);
    }

    public void findElementAndSendKeysFunction(String ElementName , String value) {

        switch (ElementName) {
            case "payeeName":
                myElement = payeeName;
                break;
            case "payeeAddress":
                myElement = payeeAddress;
                break;
            case "payeeAccount":
                myElement = payeeAccount;
                break;
            case "payeeDetails":
                myElement = payeeDetails;
                break;
            case "pc_amount":
                myElement = pc_amount;
                break;

        }
        sendKeysFunction(myElement , value);
    }

    public void successMessage(String ElementName, String expectedValue) {

        switch (ElementName) {
            case "successfullyMessageCreated":
                myElement = successfullyMessageCreated;
                break;
        }

        try{
             waitUntilVisible(myElement);
            System.out.println("-------------------------------------");
             Assert.assertTrue(myElement.getText().contains(expectedValue), "Expected value is " + expectedValue + "  " + "Actual value is " + myElement.getText());

        }catch (Exception e){
            if(expectedValue.equalsIgnoreCase("successfully")){
                Assert.fail("if the expected result is successfully then we should not come to this line of code.");
            }
        }


    }

    public void dropdownHandle(String nameOfTheElement){

        switch (nameOfTheElement) {
            case "CurrencyDropdown":
                myElement = CurrencyDropdown;
                break;
        }

        waitUntilVisible(myElement);
        Select select = new Select(myElement);

        Random rnd = new Random();

        int rand= rnd.nextInt(select.getOptions().size());

        select.selectByIndex(rand);

        System.out.println(rand);

    }



}
