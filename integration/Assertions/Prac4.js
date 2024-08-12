describe('Pr', () => {
    it('Navi1', () => {

                 cy.visit('https://rahulshettyacademy.com/documents-request');

                 cy.xpath("//a[.='Free Access to InterviewQues/ResumeAssistance/Material']").click()

                 cy.go('back')

                 cy.go('forward')

                 cy.reload();


        
    });
});