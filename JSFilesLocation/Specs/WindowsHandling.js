"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Smoketests', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('title validation', function () {
        protractor_1.browser.get(' ');
        protractor_1.element(protractor_1.by.xpath("//input[@value='Open New Window']")).click();
        protractor_1.browser.getWindowHandle().then(function (parentGuid) {
            protractor_1.browser.getAllWindowHandles().then(function (guids) {
                for (let i = 0; i < guids.length; i++) {
                    if (guids[i] != parentGuid) {
                        protractor_1.browser.switchTo().window(guids[i]);
                        break;
                    }
                }
                protractor_1.browser.getTitle().then(function (title) {
                    console.log(title);
                });
                protractor_1.browser.switchTo().window(parentGuid);
                protractor_1.browser.getTitle().then(function (title) {
                    console.log(title);
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2luZG93c0hhbmRsaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3BlY3MvV2luZG93c0hhbmRsaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlEO0FBQ2pELFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFDbkIsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUE7SUFDcEMsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1FBQ25CLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDOUQsb0JBQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxVQUFVO1lBQzlDLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO2dCQUM3QyxLQUFJLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztvQkFDN0IsSUFBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUUsVUFBVSxFQUFDO3dCQUNwQixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDbkMsTUFBTTtxQkFDVDtpQkFDSjtnQkFDRCxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7b0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFBO2dCQUNGLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUNyQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7b0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFBO1lBRU4sQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUEifQ==