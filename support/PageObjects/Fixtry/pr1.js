class homepage{

    EnterUrl(){
        cy.visit("https://tutorialsninja.com/demo/")

    }

    Account(){

        cy.xpath("(//*[.='My Account'])[1]").click({force:true})

       cy.get("[class='dropdown-menu dropdown-menu-right']").contains("Login").click()
    }

}
export default homepage;
