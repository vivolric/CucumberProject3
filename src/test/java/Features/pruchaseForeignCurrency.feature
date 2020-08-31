
Feature: Purchase Foreign Currency

  @Reg
Scenario Outline: Any purchase foreign currency
  And Click in the top menu
  | payBillsButton          |
  | purchaseForeignCurrency |
  And Handle the dropdown
  | CurrencyDropdown |
  When Enter the amount as "<Amount>" choose radio button "<inputNumber>"
  Then "<Message>" should be displayed
  Examples:
  | Amount | inputNumber | Message      |
  | 1000   | 1           | successfully |
  | 2000   | 2           | successfully |