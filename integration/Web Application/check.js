describe('', () => {
    it('chaining and checking', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.xpath("(//input[@class='radioButton'])[1]").check().should('be.visible').and('have.attr','type','radio')

        cy.xpath("(//input[@class='radioButton'])[2]").check().should('be.visible').and('have.attr','type','radio')

        cy.xpath("(//input[@class='radioButton'])[3]").check().should('be.visible').and('have.attr','type','radio')
        
    });

    it('Checking and unchecking', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.xpath("(//input[@class='radioButton'])[1]").check().should('be.visible').and('have.attr','type','radio').and('have.attr','class','radioButton')

        cy.wait(2000)

        cy.xpath("//label/input[@type='checkbox']").uncheck().should('not.be.checked')

        

        
    });
});