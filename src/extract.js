const fs = require('fs');

function readJsonFile(fileName) {
    const data = fs.readFileSync(fileName);
    const json = JSON.parse(data.toString());
    const dict = {};
    for (const key in json) {
        dict[key] = json[key];
    }
    return dict;
}

module.exports = readJsonFile;