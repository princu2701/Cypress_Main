class Check{
//Optional- Click on CheckoutButton
    Checkout(){

        cy.xpath("(//*[@class='btn btn-primary'])[5]").click({force:true})
    }
}
export default Check;