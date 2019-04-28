#!/usr/bin/env node
const forge = require('../lib/forge')
const prompts = require('../lib/prompts')

// This creates all the base files that don't require input to be created
const createDirectoryWithBaseFiles = (name) => {
    forge.createDirectory(name);
    forge.createFile(name, 'classComponent')
    forge.createFile(name, 'test')
    forge.createFile(name, 'sass')
}

// gets specific action and component name from arguments
const [, , action, componentName] = process.argv;

const generate = async () => {
    // if the action is "generate", it will generate a component file
    if (action.toLowerCase() === 'generate' || action.toLowerCase() === 'g') {
        const mdFile = await prompts.askIfFileTypeNeeded(prompts.markdown)
        createDirectoryWithBaseFiles(componentName);
        if (mdFile === 'y') {
            console.log('creating a markdown file')
            forge.createFile(componentName, 'markdown');
        }
    }
}

generate();