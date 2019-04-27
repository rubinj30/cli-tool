#!/usr/bin/env node
const forge = require('../lib/forge')


const createDirectoryWithFiles = (componentName) => {
    const name = forge.uppercaseFirstLetter(componentName)
    forge.createDirectory(name);
    forge.createComponent(name)
    forge.createTest(name)
    forge.createSassFile(name)
}

// gets specific action and component name from arguments
const [, , action, componentName] = process.argv;

// if the action is "generate", it will generate a component file
if (action.toLowerCase() === 'generate' || action.toLowerCase() === 'g') {
    createDirectoryWithFiles(componentName);
}