// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

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
        message: 'Give me brief installation instructions',
        name: 'installInst',
      },
      {
        type: 'input',
        message: 'What does the user need to run this program',
        name: 'appUse',
      },
      {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['MIT License','GNU GPLv3','Apache License 2.0']
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
function init(arrayOfQuestions) {
    inquirer.prompt(arrayOfQuestions)
    .then((response) => { 
      const markdown = generateMarkdown(response)
      writeToFile("README.md", markdown)
    })};

// Function call to initialize app
init(questions);
