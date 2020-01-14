const fs = require('fs')
export class JsonFileRead {

    public static readJson(file: string = './Testdata/TestData.json') {
        let rawData = fs.readFileSync(file);
        let data = JSON.parse(rawData)
        return data;

    }
}