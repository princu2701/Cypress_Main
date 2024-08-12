describe('Practice Page', () => {
    it('Dropdown using values', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')

        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')

        cy.xpath("//select[@name='dropdown-class-example']").select("").should('have.value',"")
        
    });

    it('By Using Text', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')

        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')

        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')

        cy.xpath("//select[@name='dropdown-class-example']").select("Select").should('have.value',"")
        

        
        
    });



    it('Using Index', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#dropdown-class-example').select(2).should('have.value','option2')

        cy.get('#dropdown-class-example').select(3).should('have.value','option3')

        cy.get('#dropdown-class-example').select(1).should('have.value','option1')

        
        cy.xpath("//select[@name='dropdown-class-example']").select(0).should('have.value',"")





        
    });
});