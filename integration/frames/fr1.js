///<reference types="@cypress/xpath">/

describe('', () => {
    it('', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//frame id below using frameloaded
        cy.frameLoaded("#courses-iframe")

        cy.iframe().contains("Blog").click()
        
    });
});