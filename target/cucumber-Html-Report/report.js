$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddNewPayee.feature");
formatter.feature({
  "line": 1,
  "name": "Adding multiplePayee",
  "description": "",
  "id": "adding-multiplepayee",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Adding Successfully",
  "description": "",
  "id": "adding-multiplepayee;adding-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Click in the top menu",
  "rows": [
    {
      "cells": [
        "payBillsButton"
      ],
      "line": 7
    },
    {
      "cells": [
        "addNewPayee"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter the payeeName as \"\u003cpayeeName\u003e\" Payee address as \"\u003cpayeeAddress\u003e\" account as \"\u003caccount\u003e\" payee details as \"\u003cpayeeDetails\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "\"\u003cMessage\u003e\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "adding-multiplepayee;adding-successfully;",
  "rows": [
    {
      "cells": [
        "payeeName",
        "payeeAddress",
        "account",
        "payeeDetails",
        "Message"
      ],
      "line": 12,
      "id": "adding-multiplepayee;adding-successfully;;1"
    },
    {
      "cells": [
        "",
        "asd",
        "asd",
        "asd",
        "fail"
      ],
      "line": 13,
      "id": "adding-multiplepayee;adding-successfully;;2"
    },
    {
      "cells": [
        "aasd",
        "",
        "asd",
        "asd",
        "fail"
      ],
      "line": 14,
      "id": "adding-multiplepayee;adding-successfully;;3"
    },
    {
      "cells": [
        "aasd",
        "asd",
        "",
        "asd",
        "fail"
      ],
      "line": 15,
      "id": "adding-multiplepayee;adding-successfully;;4"
    },
    {
      "cells": [
        "aasd",
        "asd",
        "asd",
        "asd",
        "successfully"
      ],
      "line": 16,
      "id": "adding-multiplepayee;adding-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6926506851,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Adding Successfully",
  "description": "",
  "id": "adding-multiplepayee;adding-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Click in the top menu",
  "rows": [
    {
      "cells": [
        "payBillsButton"
      ],
      "line": 7
    },
    {
      "cells": [
        "addNewPayee"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter the payeeName as \"\" Payee address as \"asd\" account as \"asd\" payee details as \"asd\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "\"fail\" should be displayed",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PayeeSteps.click_in_the_top_menu(DataTable)"
});
formatter.result({
  "duration": 1983594216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    },
    {
      "val": "asd",
      "offset": 49
    },
    {
      "val": "asd",
      "offset": 66
    },
    {
      "val": "asd",
      "offset": 89
    }
  ],
  "location": "PayeeSteps.user_enter_the_payeeName_as_Payee_address_as_account_as_payee_details_as(String,String,String,String)"
});
formatter.result({
  "duration": 1033424735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fail",
      "offset": 1
    }
  ],
  "location": "PayeeSteps.shouldBeDisplayed(String)"
});
formatter.result({
  "duration": 5212129288,
  "status": "passed"
});
formatter.after({
  "duration": 91349331,
  "status": "passed"
});
formatter.before({
  "duration": 3707227578,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Adding Successfully",
  "description": "",
  "id": "adding-multiplepayee;adding-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Click in the top menu",
  "rows": [
    {
      "cells": [
        "payBillsButton"
      ],
      "line": 7
    },
    {
      "cells": [
        "addNewPayee"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter the payeeName as \"aasd\" Payee address as \"\" account as \"asd\" payee details as \"asd\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "\"fail\" should be displayed",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PayeeSteps.click_in_the_top_menu(DataTable)"
});
formatter.result({
  "duration": 1005137272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aasd",
      "offset": 29
    },
    {
      "val": "",
      "offset": 53
    },
    {
      "val": "asd",
      "offset": 67
    },
    {
      "val": "asd",
      "offset": 90
    }
  ],
  "location": "PayeeSteps.user_enter_the_payeeName_as_Payee_address_as_account_as_payee_details_as(String,String,String,String)"
});
formatter.result({
  "duration": 1028195073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fail",
      "offset": 1
    }
  ],
  "location": "PayeeSteps.shouldBeDisplayed(String)"
});
formatter.result({
  "duration": 5196246209,
  "status": "passed"
});
formatter.after({
  "duration": 87239267,
  "status": "passed"
});
formatter.before({
  "duration": 4693331288,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Adding Successfully",
  "description": "",
  "id": "adding-multiplepayee;adding-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Click in the top menu",
  "rows": [
    {
      "cells": [
        "payBillsButton"
      ],
      "line": 7
    },
    {
      "cells": [
        "addNewPayee"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter the payeeName as \"aasd\" Payee address as \"asd\" account as \"\" payee details as \"asd\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "\"fail\" should be displayed",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PayeeSteps.click_in_the_top_menu(DataTable)"
});
formatter.result({
  "duration": 1249957392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aasd",
      "offset": 29
    },
    {
      "val": "asd",
      "offset": 53
    },
    {
      "val": "",
      "offset": 70
    },
    {
      "val": "asd",
      "offset": 90
    }
  ],
  "location": "PayeeSteps.user_enter_the_payeeName_as_Payee_address_as_account_as_payee_details_as(String,String,String,String)"
});
formatter.result({
  "duration": 1009520157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fail",
      "offset": 1
    }
  ],
  "location": "PayeeSteps.shouldBeDisplayed(String)"
});
formatter.result({
  "duration": 5185419374,
  "status": "passed"
});
formatter.after({
  "duration": 89405525,
  "status": "passed"
});
formatter.before({
  "duration": 4133212380,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Adding Successfully",
  "description": "",
  "id": "adding-multiplepayee;adding-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Click in the top menu",
  "rows": [
    {
      "cells": [
        "payBillsButton"
      ],
      "line": 7
    },
    {
      "cells": [
        "addNewPayee"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter the payeeName as \"aasd\" Payee address as \"asd\" account as \"asd\" payee details as \"asd\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "\"successfully\" should be displayed",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PayeeSteps.click_in_the_top_menu(DataTable)"
});
formatter.result({
  "duration": 1435925419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aasd",
      "offset": 29
    },
    {
      "val": "asd",
      "offset": 53
    },
    {
      "val": "asd",
      "offset": 70
    },
    {
      "val": "asd",
      "offset": 93
    }
  ],
  "location": "PayeeSteps.user_enter_the_payeeName_as_Payee_address_as_account_as_payee_details_as(String,String,String,String)"
});
formatter.result({
  "duration": 1340381117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 1
    }
  ],
  "location": "PayeeSteps.shouldBeDisplayed(String)"
});
formatter.result({
  "duration": 52710672,
  "status": "passed"
});
formatter.after({
  "duration": 77449082,
  "status": "passed"
});
formatter.uri("pruchaseForeignCurrency.feature");
formatter.feature({
  "line": 2,
  "name": "Purchase Foreign Currency",
  "description": "",
  "id": "purchase-foreign-currency",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Any purchase foreign currency",
  "description": "",
  "id": "purchase-foreign-currency;any-purchase-foreign-currency",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Click in the top menu",
  "rows": [
    {
      "cells": [
        "payBillsButton"
      ],
      "line": 7
    },
    {
      "cells": [
        "purchaseForeignCurrency"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Handle the dropdown",
  "rows": [
    {
      "cells": [
        "CurrencyDropdown"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter the amount as \"\u003cAmount\u003e\" choose radio button \"\u003cinputNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "\"\u003cMessage\u003e\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "purchase-foreign-currency;any-purchase-foreign-currency;",
  "rows": [
    {
      "cells": [
        "Amount",
        "inputNumber",
        "Message"
      ],
      "line": 14,
      "id": "purchase-foreign-currency;any-purchase-foreign-currency;;1"
    },
    {
      "cells": [
        "1000",
        "1",
        "successfully"
      ],
      "line": 15,
      "id": "purchase-foreign-currency;any-purchase-foreign-currency;;2"
    },
    {
      "cells": [
        "2000",
        "2",
        "successfully"
      ],
      "line": 16,
      "id": "purchase-foreign-currency;any-purchase-foreign-currency;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3859690852,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Any purchase foreign currency",
  "description": "",
  "id": "purchase-foreign-currency;any-purchase-foreign-currency;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Click in the top menu",
  "rows": [
    {
      "cells": [
        "payBillsButton"
      ],
      "line": 7
    },
    {
      "cells": [
        "purchaseForeignCurrency"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Handle the dropdown",
  "rows": [
    {
      "cells": [
        "CurrencyDropdown"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter the amount as \"1000\" choose radio button \"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "\"successfully\" should be displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PayeeSteps.click_in_the_top_menu(DataTable)"
});
formatter.result({
  "duration": 2244304485,
  "status": "passed"
});
formatter.match({
  "location": "PayeeSteps.handleTheDropdown(DataTable)"
});
formatter.result({
  "duration": 699064781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 48
    }
  ],
  "location": "PayeeSteps.enterTheAmountAsChooseRadioButton(String,String)"
});
formatter.result({
  "duration": 1189362931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 1
    }
  ],
  "location": "PayeeSteps.shouldBeDisplayed(String)"
});
formatter.result({
  "duration": 52982606,
  "status": "passed"
});
formatter.after({
  "duration": 87743429,
  "status": "passed"
});
formatter.before({
  "duration": 6078249208,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Any purchase foreign currency",
  "description": "",
  "id": "purchase-foreign-currency;any-purchase-foreign-currency;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Click in the top menu",
  "rows": [
    {
      "cells": [
        "payBillsButton"
      ],
      "line": 7
    },
    {
      "cells": [
        "purchaseForeignCurrency"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Handle the dropdown",
  "rows": [
    {
      "cells": [
        "CurrencyDropdown"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter the amount as \"2000\" choose radio button \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "\"successfully\" should be displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PayeeSteps.click_in_the_top_menu(DataTable)"
});
formatter.result({
  "duration": 6021579862,
  "status": "passed"
});
formatter.match({
  "location": "PayeeSteps.handleTheDropdown(DataTable)"
});
formatter.result({
  "duration": 717450702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 21
    },
    {
      "val": "2",
      "offset": 48
    }
  ],
  "location": "PayeeSteps.enterTheAmountAsChooseRadioButton(String,String)"
});
formatter.result({
  "duration": 527575836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 1
    }
  ],
  "location": "PayeeSteps.shouldBeDisplayed(String)"
});
formatter.result({
  "duration": 48818111,
  "status": "passed"
});
formatter.after({
  "duration": 87570471,
  "status": "passed"
});
});