Feature: education form

@SmokeTest, @regression, @endtoend
  Scenario Outline: enter the education form
      Given I enter the name a Primary_School "<primary_School>"
      And I enter the name a Secondary_School "<secondary_School>"
      And I enter the name a Intermediate "<intermediate>"
     When I enter the name a Engineering "<engineering>"
     When I enter the name a University "<university>"
     When I enter the intermediate_Percentage "<intermediate_Percentage>"
     When  I click on gender 
 

    Examples: 
      | primary_School           | secondary_School        | intermediate| engineering                   |University|intermediate_Percentage |
      | model mission high school|model mission high school|sri chaitanya|pulla reddy engineering college|JNTU      |Intermediate Percentage |
      | model mission high school|model mission high school|sri chaitanya|pulla reddy engineering college|JNTU      |Intermediate Percentage |
      | model mission high school|model mission high school|sri chaitanya|pulla reddy engineering college|JNTU      |Intermediate Percentage |
      | model mission high school|model mission high school|sri chaitanya|pulla reddy engineering college|JNTU      |Intermediate Percentage |