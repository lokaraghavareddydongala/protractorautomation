"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const fs_1 = require("fs");
class TakeScreenshot {
    static takeScreenShot(screenShotName) {
        protractor_1.browser.takeScreenshot().then(function (png) {
            var stream = fs_1.createWriteStream('./Screenshots/' + screenShotName + ".png");
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    }
}
exports.TakeScreenshot = TakeScreenshot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFrZVNjcmVlbnNob3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9VdGlsaXR5L1Rha2VTY3JlZW5zaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXFDO0FBQ3JDLDJCQUF1QztBQUV2QyxNQUFhLGNBQWM7SUFFaEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFxQjtRQUU5QyxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7WUFDdEMsSUFBSSxNQUFNLEdBQUcsc0JBQWlCLENBQUMsZ0JBQWdCLEdBQUMsY0FBYyxHQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3RFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztDQUNKO0FBWEQsd0NBV0MifQ==