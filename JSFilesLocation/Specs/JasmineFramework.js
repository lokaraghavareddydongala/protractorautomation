"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HomePagePO_1 = require("../WebPages/HomePagePO");
const SignTVLicencePO_1 = require("../WebPages/SignTVLicencePO");
const JsonFileOperations_1 = require("../Utility/JsonFileOperations");
describe('jasmine framework', function () {
    protractor_1.browser.ignoreSynchronization = true;
    beforeEach(function () {
        protractor_1.browser.get('https://www.tvlicensing.co.uk');
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().window().getSize().then(function (size) {
            console.log(size.height);
            console.log(size.width);
        });
    });
    afterEach(function () {
        console.log("-------------spec completed-------------");
    });
    it('json file reading', function () {
        let homePagePO = new HomePagePO_1.HomePagePO();
        homePagePO.clickSignIn();
        let signTVLicencePO = new SignTVLicencePO_1.SignTVLicencePO();
        const fs = require('fs');
        let rawData = fs.readFileSync("./TestData/TestData.json");
        let data = JSON.parse(rawData);
        console.log(data["LicenceNo"]);
        console.log(data["LastName"]);
        console.log(data["PostCode"]);
        signTVLicencePO.sendLicenceDetails(data["LicenceNo"], data["LastName"], data["PostCode"]);
    });
    it('json file reading using utility method', function () {
        let homePagePO = new HomePagePO_1.HomePagePO();
        homePagePO.clickSignIn();
        let signTVLicencePO = new SignTVLicencePO_1.SignTVLicencePO();
        signTVLicencePO.sendLicenceDetails(JsonFileOperations_1.JsonFileRead.readJson()["LicenceNo"], JsonFileOperations_1.JsonFileRead.readJson()["LastName"], JsonFileOperations_1.JsonFileRead.readJson()["PostCode"]);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSmFzbWluZUZyYW1ld29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1NwZWNzL0phc21pbmVGcmFtZXdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFDcEMsdURBQW1EO0FBQ25ELGlFQUE2RDtBQUM3RCxzRUFBNEQ7QUFFNUQsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBQzFCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3BDLFVBQVUsQ0FBQztRQUNQLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDNUMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNwQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFM0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFNBQVMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQTtJQUMzRCxDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixJQUFJLFVBQVUsR0FBYyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtRQUM1QyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDeEIsSUFBSSxlQUFlLEdBQW1CLElBQUksaUNBQWUsRUFBRSxDQUFBO1FBQzNELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLE9BQU8sR0FBRSxFQUFFLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUM3QixlQUFlLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUUzRixDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRTtRQUN6QyxJQUFJLFVBQVUsR0FBYyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtRQUM1QyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDeEIsSUFBSSxlQUFlLEdBQW1CLElBQUksaUNBQWUsRUFBRSxDQUFBO1FBQzNELGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxpQ0FBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFDLGlDQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsaUNBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBQ3JKLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUEifQ==