describe('Heroku Suits', () => {
    it('Tests', () => {

        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
        cy,wait(2000)
        cy.xpath('//*[.="Start"]').click()
        
    });

    it('Heroku tables', () => {

        cy.visit("https://the-internet.herokuapp.com/")

        cy.xpath("(//*[@class='tablesorter'])[1]/tbody/tr[4]/td[3]").should("have.text","tconway@earthlink.net")
        cy.xpath("(//*[@class='tablesorter'])[2]/tbody/tr[2]/td[6]").should("have.attr","(//*[text()='edit'])[1]")
    });


    it('', () => {

        cy.visit("https://the-internet.herokuapp.com/")

        cy.xpath("(//*[.='Multiple Windows'])[2]").click()

        cy.xpath("//*[.='Click Here']").invoke("remove-Attr","target").click()
        
    });

    it('', () => {

        cy.visit("https://the-internet.herokuapp.com/")

        cy.xpath("(//*[.='Click for JS Alert'])[2]").click()

        cy.on("window:alert",($msg)=>{

            expect($msg).to.equal("I am a JS Alert")
    
            return true;
        
    });

    cy.xpath("(//*[.='Click for JS Confirm'])[2]").click()

    cy.on("window:confirm",($ms2)=>{

        expect($msg2).to.have("I am a JS Confirm")

        return true;

    })

    






})
})