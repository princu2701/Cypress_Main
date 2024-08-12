describe('Practic Page', () => {
    it('Web Tables', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.xpath("(//table)[2]/tbody/tr[8]/td[2]").should("include.text","Sportsman")
        
    });



    it('', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.xpath("(//table)[2]/tbody/tr[8]/td").each(($user)=>{


            if($user.text().includes("Sportsman")){

                cy.wrap($user).next().then(($num)=>{


                    cy.log($num.text())
                })
            }
        })
        
    });
});












