import {browser, element, by, ElementFinder} from 'protractor'
describe('jasmine framework', function(){
    browser.ignoreSynchronization = true

    beforeAll(function(){
        console.log('---------suite execution started-----------')
    })
    afterAll(function(){
        console.log('---------suite execution completed-----------')
    })
    beforeEach(function(){
        browser.get('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver')
        browser.manage().window().maximize()
       
    })
    afterEach(function(){
        console.log("-------------spec completed-------------")
    })
    it('alert handling', function(){
         let alert:ElementFinder = element(by.name('alert'))
         alert.click()
         browser.switchTo().alert().getText().then(function(text){
            console.log(text)
         })
         browser.switchTo().alert().accept();


    })
    it('parameter reading', function(){
        console.log(browser.params.login.username)
        console.log(browser.params.login.password)
       
    })


})