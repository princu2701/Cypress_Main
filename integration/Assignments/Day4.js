describe('', () => {
    it('', () => {

        cy.visit("https://books.toscrape.com/")

        cy.title().should("include"," We love being scraped!")

        cy.xpath('//*[.="Free Access to InterviewQues/ResumeAssistance/Material"]').click()

        cy.xpath('(//*[.="Add to basket"])[1]').click()

        cy.xpath('[href="catalogue/category/books/historical-fiction_4/index.html"]').click()


        
    });
});