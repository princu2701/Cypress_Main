describe('Open MRS', () => {
    it('', () => {

        cy.visit("https://demo.openmrs.org/openmrs/login.htm")

        cy.get("[type='text']").type("admin")

        cy.get("[type='password']").type("Admin123")

        cy.xpath("//*[@id='Inpatient Ward']").click()

        cy.xpath("//*[@class='btn confirm']").click()
        
    });
});