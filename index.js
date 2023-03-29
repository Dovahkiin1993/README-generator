// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
async function promptUser() {
    const response = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project:'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project:'
      }
    ]);
    return response;
  }
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
