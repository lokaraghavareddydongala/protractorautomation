import { browser, element, by } from 'protractor'
describe('Smoketests', function () {
    browser.ignoreSynchronization = true
    it('title validation', function () {
        browser.get(' ')
        element(by.xpath("//input[@value='Open New Window']")).click()
        browser.getWindowHandle().then(function(parentGuid){
            browser.getAllWindowHandles().then(function(guids){
                for(let i =0 ;i<guids.length;i++){
                    if(guids[i]!=parentGuid){
                        browser.switchTo().window(guids[i])
                        break;
                    }
                }
                browser.getTitle().then(function(title){
                    console.log(title)
                })
                browser.switchTo().window(parentGuid)
                browser.getTitle().then(function(title){
                    console.log(title)
                })

            })
        })
       
    })

})