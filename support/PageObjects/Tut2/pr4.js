class search3{

    Non(){

        cy.get("[name='search']").first().clear()
        cy.get("[class='btn btn-default btn-lg']").click({force:true})
}

}
export default search3;