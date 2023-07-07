import inquirer from "inquirer";
import { writeFile } from "fs";
import generateMarkdown from "./utils/generateMarkdown.mjs";

const testData = {
  clientCompanyName: "Bank Robbers Inc.",
  sowNumber: "001",
  overviewOfWork: "robbing the big bank undetected",
  purpose: "to obtain the rubies",
  objectives: "to obtain the satchel of rubies undetected",
  tasks: "Break into the bank, Collect the rubies, Make tons of money",
  tasksNotIncluded:
    "Provide a getaway vehicle, Prevent the alarms from going off",
  deliverables: "Satchel of rubies",
  clientBudget: "$500",
  requiredResources: "Getaway Vehicle, Alarm Jammer",
  clientSigneeName: "Theodore Bigbux",
};

const questions = [
  {
    type: "input",
    message: "What is the client company name?",
    name: "clientCompanyName",
  },
  {
    type: "input",
    message: "What is the SOW number? (Ex. #001)",
    name: "sowNumber",
  },
  {
    type: "input",
    message: "What is the overview of work?",
    name: "overviewOfWork",
  },
  {
    type: "input",
    message: "What is the purpose of the project?",
    name: "purpose",
  },
  {
    type: "input",
    message: "What are the objectives of the project?",
    name: "objectives",
  },
  {
    type: "input",
    message:
      "What are the tasks that you will complete? (Sperated by a comma and one empty space ', ')",
    name: "tasks",
  },
  {
    type: "input",
    message:
      "What are the tasks that you will not complete? (Sperated by a comma and one empty space ', ')",
    name: "tasksNotIncluded",
  },
  {
    type: "input",
    message:
      "What are the deliverables of the project? (Sperated by a comma and one empty space ', ')",
    name: "deliverables",
  },
  {
    type: "input",
    message: "What is the client's total budget?",
    name: "clientBudget",
  },
  {
    type: "input",
    message:
      "What are the resources required from the client? (Sperated by a comma and one empty space ', ')",
    name: "requiredResources",
  },
  {
    type: "input",
    message: "What is the client's signee name'?",
    name: "clientSigneeName",
  },
];

const writeToFile = (fileName, data) => {
  writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
};

const init = async () => {
  const data = await inquirer.prompt(questions);
  // const data = testData;

  console.log(data);
  writeToFile(
    `output/${data.clientCompanyName}_SOW${data.sowNumber}.md`,
    generateMarkdown(data)
  );
};

init();
