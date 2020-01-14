"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SignTVLicencePO {
    constructor() {
        this.licenceNo = protractor_1.element(protractor_1.by.id("ctl00_Content_Login1_txtMembershipNumber"));
        this.lastName = protractor_1.element(protractor_1.by.id("ctl00_Content_Login1_txtSurname"));
        this.postCode = protractor_1.element(protractor_1.by.id("ctl00_Content_Login1_txtPostCode"));
    }
    sendLicenceDetails(licencNumber, surname, postalcode = 'L58xj') {
        this.licenceNo.sendKeys(licencNumber);
        this.lastName.sendKeys(surname);
        this.postCode.sendKeys(postalcode);
    }
    sendLicence(licencNumber, surname, postalcode) {
        this.licenceNo.sendKeys(licencNumber);
        this.lastName.sendKeys(surname);
        console.log(postalcode);
        if (postalcode != undefined) {
            this.postCode.sendKeys(postalcode);
        }
    }
    sendLicencen(licencNumber, surname = 'loka', postalcode) {
        this.licenceNo.sendKeys(licencNumber);
        this.lastName.sendKeys(surname);
        console.log(postalcode);
        if (postalcode != undefined) {
            this.postCode.sendKeys(postalcode);
        }
    }
}
exports.SignTVLicencePO = SignTVLicencePO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnblRWTGljZW5jZVBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vV2ViUGFnZXMvU2lnblRWTGljZW5jZVBPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQThEO0FBQzlELE1BQWEsZUFBZTtJQUE1QjtRQUVJLGNBQVMsR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUNyRixhQUFRLEdBQWlCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsYUFBUSxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0lBaUNoRixDQUFDO0lBN0JVLGtCQUFrQixDQUFDLFlBQW1CLEVBQUMsT0FBYyxFQUFDLGFBQW1CLE9BQU87UUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7SUFHdEMsQ0FBQztJQUNNLFdBQVcsQ0FBQyxZQUFtQixFQUFDLE9BQWMsRUFBQyxVQUFrQjtRQUNwRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3ZCLElBQUcsVUFBVSxJQUFFLFNBQVMsRUFBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtTQUV0QztJQUNMLENBQUM7SUFDTSxZQUFZLENBQUMsWUFBbUIsRUFBQyxVQUFnQixNQUFNLEVBQUMsVUFBa0I7UUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN2QixJQUFHLFVBQVUsSUFBRSxTQUFTLEVBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7U0FFdEM7SUFDTCxDQUFDO0NBS0o7QUFyQ0QsMENBcUNDIn0=