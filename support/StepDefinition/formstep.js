import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps" 

Given('user opens the simple form url',()=>{

    cy.visit("https://v1.training-support.net/selenium/simple-form")


})

When('user enters firstname,lastname,email,message',()=>{

    cy.get("#firstName").type("prince")
    cy.get("#lastName").type("raj")
    cy.get("#email").type("princeraj27janu@gmail.com")
    cy.get("#number").type("7070572629")
    cy.get("textarea[rows='2']").type("My area")




})

And('clicks on submit',()=>{

    cy.get("[onclick='simpleFormSubmit()']").click()


})

Then('An alert saying successful message has to be displayed',()=>{


cy.on("window:alert",($msj)=>{


    expect($msj).to.equal("Thank You for reaching out to us, Prince Raj")
})


})