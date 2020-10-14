const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user

const questions = [{
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
            "GNU General Public License v3.0",
            "BSD 3",
            "None"
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

];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile("README.md", generateMarkdown({
                ...response
            }));
        })
}


// function call to initialize program
init();