// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the project",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How can this project be used?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who contributed?",
  },
  {
    type: "input",
    name: "test",
    message: "How do you test this project?",
  },
  {
    type: "input",
    name: "license",
    message: "Please enter a license applicable to this project.",
  },
  {
    type: "input",
    name: "contact",
    message: "Provide your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = generateMarkdown(data);
  return fs.writeFileSync(path.join(process.cwd(), fileName), content, { flag: 'w' });
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Create README.md File...");
    writeToFile("README.md", responses);
  });
}

// Function call to initialize app
init();
