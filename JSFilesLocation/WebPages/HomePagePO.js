"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HomePagePO {
    constructor() {
        this.mediaCentre = protractor_1.element(protractor_1.by.xpath("//a[@title='Media Centre']"));
        this.signIn = protractor_1.element(protractor_1.by.xpath("//a[text()='Sign in to your TV Licence']"));
    }
    clickMediaCentre() {
        this.mediaCentre.click();
    }
    clickSignIn() {
        this.signIn.click();
    }
}
exports.HomePagePO = HomePagePO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1dlYlBhZ2VzL0hvbWVQYWdlUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEQ7QUFDOUQsTUFBYSxVQUFVO0lBQXZCO1FBRUksZ0JBQVcsR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUM1RSxXQUFNLEdBQWlCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7SUFXekYsQ0FBQztJQVRVLGdCQUFnQjtRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBRTVCLENBQUM7SUFDTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUV2QixDQUFDO0NBRUo7QUFkRCxnQ0FjQyJ9