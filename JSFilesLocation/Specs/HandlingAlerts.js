"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('jasmine framework', function () {
    protractor_1.browser.ignoreSynchronization = true;
    beforeAll(function () {
        console.log('---------suite execution started-----------');
    });
    afterAll(function () {
        console.log('---------suite execution completed-----------');
    });
    beforeEach(function () {
        protractor_1.browser.get('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');
        protractor_1.browser.manage().window().maximize();
    });
    afterEach(function () {
        console.log("-------------spec completed-------------");
    });
    it('alert handling', function () {
        let alert = protractor_1.element(protractor_1.by.name('alert'));
        alert.click();
        protractor_1.browser.switchTo().alert().getText().then(function (text) {
            console.log(text);
        });
        protractor_1.browser.switchTo().alert().accept();
    });
    it('parameter reading', function () {
        console.log(protractor_1.browser.params.login.username);
        console.log(protractor_1.browser.params.login.password);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFuZGxpbmdBbGVydHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TcGVjcy9IYW5kbGluZ0FsZXJ0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4RDtBQUM5RCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUE7SUFFcEMsU0FBUyxDQUFDO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFBO0lBQzlELENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFBO0lBQ2hFLENBQUMsQ0FBQyxDQUFBO0lBQ0YsVUFBVSxDQUFDO1FBQ1Asb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQTtRQUNqRixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBRXhDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsU0FBUyxDQUFDO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFBO0lBQzNELENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBQ2hCLElBQUksS0FBSyxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNuRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDYixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNGLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFHekMsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFOUMsQ0FBQyxDQUFDLENBQUE7QUFHTixDQUFDLENBQUMsQ0FBQSJ9