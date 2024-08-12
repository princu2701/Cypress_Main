import Login_po from "../../support/PageObjects/OrangeHRM/Login1";
import Logout_po from "../../support/Logout1";
import Link_po from "../../support/Link1";



describe('', () => {

    const login_po=new Login_po();
    const link_po=new Link_po();
    const logout_po= new Logout_po();

    it('Test', () => {
      //For logging in
        login_po.EnterURL();
        login_po.Login();
        

      //For links

      link_po.linkclick('Admin');

      //For Logout
      logout_po.Logout();


        
    });
});