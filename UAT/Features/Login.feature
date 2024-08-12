Feature: Login

Scenario Outline: Validating the login page of HRM

Given User enters the url

When enter username as <username>

And enter password as <password>

Then Login should be successful

Examples:
          |username | password|
          |  Admin  | admin123|
          |  admin  | passs   |
          |  Admin  | prince  |
          |  admin  | 123456  |
          |  Admin  |Admin123 |
          |  Sammy  |admin2701|

