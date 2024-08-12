describe('Amazon', () => {
    it('Text Test ', () => {

        cy.visit('https://www.amazon.com/');

        cy.xpath("//a[.='Registry']").click();
        cy.xpath("//a[.='Sell']")
        cy.xpath("//span[.='& Orders']")
        cy.xpath("//option[.='All Departments']")
        cy.xpath("//option[.='Arts & Crafts']")

        
    });
    
});

