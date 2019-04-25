
// TODO: should this only be called if the first argument is something like "generate" (and even third world is "component")
const fs = require('fs');
const templates = require('./templates');

const chokidar = require("chokidar");

const createDirectory = (name) => {
    fs.mkdirSync(name)
}

const writeFile = (name, type) => {
    let fileType = '';
    if (type === 'component') {
        fileType = '.tsx'
    }
    if (type === 'test') {
        fileType = '.test.tsx';
    }
    if (type === 'sass') {
        fileType = '.scss'
    }
    const path = `./${name}/${name}${fileType}`
    fs.writeFile(path, templates[`${type}`](name), function (err) {
        console.log(`${path} created successfully.`);
    });
}


const createComponent = (name) => {
    writeFile(name, 'component')
}

const createTest = (name) => {
    writeFile(name, 'test')
}

createSassFile = (name) => {
    writeFile(name, 'sass')
}

// uppercases first letter
const uppercase = (string) => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = {
    uppercase,
    createDirectory,
    createTest,
    createComponent,
    createSassFile
}
