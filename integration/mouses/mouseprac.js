describe('Mouse', () => {
    it('Drag n Drops', () => {

        cy.visit("https://v1.training-support.net/selenium/drag-drop")

        cy.get("#draggable").trigger("mousedown",{which:1})

        cy.get("#droppable").trigger("mousemove").trigger("mouseup",{force:true})

        
        
    });

    it.only('Dropdown', () => {
                 
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#dropdown-class-example").select("option1").should("have.value",'option1')
        cy.get("#dropdown-class-example").select("option2").should("have.value",'option2')
        cy.get("#dropdown-class-example").select("option3").should("have.value",'option3')
        cy.xpath("//select[@name='dropdown-class-example']").select("").should('have.value',"")
       

    });
});