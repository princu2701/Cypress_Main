describe('Make my trip', () => {
    it('Multipe test cases', () => {


        cy.visit('https://www.makemytrip.com/');

        cy.xpath("//img[@src='//promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png'  and @alt='Make My Trip']")
        cy.xpath("//span[@data-cy='myBizText'  and @class='latoBold']")
        cy.xpath("//p[@data-cy='MyTripsWidgetText' and @class='appendBottom3 font11 whiteText']")
        cy.xpath("//li[@data-cy='account' and @class='makeFlex hrtlCenter font10 makeRelative lhUser userLoggedOut']")
        cy.xpath("//div[@data-cy='LanguageSwitcherWidget' and @class = 'whiteText makeFlex perfectCenter langSlct']")

        
    });
});