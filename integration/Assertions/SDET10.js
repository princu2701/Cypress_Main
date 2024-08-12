describe('', () => {
    it.skip('Radio and Options', () => {

        cy.visit("https://www.letskodeit.com/practice")

        cy.get("#bmwradio").check().should("be.checked")

        cy.get("#bmwcheck").check().should("be.checked")

        


        
    });

    it.skip('Tabs', () => {

        cy.visit("https://www.letskodeit.com/practice")

        cy.get("#opentab").invoke("removeAttr","onclick").click();

        cy.origin("https://www.letskodeit.com/courses",()=>{


            cy.contains("HOME").click()
        })


        
    });

    it.skip('Window', () => {

        cy.visit("https://www.letskodeit.com/practice")

        cy.get("#openwindow").invoke("removeAttr","onclick").click();

        cy.origin("https://www.letskodeit.com/courses",()=>{


            cy.contains("HOME").click()
        })
        
    });
    it.skip('DropDown', () => {
        //Problem
        cy.visit("https://www.letskodeit.com/practice")

        cy.get("#carselect").select(0).should("have.value","bmw")

        cy.get("#multiple-select-example").select("Apple").should("have.value","apple")
    });

    it.skip('AutoSuggest', () => {

        cy.visit("https://www.letskodeit.com/practice")

        cy.xpath('(//*[@type="text"])[1]').type("Prince")



        
    });
    it.skip('Show hide', () => {

        cy.visit("https://www.letskodeit.com/practice")

        cy.get("#displayed-text").should("be.visible")

        cy.get("#hide-textbox").click()

        cy.get("#displayed-text").should("not.be.visible")

        cy.get("#show-textbox").click()

        cy.get("#displayed-text").should("be.visible")

    })


    it.skip('Alert', () => {

        cy.visit("https://www.letskodeit.com/practice")

        cy.get("#alertbtn").click()

        cy.on("window:alert",($user)=>{


            expect($user).to.equal("Hello , share this practice page and share your knowledge")

            return true;


        })

    }); 

        it.skip('Confirm', () => {

            cy.visit("https://www.letskodeit.com/practice")

            cy.get("#confirmbtn")

            cy.on("window:confirm",($user2)=>{

                expect($user2).to.equal("Hello , share this practice page and share your knowledge")

                return true;
            })
            
        });

        it.skip('Mousehover', () => {

            cy.visit("https://www.letskodeit.com/practice")

            cy.get("#mousehover").trigger("mouseover")

            cy.contains("Top").click({force:true})
            
        });
        it.skip('Web Tables', () => {

            cy.visit("https://www.letskodeit.com/practice")

            cy.xpath("//*[@class='table-display']/tbody/tr[3]/td[2]").should("have.text","Python Programming Language")
            
        });

        it.only('Iframe', () => {

            cy.visit("https://www.letskodeit.com/practice")

            cy.frameLoaded("#courses-iframe")

            cy.iframe().contains("HOME").click();
            
        });
   
       




        
 




});