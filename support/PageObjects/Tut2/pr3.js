class search2{

    NonExist(){

        cy.get("[name='search']").first().clear().type("fruit")
        cy.get("[class='btn btn-default btn-lg']").click({force:true})



    }

}
export  default search2; 