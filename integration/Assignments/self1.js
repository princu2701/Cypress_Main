require("@4tw/cypress-drag-drop")
describe('', () => {
    it('', () => {

        cy.visit("https://the-internet.herokuapp.com")
        cy.xpath("(//*[.='Hovers'])[2]").click()
        cy.xpath('(//*[@alt="User Avatar"])[1]').trigger("mousedown",{force:true})


        
    });

    it('mouse', () => {
        

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
         //1 method
        cy.get("#mousehover").invoke("show")                     //.trigger("mousehover").click()
        cy.contains("Top").click({force:true})


    });

    it('', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#mousehover').trigger("mousehover").click()
    });

   it('', () => {

    cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")

    cy.xpath("//*[.='Draggable 3']").drag('#mydropzone',{force:true})
    
   });
});