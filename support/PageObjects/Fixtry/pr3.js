class search{

    Cap(){
    cy.fixture("tut").then((data)=>{

        cy.get("[class='form-control input-lg']").type(data.products.exist)
        cy.get("[class='btn btn-default btn-lg']").click()

    })
}
}
export default search;