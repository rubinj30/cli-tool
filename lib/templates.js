const templates = {
    component: function (name) {
        return `import React from 'react'\n\nexport class ${name} extends React.Component {\n\trender() {\n\t\treturn <div>Hello from ${name}</div>;\n\t}\n}\n`
    },
    test: (name) => {
        return `import * as React from 'react';\nimport { shallow } from 'enzyme';\nimport * as Adapter from 'enzyme-adapter-react-16';\nimport { ${name} } from './${name}'\n`
    },
    sass: (name) => {
        return `.${name.toLowerCase()} {\n\tbackground: initial\n}`
    }
}
module.exports = templates;
