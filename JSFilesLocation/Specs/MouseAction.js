"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Smoketests', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('title validation', function () {
        protractor_1.browser.get(' ');
        let signIn = protractor_1.element(protractor_1.by.xpath("//a[text()='Sign in to your TV Licence']"));
        protractor_1.browser.actions().click(signIn).perform();
        //browser.actions().mouseMove(signIn.getWebElement()).click().perform()
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW91c2VBY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TcGVjcy9Nb3VzZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4RDtBQUU5RCxRQUFRLENBQUMsWUFBWSxFQUFDO0lBQ2xCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3BDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtRQUNuQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQixJQUFJLE1BQU0sR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUN6RixvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN6Qyx1RUFBdUU7SUFFM0UsQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQSJ9