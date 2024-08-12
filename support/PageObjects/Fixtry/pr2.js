class lgin{

    details(){
        cy.fixture("tut").then((data)=>{

            cy.get("#input-email").type(data.user.username)
            cy.get("#input-password").type(data.user.password)
            cy.get('[value="Login"]').click({force:true})
        })
    }
}
export default lgin;