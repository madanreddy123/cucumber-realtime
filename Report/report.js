$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "education form",
  "description": "",
  "id": "education-form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "enter the education form",
  "description": "",
  "id": "education-form;enter-the-education-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest,"
    },
    {
      "line": 3,
      "name": "@regression,"
    },
    {
      "line": 3,
      "name": "@endtoend"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter the name a Primary_School \"\u003cprimary_School\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the name a Secondary_School \"\u003csecondary_School\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the name a Intermediate \"\u003cintermediate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the name a Engineering \"\u003cengineering\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the name a University \"\u003cuniversity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter the intermediate_Percentage \"\u003cintermediate_Percentage\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on gender",
  "keyword": "When "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "education-form;enter-the-education-form;",
  "rows": [
    {
      "cells": [
        "primary_School",
        "secondary_School",
        "intermediate",
        "engineering",
        "University",
        "intermediate_Percentage"
      ],
      "line": 15,
      "id": "education-form;enter-the-education-form;;1"
    },
    {
      "cells": [
        "model mission high school",
        "model mission high school",
        "sri chaitanya",
        "pulla reddy engineering college",
        "JNTU",
        "Intermediate Percentage"
      ],
      "line": 16,
      "id": "education-form;enter-the-education-form;;2"
    },
    {
      "cells": [
        "model mission high school",
        "model mission high school",
        "sri chaitanya",
        "pulla reddy engineering college",
        "JNTU",
        "Intermediate Percentage"
      ],
      "line": 17,
      "id": "education-form;enter-the-education-form;;3"
    },
    {
      "cells": [
        "model mission high school",
        "model mission high school",
        "sri chaitanya",
        "pulla reddy engineering college",
        "JNTU",
        "Intermediate Percentage"
      ],
      "line": 18,
      "id": "education-form;enter-the-education-form;;4"
    },
    {
      "cells": [
        "model mission high school",
        "model mission high school",
        "sri chaitanya",
        "pulla reddy engineering college",
        "JNTU",
        "Intermediate Percentage"
      ],
      "line": 19,
      "id": "education-form;enter-the-education-form;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5051860483,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "enter the education form",
  "description": "",
  "id": "education-form;enter-the-education-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression,"
    },
    {
      "line": 3,
      "name": "@SmokeTest,"
    },
    {
      "line": 3,
      "name": "@endtoend"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter the name a Primary_School \"model mission high school\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the name a Secondary_School \"model mission high school\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the name a Intermediate \"sri chaitanya\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the name a Engineering \"pulla reddy engineering college\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the name a University \"\u003cuniversity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter the intermediate_Percentage \"Intermediate Percentage\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on gender",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 35
    }
  ],
  "location": "Steps.i_enter_the_name_a_Primary_School(String)"
});
formatter.result({
  "duration": 371498201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_name_a_Secondary_School(String)"
});
formatter.result({
  "duration": 223340779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri chaitanya",
      "offset": 33
    }
  ],
  "location": "Steps.i_enter_the_name_a_Intermediate(String)"
});
formatter.result({
  "duration": 166002855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pulla reddy engineering college",
      "offset": 32
    }
  ],
  "location": "Steps.i_enter_the_name_a_Engineering(String)"
});
formatter.result({
  "duration": 188133971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuniversity\u003e",
      "offset": 31
    }
  ],
  "location": "Steps.i_enter_the_name_a_University(String)"
});
formatter.result({
  "duration": 130808109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Intermediate Percentage",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_intermediate_Percentage(String)"
});
formatter.result({
  "duration": 320753220,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_gender()"
});
formatter.result({
  "duration": 66469524,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 329866018,
  "status": "passed"
});
formatter.after({
  "duration": 149668128,
  "status": "passed"
});
formatter.before({
  "duration": 4125996176,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "enter the education form",
  "description": "",
  "id": "education-form;enter-the-education-form;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression,"
    },
    {
      "line": 3,
      "name": "@SmokeTest,"
    },
    {
      "line": 3,
      "name": "@endtoend"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter the name a Primary_School \"model mission high school\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the name a Secondary_School \"model mission high school\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the name a Intermediate \"sri chaitanya\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the name a Engineering \"pulla reddy engineering college\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the name a University \"\u003cuniversity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter the intermediate_Percentage \"Intermediate Percentage\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on gender",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 35
    }
  ],
  "location": "Steps.i_enter_the_name_a_Primary_School(String)"
});
formatter.result({
  "duration": 206784606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_name_a_Secondary_School(String)"
});
formatter.result({
  "duration": 170284979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri chaitanya",
      "offset": 33
    }
  ],
  "location": "Steps.i_enter_the_name_a_Intermediate(String)"
});
formatter.result({
  "duration": 111839887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pulla reddy engineering college",
      "offset": 32
    }
  ],
  "location": "Steps.i_enter_the_name_a_Engineering(String)"
});
formatter.result({
  "duration": 171698783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuniversity\u003e",
      "offset": 31
    }
  ],
  "location": "Steps.i_enter_the_name_a_University(String)"
});
formatter.result({
  "duration": 148824665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Intermediate Percentage",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_intermediate_Percentage(String)"
});
formatter.result({
  "duration": 331700049,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_gender()"
});
formatter.result({
  "duration": 119190441,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 342672888,
  "status": "passed"
});
formatter.after({
  "duration": 139227361,
  "status": "passed"
});
formatter.before({
  "duration": 3544538641,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "enter the education form",
  "description": "",
  "id": "education-form;enter-the-education-form;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression,"
    },
    {
      "line": 3,
      "name": "@SmokeTest,"
    },
    {
      "line": 3,
      "name": "@endtoend"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter the name a Primary_School \"model mission high school\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the name a Secondary_School \"model mission high school\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the name a Intermediate \"sri chaitanya\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the name a Engineering \"pulla reddy engineering college\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the name a University \"\u003cuniversity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter the intermediate_Percentage \"Intermediate Percentage\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on gender",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 35
    }
  ],
  "location": "Steps.i_enter_the_name_a_Primary_School(String)"
});
formatter.result({
  "duration": 203217512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_name_a_Secondary_School(String)"
});
formatter.result({
  "duration": 188227455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri chaitanya",
      "offset": 33
    }
  ],
  "location": "Steps.i_enter_the_name_a_Intermediate(String)"
});
formatter.result({
  "duration": 117199030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pulla reddy engineering college",
      "offset": 32
    }
  ],
  "location": "Steps.i_enter_the_name_a_Engineering(String)"
});
formatter.result({
  "duration": 190077349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuniversity\u003e",
      "offset": 31
    }
  ],
  "location": "Steps.i_enter_the_name_a_University(String)"
});
formatter.result({
  "duration": 158171038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Intermediate Percentage",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_intermediate_Percentage(String)"
});
formatter.result({
  "duration": 315434773,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_gender()"
});
formatter.result({
  "duration": 68802632,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 322935093,
  "status": "passed"
});
formatter.after({
  "duration": 171071198,
  "status": "passed"
});
formatter.before({
  "duration": 3575919341,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "enter the education form",
  "description": "",
  "id": "education-form;enter-the-education-form;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression,"
    },
    {
      "line": 3,
      "name": "@SmokeTest,"
    },
    {
      "line": 3,
      "name": "@endtoend"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter the name a Primary_School \"model mission high school\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the name a Secondary_School \"model mission high school\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the name a Intermediate \"sri chaitanya\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the name a Engineering \"pulla reddy engineering college\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the name a University \"\u003cuniversity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter the intermediate_Percentage \"Intermediate Percentage\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on gender",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 35
    }
  ],
  "location": "Steps.i_enter_the_name_a_Primary_School(String)"
});
formatter.result({
  "duration": 193738898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_name_a_Secondary_School(String)"
});
formatter.result({
  "duration": 143257039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri chaitanya",
      "offset": 33
    }
  ],
  "location": "Steps.i_enter_the_name_a_Intermediate(String)"
});
formatter.result({
  "duration": 166396960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pulla reddy engineering college",
      "offset": 32
    }
  ],
  "location": "Steps.i_enter_the_name_a_Engineering(String)"
});
formatter.result({
  "duration": 212243837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuniversity\u003e",
      "offset": 31
    }
  ],
  "location": "Steps.i_enter_the_name_a_University(String)"
});
formatter.result({
  "duration": 147794038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Intermediate Percentage",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_intermediate_Percentage(String)"
});
formatter.result({
  "duration": 345243924,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_gender()"
});
formatter.result({
  "duration": 74435291,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 277088372,
  "status": "passed"
});
formatter.after({
  "duration": 161957547,
  "status": "passed"
});
});