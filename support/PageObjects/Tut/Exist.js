class Existing{

    Search(){
//Verify and Enter the Data in Seach Fuctionality
        cy.get("[placeholder='Search']").type("HP")
        cy.get("[class='fa fa-search']").click({force:true})
        
    }
//Click on the image of the product
    Prclick(){

        cy.get('[src="https://tutorialsninja.com/demo/image/cache/catalog/demo/hp_1-228x228.jpg"]').click({force:true})
    }
   
}
export default Existing;