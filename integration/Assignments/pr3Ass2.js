describe('Ebay', () => {
    it('Tests of Text', () => {


        cy.visit('https://www.ebay.com/');

        cy.xpath("//a[.=' Help & Contact']")
        cy.xpath("//a[.=' Daily Deals']")
        cy.xpath("//a[.='register']")
        cy.xpath("//a[.=' Sell']")
        cy.xpath("//a[.=' Watchlist']")
        
    });
});