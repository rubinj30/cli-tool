
// TODO: should this only be called if the first argument is something like "generate" (and even third world is "component")
const createComponent = (name) => {
    return (
        `import React from 'react'\n\nexport class ${name} extends React.Component {\n\trender() {\n\t\treturn <div>Hello from accordion</div>;\n\t}\n}\n`
    )
}

// uppercases first letter
const uppercase = (string) => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = {
    createComponent,
    uppercase
}