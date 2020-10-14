// function to generate markdown for README
function generateMarkdown(data) {
  let badge = ""

  if (data.license === "MIT License") {
    badge = "https://img.shields.io/badge/license-MIT-green"
  } else if (data.license === "Apache License 2.0") {
    badge = "https://img.shields.io/badge/license-Apache%20License%202.0-blue"
  } else if (data.license === "GNU General Public License v3.0") {
    badge = "https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0"
  } else if (data.license === "BSD 3") {
    badge = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause"
  } else {
    badge = ""
  }
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

Email: ${data.email}

Github.com/${data.github}
`;
}

module.exports = generateMarkdown;