

describe('Single Window New Site Test', () => {
    it('1', () => {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.xpath("//*[.='Open Tab']").invoke("removeAttr","target").click()


        cy.origin("https://www.qaclickacademy.com",()=>{

             cy.visit("/")
            cy.contains("Access all our Courses").click()
        })
        
    });

    it('2', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get("#openwindow").invoke("removeAttr",'onclick').click()

        cy.origin("https://www.qaclickacademy.com/",()=>{
                cy.visit('')
                cy.contains("Access all our Courses").click()
               cy.wait(2000)
        })

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.xpath('//*[.="Free Access to InterviewQues/ResumeAssistance/Material"]').click()

        
    });
});