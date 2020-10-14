// function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}
![License badge](${badge})

## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)

## Installation Instructions
${data.installation}

## Usage
${data.usage}

## Contribution Guidelines
${data.contribution}

## Testing Instructions
${data.test}

## Questions
How to contact me:
${data.email}
Github.com/${data.github}
`;
}

module.exports = generateMarkdown;