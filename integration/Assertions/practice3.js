describe('Oranage HRM', () => {
    it('Test', () => {
        
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


                cy.get('[name="password"]').then(($password)=>{


                  expect($password).to.have.attr('placeholder','Password')

                  cy.wrap($password).type('admin123')
});

                cy.get('[name="username"]').then(($username)=>{

                    expect($username).to.have.attr('placeholder','Username')

                    cy.wrap($username).type('Admin')
 }  )

                cy.get('[type="submit"]').then(($submit)=>{


                    expect($submit).to.have.text(' Login ')


                    cy.wrap($submit).click();
 })

           cy.wait(2000);
          cy.get('.oxd-userdropdown-name').click();


          cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($drop)=>{


            if($drop.text()=='Logout'){

                 cy.wrap($drop).click();
}
})

});
});