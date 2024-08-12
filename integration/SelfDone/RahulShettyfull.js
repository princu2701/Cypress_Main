//const { should } = require("chai");

describe('Trying After One Month', () => {
    it('Test1', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get("[id=autocomplete]").type("Prince is Doing Comeback in cypress");

        cy.get("[value='Alert']").click();

        cy.on("window:alert",($user)=>{

            expect($user).to.eq("Hello , share this practice page and share your knowledge");

        })

        cy.get("[value='Confirm']").click();

        cy.on("window:confirm",($user2)=>{

            expect($user2).to.eq("Hello , Are you sure you want to confirm?")
        })

        cy.get("[id='dropdown-class-example']").select("option2").should("have.value","option2");
        

        cy.get("[id='opentab']").invoke("removeAttr","target").click();

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get("[id='autocomplete']").type("Po");

        cy.contains("Poland").click();

        cy.xpath("(//table)[1]/tbody/tr[10]/td[3]").should("have.text","20");

    });
});