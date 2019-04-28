const inquirer = require('inquirer');

const getAdditionalFiles = async () => {
    const answer = await inquirer.prompt(markdown);
    return answer['markdown'];
};

const markdown = [
    {
        type: 'input',
        name: 'markdown',
        message:
            'Will this component need its own markdown file? (y/n)\n\n            ',
        validate: function (input) {
            var done = this.async();
            // TODO:
            // add validations
            if (input !== 'yes' && input !== 'no') {
                // Pass the return value in the done callback
                done('You need to provide a "yes" or "no"');
                return;
            }
            // Pass the return value in the done callback
            done(null, true);
        }
    }
]

module.exports = {
    getAdditionalFiles
}