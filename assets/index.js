const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team managers name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the team managers id?",
      name: "id",
    },
    {
      type: "email",
      message: "What is the team managers email",
      name: "email",
    },
    {
      type: "input",
      message: "What is the team managers office number",
      name: "office",
    },
    {
      type: "list",
      message: "What type of team member would you like to add",
      name: "type",
      choices: ["Employee", "Manager", "Engineer", "Intern", "NONE"],
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log("Success!")
      : console.log("You forgot your password already?!")
  );
