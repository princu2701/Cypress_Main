class Login_pr{

    EnterURL(){

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }


    Logn(){

       
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').click()
    }

    clickonforgotpassword(){

        cy.get('orangehrm-login-forgot-header').click();
    }

}    
export default Login_pr;

 




































