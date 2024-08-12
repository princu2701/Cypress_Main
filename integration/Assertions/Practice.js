///<reference types="cypress"/>
describe('Assrtions', () => {
    it('Test Url Assertion', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
//Asserting Url with the end enpoint in url automationpractic should be practice
        cy.url().should('include','AutomationPractice')

        cy.title().should('include','Practice Page')
//For the visibility using name 
        cy.get('[name="show-hide"]').should("be.visible")

//For not invisible using id
        cy.get('#hide-textbox').click()
//After clicking on above it must not be visible
        cy.get('[name="show-hide"]').should("not.be.visible")

        //For adding the word wednesday in the empty bo

        cy.get('.ui-autocomplete-input').type('Wednesday').should('have.value','Wednesday')

        //For unchecking the box tick
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    });
});