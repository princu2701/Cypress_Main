class Login_pr{
//EnterURL
    Enterurl(){

        cy.visit("https://tutorialsninja.com/demo/index.php?route=common/home")


    }
//Enter Login Details
    first(){

        cy.xpath("(//*[text()='My Account'])[1]").click({force:true});
        cy.get("[class='dropdown-menu dropdown-menu-right']").contains("Login").click({force:true})
        cy.get("#input-email").type("prraj3002@gmail.com")
        cy.get("#input-password").type("12345678")
        cy.get('[type="submit"]').click()
    }
//For ForgotPassword
    forgotpass(){
        cy.xpath("(//*[.='Forgotten Password'])[1]").click()
    }

}
export default Login_pr;