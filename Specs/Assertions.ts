import { browser } from 'protractor'

describe('Assertions',function(){
    browser.ignoreSynchronization = true
    it('title assertion', function(){
        browser.get('https://www.tvlicensing.co.uk')
        browser.getTitle().then(function(title){
            console.log('title')
            expect(title).toBe('loka','title not matches')
            
        })
    })
    it('title not assertion', function(){
        browser.get('https://www.tvlicensing.co.uk')
        browser.getTitle().then(function(title){
            console.log('title')
            expect(title).not.toBe('loka', 'title matches')
            
        })
    })

} )