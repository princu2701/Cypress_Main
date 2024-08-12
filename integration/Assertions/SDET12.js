describe('Google Title', () => {
    it('', () => {

        cy.visit("https://www.google.com/")

        cy.title().should("include","Google")
        
    });
});