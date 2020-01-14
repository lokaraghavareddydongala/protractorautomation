import { browser, element, by, ElementArrayFinder } from "protractor"

describe('hyperlinks',function(){
    browser.ignoreSynchronization = true;
    it('anchortags', function(){
        browser.get('https://www.tvlicensing.co.uk')
        let anchorTags:ElementArrayFinder = element.all(by.tagName('a'))
        anchorTags.count().then(function(count){
            for(let i=0; i<count;i++){
                anchorTags.get(i).getAttribute('href').then(function(url){
                    console.log(url)
                })
            }
 
        })

 
    })
})