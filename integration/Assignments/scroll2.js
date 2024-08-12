// describe('', () => {
//     it('', () => {

//         cy.visit("https://www.google.com")

//         cy.xpath('//*[@title="Search"]').type("Bhairav All in one{enter}")

//         cy.scrollTo(0,2000)

//         cy.contains("Ashta Bhairava").scrollIntoView().click()
        
//     });
// });

// describe('Windows Alerts', () => {
//     it('', () => {

//         cy.visit("https://the-internet.herokuapp.com/iframe")

//         cy.frameLoaded("#mce_0_ifr")

//         cy.iframe().contains('Your content goes here.')

        
        
//     });
// });

// describe('New Tabs', () => {
//     it('', () => {

//         cy.visit("https://the-internet.herokuapp.com/windows")

//         cy.xpath('//*[text()="Click Here"]').invoke("removeAttr","target").click()
        
//     });
// });

// describe('', () => {
//     it('', () => {

//         cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

//         cy.xpath('//*[text()="Click for JS Alert"]').click()

//         cy.on("window:alert",($msj)=>{


//             expect($msj).to.eq("I am a JS Alert")

//             return true;



           
//     });

    // it('window confirm', () => {

        
    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //     cy.xpath('//*[text()="Click for JS Confirm"]').click()

    //     cy.on("window:alert",($msj2)=>{


    //         expect($msj2).to.eq("I am a JS Confirm")

    //         return true;
    //     })
    // })


    // it('Prompt try', () => {

    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //     cy.xpath('//*[text()="Click for JS Prompt"]').click()

    //     cy.on("wi")

        

        
    });
    
 






