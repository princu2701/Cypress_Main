describe('Dates', () => {
    it('', () => {


        cy.visit("https://jqueryui.com/datepicker/")
        
        cy.frameLoaded(".demo-frame")

        cy.iframe().xpath("//*[@type='text']").type('27/01/2003{enter}');
    });
});