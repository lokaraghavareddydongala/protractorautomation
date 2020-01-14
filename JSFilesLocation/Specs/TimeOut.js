"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HomePagePO_1 = require("../WebPages/HomePagePO");
const SignTVLicencePO_1 = require("../WebPages/SignTVLicencePO");
describe('TimeOuts', function () {
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().timeouts().implicitlyWait(3000);
    xit('click media centre', function () {
        protractor_1.browser.get('https://www.tvlicensing.co.uk');
        let homePagePO = new HomePagePO_1.HomePagePO();
        homePagePO.clickMediaCentre();
    });
    xit('click sign in ', function () {
        protractor_1.browser.get('https://www.tvlicensing.co.uk');
        let homePagePO = new HomePagePO_1.HomePagePO();
        homePagePO.clickSignIn();
        let signTVLicencePO = new SignTVLicencePO_1.SignTVLicencePO();
        signTVLicencePO.sendLicenceDetails('1000027052', 'loka');
    });
    xit('sign in default', function () {
        protractor_1.browser.get('https://www.tvlicensing.co.uk');
        let homePagePO = new HomePagePO_1.HomePagePO();
        homePagePO.clickSignIn();
        let signTVLicencePO = new SignTVLicencePO_1.SignTVLicencePO();
        signTVLicencePO.sendLicenceDetails('1000027052', 'loka', 'B32DJ');
    });
    xit('optional parametres', function () {
        protractor_1.browser.get('https://www.tvlicensing.co.uk');
        let homePagePO = new HomePagePO_1.HomePagePO();
        homePagePO.clickSignIn();
        let signTVLicencePO = new SignTVLicencePO_1.SignTVLicencePO();
        signTVLicencePO.sendLicence('1000027052', 'loka');
    });
    xit('optional parametres with out optional', function () {
        protractor_1.browser.get('https://www.tvlicensing.co.uk');
        let homePagePO = new HomePagePO_1.HomePagePO();
        homePagePO.clickSignIn();
        let signTVLicencePO = new SignTVLicencePO_1.SignTVLicencePO();
        signTVLicencePO.sendLicence('1000027052', 'loka', 'L58xY');
    });
    xit('optional parametres ,default', function () {
        protractor_1.browser.get('https://www.tvlicensing.co.uk');
        let homePagePO = new HomePagePO_1.HomePagePO();
        homePagePO.clickSignIn();
        let signTVLicencePO = new SignTVLicencePO_1.SignTVLicencePO();
        signTVLicencePO.sendLicencen('1000027052', undefined);
    });
    it('optional parametres ,default', function () {
        protractor_1.browser.get('https://www.tvlicensing.co.uk');
        let homePagePO = new HomePagePO_1.HomePagePO();
        homePagePO.clickSignIn();
        let signTVLicencePO = new SignTVLicencePO_1.SignTVLicencePO();
        signTVLicencePO.sendLicencen('1000027052', undefined);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZU91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1NwZWNzL1RpbWVPdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkM7QUFDM0MsdURBQW1EO0FBQ25ELGlFQUEyRDtBQUMzRCxRQUFRLENBQUMsVUFBVSxFQUFFO0lBQ2pCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3BDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELEdBQUcsQ0FBQyxvQkFBb0IsRUFBRTtRQUN0QixvQkFBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1FBQzVDLElBQUksVUFBVSxHQUFjLElBQUksdUJBQVUsRUFBRSxDQUFBO1FBQzVDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBRWpDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1FBQ2xCLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDNUMsSUFBSSxVQUFVLEdBQWMsSUFBSSx1QkFBVSxFQUFFLENBQUE7UUFDNUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3hCLElBQUksZUFBZSxHQUFtQixJQUFJLGlDQUFlLEVBQUUsQ0FBQTtRQUMzRCxlQUFlLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzNELENBQUMsQ0FBQyxDQUFBO0lBQ0YsR0FBRyxDQUFDLGlCQUFpQixFQUFFO1FBQ25CLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDNUMsSUFBSSxVQUFVLEdBQWMsSUFBSSx1QkFBVSxFQUFFLENBQUE7UUFDNUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3hCLElBQUksZUFBZSxHQUFtQixJQUFJLGlDQUFlLEVBQUUsQ0FBQTtRQUMzRCxlQUFlLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUVwRSxDQUFDLENBQUMsQ0FBQTtJQUNGLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRTtRQUN2QixvQkFBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1FBQzVDLElBQUksVUFBVSxHQUFjLElBQUksdUJBQVUsRUFBRSxDQUFBO1FBQzVDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUN4QixJQUFJLGVBQWUsR0FBbUIsSUFBSSxpQ0FBZSxFQUFFLENBQUE7UUFDM0QsZUFBZSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUMsTUFBTSxDQUFDLENBQUE7SUFFcEQsQ0FBQyxDQUFDLENBQUE7SUFDRixHQUFHLENBQUMsdUNBQXVDLEVBQUU7UUFDekMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQTtRQUM1QyxJQUFJLFVBQVUsR0FBYyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtRQUM1QyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDeEIsSUFBSSxlQUFlLEdBQW1CLElBQUksaUNBQWUsRUFBRSxDQUFBO1FBQzNELGVBQWUsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUU3RCxDQUFDLENBQUMsQ0FBQTtJQUNGLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRTtRQUNoQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1FBQzVDLElBQUksVUFBVSxHQUFjLElBQUksdUJBQVUsRUFBRSxDQUFBO1FBQzVDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUN4QixJQUFJLGVBQWUsR0FBbUIsSUFBSSxpQ0FBZSxFQUFFLENBQUE7UUFDM0QsZUFBZSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUMsU0FBUyxDQUFDLENBQUE7SUFFeEQsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsOEJBQThCLEVBQUU7UUFDL0Isb0JBQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQTtRQUM1QyxJQUFJLFVBQVUsR0FBYyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtRQUM1QyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDeEIsSUFBSSxlQUFlLEdBQW1CLElBQUksaUNBQWUsRUFBRSxDQUFBO1FBQzNELGVBQWUsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRXhELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==