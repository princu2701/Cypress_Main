

before(() => {
 
     cy.fixture("example").then((data)=>{

        globalThis.data=data
})

})    

describe('OrangeHrm Suite', () => {
        it('Login Test1', () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
           
           
           
            cy.get('input[name="username"]').type(data.username)
    
            cy.get('input[type="password"]').type(data.password)
            
    
    
        });
})


