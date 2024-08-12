class search2{

    cap2(){

        cy.fixture("tut").then((data)=>{

            cy.get("[class='form-control input-lg']").first().clear().type(data.products.non)
            cy.get("[class='btn btn-default btn-lg']").click()
        })
    }
}
export default search2;