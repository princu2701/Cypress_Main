describe('Amazon Suite', () => {
    it('Expiring Tests', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get(".ui-autocomplete-input").type("ae")

        cy.get(".ui-menu-item-wrapper").contains("Israel").click()


        
    });
});