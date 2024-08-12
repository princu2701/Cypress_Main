class Pro{
//At the Product Page add the item to the Cart 
    Disp(){

        cy.xpath('//*[.="Add to Cart"]').click({force:true})
    }

    Ass(){
//Click on the Success link of Shopping Cart
        cy.xpath('//*[.="shopping cart"]').click({force:true})
    }
}
export default Pro;