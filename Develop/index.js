const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Enter a project description",
        },
        {
            type: "input",
            name: "installation",
            message: "Installation Instructions:",
        },
        {
            type: "input",
            name: "usage",
            message: "Usage Information:",
        },
        {
            type: "input",
            name: "contribution",
            message: "Contribution Guidelines:",
        },
        {
            type: "input",
            name: "test",
            message: "Test Instructions:",
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for your application",
            choices: [
                "MIT License",
                "Apache License 2.0",
                "Boost Software License 2.0",
                "Mozilla Public License 2.0"
            ]
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address",
        },

    ]);
};

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
async function init() {
    try {
        const answers = await promptUser();

        const md = writeToFile(answers);

        await writeFileAsync("README.md", md);

        console.log("Successfully wrote to index.html");
    } catch (error) {
        console.log(error)
    }
};

// function call to initialize program
init();