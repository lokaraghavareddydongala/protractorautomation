"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Handling frames', function () {
    protractor_1.browser.ignoreSynchronization = true;
    beforeEach(function () {
        protractor_1.browser.get(' ');
    });
    it('frames ', function () {
        let frames1 = protractor_1.element(protractor_1.by.id('frame1'));
        let frames2 = protractor_1.element(protractor_1.by.id('frame2'));
        let frames3 = protractor_1.element(protractor_1.by.id('frame3'));
        protractor_1.browser.switchTo().frame(frames1.getWebElement());
        protractor_1.element(protractor_1.by.xpath("//input[@type='text']")).sendKeys('Loka Raghava reddy');
        protractor_1.browser.switchTo().defaultContent();
        protractor_1.browser.switchTo().frame(frames2.getWebElement());
        protractor_1.element(protractor_1.by.id("animals")).click();
        protractor_1.browser.switchTo().defaultContent();
        protractor_1.browser.switchTo().frame(frames1.getWebElement());
        protractor_1.browser.switchTo().frame(frames3.getWebElement());
        protractor_1.element(protractor_1.by.id("a")).click();
        protractor_1.browser.switchTo().defaultContent();
        protractor_1.browser.switchTo().defaultContent();
        protractor_1.browser.switchTo().frame(frames2.getWebElement());
        protractor_1.element(protractor_1.by.id("animals")).click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFuZGxpbmdGcmFtZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TcGVjcy9IYW5kbGluZ0ZyYW1lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4RDtBQUM5RCxRQUFRLENBQUMsaUJBQWlCLEVBQUM7SUFDdkIsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUE7SUFDcEMsVUFBVSxDQUFDO1FBQ1Asb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsU0FBUyxFQUFFO1FBQ1gsSUFBSSxPQUFPLEdBQWlCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ3BELElBQUksT0FBTyxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUNwRCxJQUFJLE9BQU8sR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDbkQsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUE7UUFDakQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUN6RSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO1FBQ2pELG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2pDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDbkMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUE7UUFDakQsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUE7UUFDakQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDM0Isb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNuQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ25DLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO1FBQ2pELG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBRXJDLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUEifQ==