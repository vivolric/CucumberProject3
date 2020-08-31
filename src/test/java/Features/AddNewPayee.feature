Feature: Adding multiplePayee

  @Reg
  Scenario Outline: Adding Successfully

    And Click in the top menu
      | payBillsButton |
      | addNewPayee    |
    When User enter the payeeName as "<payeeName>" Payee address as "<payeeAddress>" account as "<account>" payee details as "<payeeDetails>"
    Then "<Message>" should be displayed
    Examples:
      | payeeName | payeeAddress | account | payeeDetails | Message      |
      |           | asd          | asd     | asd          | fail         |
      | aasd      |              | asd     | asd          | fail         |
      | aasd      | asd          |         | asd          | fail         |
      | aasd      | asd          | asd     | asd          | successfully |



