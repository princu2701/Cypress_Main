


describe('Right Clicks', () => {
    it('Right and double', () => {

        cy.visit("https://demo.guru99.com/test/simple_context_menu.html")

        cy.xpath("//*[.='right click me']").rightclick()

        cy.get("[class='context-menu-list context-menu-root']").contains("Quit").click()

        cy.xpath("//*[.='Double-Click Me To See Alert']").dblclick();
        
    });

    it('Mouse hover', () => {

           cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

           cy.get('#mousehover').invoke("show")

           cy.contains("Top").click({force:true})

           cy.url().should("include",'top');


        
    });
       

    it('App-2', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#mousehover').trigger("mouseover")

        cy.contains("Top").click({force:true})

        cy.url().should("include",'top');



        
    });


});