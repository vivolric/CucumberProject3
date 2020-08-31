package StepDefinition;

import PageClasses.PayBillsPage;
import PageClasses.TopMenu;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.util.List;

public class PayeeSteps {

    TopMenu topMenu = new TopMenu();
    PayBillsPage payBillsPage = new PayBillsPage();


    @When("^User enter the payeeName as \"([^\"]*)\" Payee address as \"([^\"]*)\" account as \"([^\"]*)\" payee details as \"([^\"]*)\"$")
    public void user_enter_the_payeeName_as_Payee_address_as_account_as_payee_details_as(String payeeName, String payeeAddress, String account, String payeeDetails){

        payBillsPage.findElementAndSendKeysFunction("payeeName" , payeeName);
        payBillsPage.findElementAndSendKeysFunction("payeeAddress" , payeeAddress);
        payBillsPage.findElementAndSendKeysFunction("payeeAccount" , account);
        payBillsPage.findElementAndSendKeysFunction("payeeDetails" , payeeDetails);
        payBillsPage.findElementAndClickFunction("add_new_payee");


    }

    @Then("^\"([^\"]*)\" should be displayed$")
    public void shouldBeDisplayed(String message){


        payBillsPage.successMessage("successfullyMessageCreated" , message);



    }

    @Given("^Click in the top menu$")
    public void click_in_the_top_menu(DataTable elementsClick){

        List<String> eachElement =  elementsClick.asList(String.class);

        for(int i =0 ; i<eachElement.size() ; i++){

            topMenu.findElementAndClickFunction(eachElement.get(i));

        }


    }

    @When("^Handle the dropdown$")
    public void handleTheDropdown(DataTable elementsClick) {

        List<String> eachElement =  elementsClick.asList(String.class);

        for(int i =0 ; i<eachElement.size() ; i++){

            payBillsPage.dropdownHandle(eachElement.get(i));

        }
    }



    @When("^Enter the amount as \"([^\"]*)\" choose radio button \"([^\"]*)\"$")
    public void enterTheAmountAsChooseRadioButton(String amount, String radioButton){
        payBillsPage.findElementAndSendKeysFunction("pc_amount", amount);

        if(radioButton.equals("1")){

            payBillsPage.findElementAndClickFunction("radioButton1");

        }else {
            payBillsPage.findElementAndClickFunction("radioButton2");

        }
        payBillsPage.findElementAndClickFunction("pc_calculate_costs");

        payBillsPage.findElementAndClickFunction("purchase_cash");

    }
}
