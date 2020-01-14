"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HomePagePO_1 = require("../WebPages/HomePagePO");
const TakeScreenshot_1 = require("../Utility/TakeScreenshot");
describe('waits', function () {
    protractor_1.browser.ignoreSynchronization = true;
    beforeEach(function () {
        protractor_1.browser.get(' ');
    });
    xit('explicitWiat', function () {
        let homePagePO = new HomePagePO_1.HomePagePO();
        protractor_1.browser.wait(protractor_1.ExpectedConditions.titleIs("loka"), 1000).then(null, function (err) {
            console.log('-------------------------');
            console.log(err.name);
        });
        protractor_1.browser.wait(protractor_1.ExpectedConditions.alertIsPresent(), 1000);
    });
    it('capturescreenshot', function () {
        TakeScreenshot_1.TakeScreenshot.takeScreenShot('text');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FpdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TcGVjcy9XYWl0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUN4RCx1REFBbUQ7QUFFbkQsOERBQTBEO0FBRTFELFFBQVEsQ0FBQyxPQUFPLEVBQUU7SUFDZCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTtJQUNwQyxVQUFVLENBQUM7UUFDUCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNGLEdBQUcsQ0FBQyxjQUFjLEVBQUU7UUFFaEIsSUFBSSxVQUFVLEdBQWMsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDN0Msb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBUyxHQUFHO1lBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQTtRQUVGLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLGNBQWMsRUFBRSxFQUFDLElBQUksQ0FBQyxDQUFBO0lBRzFELENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLCtCQUFjLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXpDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==