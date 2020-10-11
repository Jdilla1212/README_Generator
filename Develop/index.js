// array of questions for user
const questions = [
    {
        type: "input"
        name: "Title"
        message: "What is the title of your project?"
    },
    {
        type: "input"
        name: "Description"
        message: "Enter a project description"
    },
    {
        type: "input"
        name: "Installation"
        message: "Installation Instructions:"
    },
    {
        type: "input"
        name: "Usage"
        message: "Usage Information:"
    },
    {
        type: "input"
        name: "Contribution"
        message: "Contribution Guidelines:"
    },
    {
        type: "input"
        name: "Test"
        message: "Test Instructions:"
    },
    {
        type: "list"
        name: "License"
        message: "Choose a license for your application"
        choices: [
            "MIT License",
            "Apache License 2.0",
            "Boost Software License 2.0",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: "input"
        name: "Github"
        message: "Enter your GitHub username"
    },
    {
        type: "input"
        name: "email"
        message: "Enter your email address"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
