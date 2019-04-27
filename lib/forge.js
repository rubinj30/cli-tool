
const fs = require('fs');
const templates = require('./templates');

const createDirectory = (name) => {
    fs.mkdirSync(name)
}

const determineFileExtension = (type) => {
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
    return fileType;
}

const createFile = (name, type) => {
    const fileExtension = determineFileExtension(type);
    const path = `./${name}/${name}${fileExtension}`
    fs.writeFileSync(path, templates[`${type}`](name), function (err) {
        console.log(`${path} created successfully.`);
    });
}

const createComponent = (name) => {
    createFile(name, 'component')
}

const createTest = (name) => {
    createFile(name, 'test')
}

createSassFile = (name) => {
    createFile(name, 'sass')
}

const uppercaseFirstLetter = (string) => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

module.exports = {
    uppercaseFirstLetter,
    createDirectory,
    createTest,
    createComponent,
    createSassFile
}
