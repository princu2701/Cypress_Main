import Login_pr from "../../support/PageObjects/Tut/Log.js";
import Existing from "../../support/PageObjects/Tut/Exist.js";
import Pro from "../../support/PageObjects/Tut/PrPage.js";
import Check from "../../support/PageObjects/Tut/Checko.js";
//import CheckDetails from "../../support/PageObjects/Tut/AddressP.js";

describe('Final Project', () => {
    const pr1=new Login_pr();
    const pr2=new Existing();
    const pr3=new Pro();
    const c1=new Check();
    //const c2=new CheckDetails();

    it('Tests', () => {
//For Entering the URL

        pr1.Enterurl();
        pr1.first();
//Searching and Visiting the Product

        pr2.Search();
        pr2.Prclick();
//Clicking and Asserting the message of Shopping Success

        pr3.Disp();
        pr3.Ass();
        //Clocking on checkout

        c1.Checkout();

        //Add the persondetails

        // c2.FirstName();
        // c2.LastName();
        // c2.Address();
        // c2.City();
        // c2.Country();
        // c2.Pin();
        // c2.State();

        
    });
});