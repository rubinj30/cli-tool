const templates = {
    sass: (name) => {
        return `.${name.toLowerCase()} {\n\tbackground: initial;\n}`
    },
    props: (name) => {
        const full = `I${name}Props`
        return `export interface ${full} {\nclassName?: string\n}\n}\n`
    },
    classComponent: (name) => {
        const Props = `I${name}Props`;
        return `import React from 'react';
import { ${Props} } from './${Props}';
        
export class ${name} extends React.Component {
    render() {
        return <div>Hello from ${name}</div>;
    }
}
`
    },
    test: (name) => {
        return `import * as React from 'react';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { ${name} } from './${name}';

configure({ adapter: new Adapter() });

describe('<${name} />', () => {
    it('renders without crashing', () => {
        shallow(<${name} />);
    });
});
`
    },
    markdown: (name) => {
        return `hello ${name} from markdown file. still need to add markdown template`
    }
}
module.exports = templates;
