describe('', () => {
    it('', () => {

        cy.visit("https://v1.training-support.net/selenium/drag-drop")
////which 1 for left
////which 2 for centre 
////which 3 for right




        cy.get("#draggable").trigger("mousedown",{which:1})

        cy.get('#droppable').trigger("mousemove").trigger("mouseup",{force:true})

     

     
        
    });


    it('', () => {

        cy.visit("https://v1.training-support.net/selenium/drag-drop")

        cy.get("#draggable").trigger("mousedown",{which:1})

        cy.get('#dropzone2').trigger("mousemove").trigger("mouseup",{force:true})



        
    });
});