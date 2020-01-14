"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
class JsonFileRead {
    static readJson(file = './Testdata/TestData.json') {
        let rawData = fs.readFileSync(file);
        let data = JSON.parse(rawData);
        return data;
    }
}
exports.JsonFileRead = JsonFileRead;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvbkZpbGVPcGVyYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0eS9Kc29uRmlsZU9wZXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDeEIsTUFBYSxZQUFZO0lBRWQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFlLDBCQUEwQjtRQUM1RCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztDQUNKO0FBUkQsb0NBUUMifQ==