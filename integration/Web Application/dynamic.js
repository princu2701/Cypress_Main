describe('Dynamic Testing', () => {
    it('App-1', () => {


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get(' .ui-autocomplete-input').type('in')

        cy.get('.ui-menu-item-wrapper').each(($pr1)=>{


            if($pr1.text()=='Finland'){

                cy.wrap($pr1).click()
            }
        })
        
    });


    it('App-2', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get(' .ui-autocomplete-input').type('Po')
        cy.get('.ui-menu-item-wrapper').contains('Poland').click();


        
    });
});