import {browser, element} from 'protractor'
import { HomePagePO } from '../WebPages/HomePagePO'
import {SignTVLicencePO} from '../WebPages/SignTVLicencePO'
describe('TimeOuts', function(){
    browser.ignoreSynchronization = true
    browser.manage().timeouts().implicitlyWait(3000);
    xit('click media centre', function(){
        browser.get('https://www.tvlicensing.co.uk')
        let homePagePO:HomePagePO = new HomePagePO()
        homePagePO.clickMediaCentre()
        
    })
    xit('click sign in ', function(){
        browser.get('https://www.tvlicensing.co.uk')
        let homePagePO:HomePagePO = new HomePagePO()
        homePagePO.clickSignIn()
        let signTVLicencePO:SignTVLicencePO = new SignTVLicencePO()
        signTVLicencePO.sendLicenceDetails('1000027052','loka')
    })
    xit('sign in default', function(){
        browser.get('https://www.tvlicensing.co.uk')
        let homePagePO:HomePagePO = new HomePagePO()
        homePagePO.clickSignIn()
        let signTVLicencePO:SignTVLicencePO = new SignTVLicencePO()
        signTVLicencePO.sendLicenceDetails('1000027052','loka', 'B32DJ')

    })
    xit('optional parametres', function(){
        browser.get('https://www.tvlicensing.co.uk')
        let homePagePO:HomePagePO = new HomePagePO()
        homePagePO.clickSignIn()
        let signTVLicencePO:SignTVLicencePO = new SignTVLicencePO()
        signTVLicencePO.sendLicence('1000027052','loka')
        
    })
    xit('optional parametres with out optional', function(){
        browser.get('https://www.tvlicensing.co.uk')
        let homePagePO:HomePagePO = new HomePagePO()
        homePagePO.clickSignIn()
        let signTVLicencePO:SignTVLicencePO = new SignTVLicencePO()
        signTVLicencePO.sendLicence('1000027052','loka', 'L58xY')
        
    })
    xit('optional parametres ,default', function(){
        browser.get('https://www.tvlicensing.co.uk')
        let homePagePO:HomePagePO = new HomePagePO()
        homePagePO.clickSignIn()
        let signTVLicencePO:SignTVLicencePO = new SignTVLicencePO()
        signTVLicencePO.sendLicencen('1000027052',undefined)
        
    })
    it('optional parametres ,default', function(){
        browser.get('https://www.tvlicensing.co.uk')
        let homePagePO:HomePagePO = new HomePagePO()
        homePagePO.clickSignIn()
        let signTVLicencePO:SignTVLicencePO = new SignTVLicencePO()
        signTVLicencePO.sendLicencen('1000027052',undefined)
        
    })
})