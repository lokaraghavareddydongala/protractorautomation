import {element, browser, by, ElementFinder} from 'protractor'
export class HomePagePO{

    mediaCentre:ElementFinder = element(by.xpath("//a[@title='Media Centre']"));
    signIn:ElementFinder = element(by.xpath("//a[text()='Sign in to your TV Licence']"));

    public clickMediaCentre(){
        this.mediaCentre.click()

    }
    public clickSignIn(){
        this.signIn.click()

    }

}