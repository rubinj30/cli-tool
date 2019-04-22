#!/usr/bin/env node

const forge = require("../lib/forge.js");
const fs = require('fs');

// TODO: find out why this is different and best way
// const createStream = fs.createWriteStream('test.txt');
// createStream.end();

// TODO:
// 1)  process.argv[1] gets location of file ran (index.js) -> may need this at some point to navigate from here to another location
// 2) should an arg be passed like "generate" and "component"

// gets component name from command line argument
const componentName = forge.uppercase(process.argv[2]);

fs.writeFile(`${componentName}.jsx`, forge.createComponent(componentName), function (err) {
    if (err) throw err;
    console.log(`${componentName} created successfully.`);
});
