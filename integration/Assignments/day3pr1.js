describe('Herku Tests', () => {
    it('Assertions', () => {


        cy.visit("https://the-internet.herokuapp.com/")

        cy.title().should('include','Welcome to the-internet')

        
        

        cy.get('//span[contains( text(),"US Dollar")]').click();
        
    });

    it('', () => {

        cy.visit("https://the-internetherokuapp.com/dynamicloading/1")

        cy.get('cy.get("#finish")').should("not-be-visible")


    it('', () => {

        cy.visit("http://automationpractice.com/index.php")

        cy.get("#category_68")

        cy.find("[class='active menu_home']")

        cy.get('//a[text()="Login or register"]').then(($log)=>{


            expect($log).to.have.text("Login or register")
        })



        
    });    

        
    });

    it('', () => {

        cy.visit("https://www.google.com/")

        cy.get('[title="Search"]').type("Masai{enter}").should("have.value","Masai")
        
    });
});