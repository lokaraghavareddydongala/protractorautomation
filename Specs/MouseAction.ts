import {browser, element, ElementFinder, by} from 'protractor'
import { HomePagePO } from '../WebPages/HomePagePO'
describe('Smoketests',function(){
    browser.ignoreSynchronization = true
    it('title validation', function(){
        browser.get(' ')
        let signIn:ElementFinder = element(by.xpath("//a[text()='Sign in to your TV Licence']"));
        browser.actions().click(signIn).perform()
        //browser.actions().mouseMove(signIn.getWebElement()).click().perform()
        
    })
   
})