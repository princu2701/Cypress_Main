
describe('OrangeHrm Suite', () => {
    it('Login Test1', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

       
       
       
        cy.get('input[name="username"]').type("Admin");

        cy.get('input[type="password"]').type("admin123");
        cy.get('button[type="submit"]').click();


    });
     
    it('Facebook Login', () => {

        cy.visit("https://www.facebook.com/");

        cy.get("#email").type("8579886073");

        cy.get("#pass").type("princeraj2701");


        cy.get("#loginbutton").click();
        
    });

    it('For Heroku', () => {


        cy.visit('https://the-internet.herokuapp.com/login');


        cy.xpath('//input[@name="username"]').type("abc35");

        cy.xpath('//input[@type="password"]').type("12345");

        cy.xpath('//button[@class="radius"]').click();
        
    });

    it('Ebay Suites', () => {

        cy.visit('https://www.ebay.com/');


        cy.xpath('//a[text()="Help&Contact"]').type();

        cy.xpath('//a[text()="DailyDeals"]').type();

        cy.xpath('//a[text()="DailyDeals"]').type();

        cy,xpath('//a[text()="Signin"]').type();
        
    });

});