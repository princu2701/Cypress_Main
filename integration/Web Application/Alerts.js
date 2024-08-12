describe('Practice apge', () => {
    it('Alerts1', () => {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get("#alertbtn").click();

        cy.on('window:alert',($alertmsg)=>{

            expect($alertmsg).to.equal("Hello , share this practice page and share your knowledge")

            return true;

        })

        cy.get("#confirmbtn").click();

        cy.on("windows:confirm",($msg)=>{

            expect($msg).to.eq("Hello , share this practice page and share your knowledge")

            return true;
        })
    });
});