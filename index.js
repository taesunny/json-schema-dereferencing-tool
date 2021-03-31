#!/usr/bin/env node

const $RefParser = require("@apidevtools/json-schema-ref-parser");
const fs = require("fs");

function makeFileFromObject(obj, filename) {
    var json = JSON.stringify(obj);

    fs.writeFile(filename, json, (err) => {
        if (err) {
            throw err;
        }

        console.log('complete');
    });
}

var targetFileText = fs.readFileSync("./data/target-files.txt").toString('utf-8');
var targetFiles = targetFileText.split("\n")

let resultPath = "./output/";
try {
    fs.mkdirSync(resultPath, { recursive: true })
} catch (e) {
    console.log("Failed to create output dir, e: ", e)
}


targetFiles.forEach((targetFile) => {

    if (targetFile === "") {
        return;
    }

    console.log("Try to dereference file - " + targetFile);
    let parser = new $RefParser();
    parser.dereference("./data/" + targetFile, { parse: { json: true } }, (err, schema) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File( " + targetFile + " ) dereferencing success")
            fs.writeFileSync(resultPath + targetFile, JSON.stringify(schema, null, 2), (err) => {
                if (err) {
                    console.log("create result file failed.");
                    throw err;
                }

                console.log("Dereferenced file " + targetFile + " created.");
            })
        }
    });
}
)