describe('Orange', () => {
    it('Target Dynamic ', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("[placeholder='Username']").type("Admin")
        cy.get("[placeholder='Password']").type("admin123")
        cy.get('[type="submit"]').click()
        cy.get('[role="none"]').click()
        cy.contains('Admin').click()
        cy.get('input[placeholder="Type for hints..."]').type('r');
        cy.contains('Ranga Akunuri').click()
        cy.get('[type="submit"]').click();

        
        
    });
});