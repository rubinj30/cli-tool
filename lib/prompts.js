const inquirer = require('inquirer');

const askIfFileTypeNeeded = async (fileType) => {
    const answer = await inquirer.prompt(fileType);
    return answer[`${fileType[0].name}`];
};

const markdown = [
    {
        type: 'input',
        name: 'markdown',
        message:
            'Will this component need its own markdown file? (y/n):  ',
        validate: function (input) {
            var done = this.async();
            const answer = input.toLowerCase();
            // TODO:
            // add validations
            if (answer !== 'y' && answer !== 'n') {
                // Pass the return value in the done callback
                done('You need to provide a "y" or "n"');
                return;
            }
            // Pass the return value in the done callback
            done(null, true);
        }
    }
]

module.exports = {
    askIfFileTypeNeeded,
    markdown
}