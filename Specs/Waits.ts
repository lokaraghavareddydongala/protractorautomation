import { browser, ExpectedConditions } from "protractor"
import { HomePagePO } from "../WebPages/HomePagePO"
import { createWriteStream } from "fs"
import { TakeScreenshot } from "../Utility/TakeScreenshot"

describe('waits', function(){
    browser.ignoreSynchronization = true
    beforeEach(function(){
        browser.get(' ')
    })
    xit('explicitWiat', function(){

        let homePagePO:HomePagePO = new HomePagePO();
        browser.wait(ExpectedConditions.titleIs("loka"),1000). then(null, function(err){
            console.log('-------------------------')
            console.log(err.name)
        })
        
        browser.wait(ExpectedConditions.alertIsPresent(),1000)


    })
    it('capturescreenshot', function(){
        TakeScreenshot.takeScreenShot('text')
           
    })
})