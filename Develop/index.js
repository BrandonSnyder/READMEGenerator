// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Give me a brief description of your project.',
        name: 'briefDescription',
      },
      {
        type: 'input',
        message: 'What was your motivation for this project?',
        name: 'motivation',
      },
      {
        type: 'input',
        message: 'What languages did you use in your project?',
        name: 'languages',
      },
      {
        type: 'input',
        message: 'What kind of features did you have in the project?',
        name: 'features'
      },
      {
        type: 'input',
        message: 'Give me brief installation instructions',
        name: 'installInst',
      },
      {
        type: 'input',
        message: 'How can someone use this application',
        name: 'appUse',
      },
      {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['Open','GNU (General Public License)','EULA (End-User License Agreement)']
      },
      {
        type: 'input',
        message: 'List other contributors.',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'Describe any tests for this project.',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Enter in you github username',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter in your email',
        name: 'email',
      }
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.appendFile(fileName, data , (error, response) =>{
    error ? console.error(error) : console.log(response)
})}
// TODO: Create a function to initialize app
function init(arrOfQuestions) {
    inquirer.prompt(arrOfQuestions).then((response) => { 
        console.log(response)
    let pageInfo = (`
    # ${response.projectTitle}
    # Made by ${response.name}
    
    ## Table of Contents
        -Description
        -Installation
        -Usage 
        -License   
        -Contributing
        -Tests
        -Questions
    
    
    ## Description 
    Brief Description: ${response.briefDescription} 
    
    Why:-${response.motivation}
    
    How:
    Languages: ${response.languages} 
    Features: ${response.features}

    ## Screenshots
    

    ## Installation
    ${response.installInst}
    
    ## Usage
    ${response.appUse}

    ## Features
    ${response.features}
    
    ## License
    ${response.license}
    
    ## Contributors
    ${response.contributors}
    
    ## Tests
    ${response.tests}

    ## Questions
    If you have any questions on this project feel free to do a deep dive in my github or reach out via email.
    github: ${response.github}
    email:${response.email}
    `)

        writeToFile("README.md",pageInfo)

})};

// Function call to initialize app
init(questions);
