describe('Automation Tester', () => {
    it('Test 2', () => {

        cy.visit('https://automationteststore.com/');


        cy.url().should('include','automationteststore')

        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()

        cy.xpath('//label[@for="ContactUsFrm_first_name"]')

        cy.get('input[name="first_name"]').type('Prince').should('have.value','Prince')

        cy.get('label[for="ContactUsFrm_email"]').should('include','Email id')

        cy.xpath('(//input[@name="email"])[1]').type('princeraj27janu@gmail.com').should('have.value','princeraj27janu@gmail.com')

        cy.get('[for=ContactUsFrm_enquiry]').should('include','Enquiry')

        cy.get('textarea[name="enquiry"]').type('I am not happy').should('include','I am not happy')

        cy.get('button[title="Submit"]').click()

        cy.xpath('//p[contains(text(),"Your enquiry has been successfully sent to the store owner!")]').should('include',"Your enquiry has been successfully sent to the store owner!")

        
    });
});