class search1{


    Existing(){

        cy.get("[name='search']").clear().type("Hp")
        cy.get("[class='btn btn-default btn-lg']").click({force:true})
    }

    
}
export default search1;