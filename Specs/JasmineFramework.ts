import { browser } from "protractor"
import { HomePagePO } from "../WebPages/HomePagePO"
import { SignTVLicencePO } from "../WebPages/SignTVLicencePO"
import { JsonFileRead } from "../Utility/JsonFileOperations"

describe('jasmine framework', function(){
    browser.ignoreSynchronization = true
    beforeEach(function(){
        browser.get('https://www.tvlicensing.co.uk')
        browser.manage().window().maximize()
        browser.manage().window().getSize().then(function(size){
            console.log(size.height)
            console.log(size.width)

        })
    })
    afterEach(function(){
        console.log("-------------spec completed-------------")
    })
    it('json file reading', function(){
        let homePagePO:HomePagePO = new HomePagePO()
        homePagePO.clickSignIn()
        let signTVLicencePO:SignTVLicencePO = new SignTVLicencePO()
        const fs = require('fs');
        let rawData =fs.readFileSync("./TestData/TestData.json");
        let data = JSON.parse(rawData);
        console.log(data["LicenceNo"])
        console.log(data["LastName"])
        console.log(data["PostCode"])
        signTVLicencePO.sendLicenceDetails(data["LicenceNo"],data["LastName"],data["PostCode"])
        
    })
    it('json file reading using utility method', function(){
        let homePagePO:HomePagePO = new HomePagePO()
        homePagePO.clickSignIn()
        let signTVLicencePO:SignTVLicencePO = new SignTVLicencePO()
        signTVLicencePO.sendLicenceDetails(JsonFileRead.readJson()["LicenceNo"],JsonFileRead.readJson()["LastName"], JsonFileRead.readJson()["PostCode"])
    })

})