describe('Frames', () => {
    it('', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded('#mce_0_ifr')

        cy.iframe().get('.tox-notifications-container');
        
    });


});

it('Double Click', () => {

    cy.visit("https://api.jquery.com/dblclick/")

    cy.get('[class="demo code-demo"]').dblclick();


    
});

it.skip('Right Click', () => {

    cy.visit("https://the-internet.herokuapp.com/context_menu")

    cy.get("#hot-spot").rightclick({force:true})

    cy.on('window:alert',($each)=>{


        expect($each).to.equal("You selected a context menu")

        return true;
    })


    
});


it.only('Mousehover', () => {

    cy.visit("https://the-internet.herokuapp.com/hovers")

    cy.xpath("(//*[@alt='User Avatar'])[1]").trigger("mouseover",{force:true})
    
});

it('DragDrop', () => {

    cy.visit("https://the-internet.herokuapp.com/drag_and_drop")

    cy.get("#column-a").trigger("mousedown",{which:1})

    cy.get("#column-b").trigger("mousemove").trigger("mouseup")
    
});








