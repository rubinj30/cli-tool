
const fs = require('fs');
const templates = require('./templates');

const createDirectory = (name) => {
    fs.mkdirSync(name)
}

const createFile = (name, type) => {
    try {
        const uppName = uppercaseFirstLetter(name)
        const fileExtension = determineFileExtension(type);
        const isPropsOrState = type === 'state' || type === 'props' ? 'I' : '';
        const path = `./${uppName}/${isPropsOrState}${uppName}${fileExtension}`
        fs.writeFileSync(path, templates[`${type}`](uppName), function (err) {
            console.log(`${path} created successfully.`);
        });
    } catch (err) {
        console.log(err)
    }
}

const determineFileExtension = (type) => {
    let fileType = '';
    if (type === 'classComponent') {
        fileType = '.tsx'
    }
    if (type === 'test') {
        fileType = '.test.tsx';
    }
    if (type === 'sass') {
        fileType = '.scss'
    }
    if (type === 'css') {
        fileType = '.css'
    }
    if (type === 'markdown') {
        fileType = '.md'
    }
    if (type === 'props') {
        fileType = 'Props.ts'
    }
    if (type === 'state') {
        fileType = 'State.ts'
    }
    return fileType;
}

const uppercaseFirstLetter = (string) => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

module.exports = {
    uppercaseFirstLetter,
    createDirectory,
    createFile,
}
