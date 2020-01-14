import {browser, element, by} from 'protractor'
describe('operations', function(){
    browser.ignoreSynchronization = true
    it('wait', function(){
        browser.get('https://www.tvlicensing.co.uk')
        browser.manage().timeouts().implicitlyWait(3000);
        element(by.id('loka')).click().then(null,function(err){
            console.log('------------------------------')
            console.log(err.name)
            console.log('------------------------------')
        })
        
    })
    xit('error handling', function(){
        browser.get('https://www.tvlicensing.co.uk')
        browser.manage().timeouts().implicitlyWait(3000);
        element(by.xpath("//a[@title = 'Media Centr']")).getText().then(null,function(err){
            console.log('------------------------------')
            console.log(err)
            console.log('------------------------------')
            console.log(err.name)
        }).then(function(text){
            console.log(text)
        })
        
        
    })
})