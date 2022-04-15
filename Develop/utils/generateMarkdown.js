// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ( license === 'GNU GPLv3' ){
    return licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  }else if ( license === 'Apache License 2.0' ){
    return licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }else if ( license === 'MIT License' ){
    return licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ( license === 'GNU GPLv3' ){
    return licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
  }else if ( license === 'Apache License 2.0' ){
    return licenseBadge = `(https://opensource.org/licenses/Apache-2.0)`
  }else if ( license === 'MIT License' ){
    return licenseBadge =`(https://opensource.org/licenses/MIT)`
  }else{
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ( license === 'GNU GPLv3' ){
    return licenseSection = 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.'
  }else if ( license === 'Apache License 2.0' ){
    return licenseSection = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
  }else if ( license === 'MIT License' ){
    return licenseSection = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
  }else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.projectTitle}
    # Made by ${data.name}
    # License ${renderLicenseBadge(data.license)}

    ##Table of Contents
        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)
    
    
    ## Description 
    Brief Description: ${data.briefDescription} 

    ##Screenshots
    

    ## Installation
    ${data.installInst}
    
    ## Usage
    ${data.appUse}
    
    ## License
    ${data.license}:
    ${renderLicenseLink(data.license)}
    ${renderLicenseSection(data.license)}
  
    
    ## Contributors
    ${data.contributors}
    
    ## Tests
    ${data.tests}

    ## Questions
    If you have any questions on this project feel free to do a deep dive in my github or reach out via email.
    github: [${data.github}](https://github.com/${data.github})
    email: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
