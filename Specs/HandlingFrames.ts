import {browser, element, by, ElementFinder} from 'protractor'
describe('Handling frames',function(){
    browser.ignoreSynchronization = true
    beforeEach(function(){
        browser.get(' ');
    })
    it('frames ', function(){
       let frames1:ElementFinder = element(by.id('frame1'))
       let frames2:ElementFinder = element(by.id('frame2'))
       let frames3:ElementFinder = element(by.id('frame3'))
        browser.switchTo().frame(frames1.getWebElement())
        element(by.xpath("//input[@type='text']")).sendKeys('Loka Raghava reddy')
        browser.switchTo().defaultContent();
        browser.switchTo().frame(frames2.getWebElement())
        element(by.id("animals")).click()
        browser.switchTo().defaultContent()
        browser.switchTo().frame(frames1.getWebElement())
        browser.switchTo().frame(frames3.getWebElement())
        element(by.id("a")).click()
        browser.switchTo().defaultContent()
        browser.switchTo().defaultContent()
        browser.switchTo().frame(frames2.getWebElement())
        element(by.id("animals")).click()

    })
   
})