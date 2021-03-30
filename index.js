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

let parser = new $RefParser();
let targetFile = "./temp/pod.json";

parser.dereference(targetFile, { parse: { json: true } }, (err, schema) => {
    if (err) {
        console.error(err);
    } else {
        console.log('dereference complete');
    }
});