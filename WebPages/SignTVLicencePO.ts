import {element, browser, by, ElementFinder} from 'protractor'
export class SignTVLicencePO{

    licenceNo:ElementFinder = element(by.id("ctl00_Content_Login1_txtMembershipNumber"));
    lastName:ElementFinder = element(by.id("ctl00_Content_Login1_txtSurname"));
    postCode:ElementFinder = element(by.id("ctl00_Content_Login1_txtPostCode"));
   

    
    public sendLicenceDetails(licencNumber:string,surname:string,postalcode:string ='L58xj'){
        this.licenceNo.sendKeys(licencNumber)
        this.lastName.sendKeys(surname)
        this.postCode.sendKeys(postalcode)
        

    }
    public sendLicence(licencNumber:string,surname:string,postalcode?:string){
        this.licenceNo.sendKeys(licencNumber)
        this.lastName.sendKeys(surname)
        console.log(postalcode)
        if(postalcode!=undefined){
             this.postCode.sendKeys(postalcode)

        }   
    }
    public sendLicencen(licencNumber:string,surname:string= 'loka',postalcode?:string){
        this.licenceNo.sendKeys(licencNumber)
        this.lastName.sendKeys(surname)
        console.log(postalcode)
        if(postalcode!=undefined){
             this.postCode.sendKeys(postalcode)

        }   
    }
    
   
    
    
}