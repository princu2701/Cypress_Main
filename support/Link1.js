class Link_po{



//Method to click on any link
    linkclick(link){

        cy.contains(link).click();
    }

}

export default Link_po;