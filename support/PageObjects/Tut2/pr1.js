class home{

    EnterUrl(){

        cy.visit("https://tutorialsninja.com/demo/")
    }

    Myacc(){
        

        cy.xpath("(//*[.='My Account'])[1]").click({force:true})

       cy.get("[class='dropdown-menu dropdown-menu-right']").contains("Login").click()
    }

}
export default home;