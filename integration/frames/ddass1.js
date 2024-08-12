before(() => {
    
    cy.fixture("example",(data)=>{


        globalThis.data=data
    })
});

describe('', () => {
    it('', () => {

        cy.visit("https://the-internet.herokuapp.com/login")

        cy.get("[type='text']").type(data.username)

        cy.get("[type='password']").type(data.password)
        
    });
});