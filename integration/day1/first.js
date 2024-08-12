describe('Test Suite - Collection of Tests', () => {
//Describe is a block where we write multiple test



    it('Test1', () => {
          //It block is test script -1 test

          //Cy is my cypress object
          //using cy we write cypress commands
          //cy.visit is for entering the url inside browser.
        cy.visit('https://the-internet.herokuapp.com/login')
            

        cy.get(input[user='username']").type('Admin')
        
    });
});