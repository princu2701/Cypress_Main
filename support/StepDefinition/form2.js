import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps" 


Given("User enters the url",()=>{


    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When('enter username as {word}',(username)=>{

    cy.get("[placeholder='Username']").type("")
    
})

And('enter password as {word}',(password)=>{


    cy.get("[type='password']").type("")
})

Then("Login should be successful",()=>{

    cy.contains("Login").click()
})