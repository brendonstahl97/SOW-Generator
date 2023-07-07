const date = new Date();
const currentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

const generateMarkdown = (data) => {
  let tasks = "";

  data.tasksNotIncluded.split(", ").forEach((task) => {
    tasks += `\n   * ${task.trim()}`;
  });

  let tasksNotIncluded = "";

  data.tasksNotIncluded.split(", ").forEach((task) => {
    tasksNotIncluded += `\n   * ${task.trim()}`;
  });

  let deliverables = "";

  data.deliverables.split(", ").forEach((deliverable) => {
    deliverables += `\n   * ${deliverable.trim()}`;
  });

  let resourcesRequired = "";

  data.requiredResources.split(", ").forEach((resource) => {
    resourcesRequired += `\n   * ${resource.trim()}`;
  });

  return `
  # Statement of Work
  ##### By Brendon Stahl
  ##### For ${data.clientCompanyName}
  ##### ${currentDate}
  ##### SOW ${"#" + data.sowNumber}
  
  ***

  ### Introduction
  Brendon Stahl will perform ${data.overviewOfWork} for ${
    data.clientCompanyName
  }.

  ### Purpose and Objectives
  The purpose of this project is ${
    data.purpose
  }. The project objectives are ${data.objectives}.

  ### Tasks
  Brendon Stahl will complete the following tasks as part of this project: 
  ${tasks}

  The following tasks are not included in this project's scope and will not be performed by Brendon Stahl:
  ${tasksNotIncluded}

  ### Deliverables
  Brendon Stahl will provide the following deliverables as part of this project:
  ${deliverables}

  ### Schedule
  This project will follow the below estimated schedule:
  | Task/Project Phase | Est. Start Date | Est. End Date | Est. Hours Required |
  |--------------------|-----------------|---------------|---------------------|
  |                    |                 |               |                     |
  |                    |                 |               |                     |
  |                    |                 |               |                     |


  ### Location
  All work related to this project will occur remotely.

  ### Budget, pricing, and payment schedule
  ${data.clientCompanyName} has a total budget of ${
    data.clientBudget
  } for this project, not to be exceeded.
  Brendon Stahl will charge the following rates per deliverable:
  | Deliverable | Price |
  |-------------|-------|
  |             |       |
  |             |       |
  |             |       |


  ### Resources
  ${
    data.clientCompanyName
  } will supply the following resources to enable Brendon Stahl to complete this project:
  ${resourcesRequired}

  ### Special Items and Conditions

  ### Signatures
  Signed and agreed to by:

  Brendon Stahl

  Signature _________________________
  Date ______________________________


  ${data.clientCompanyName}
  ${data.clientSigneeName}

  Signature _________________________
  Date ______________________________
  `;
};

export default generateMarkdown;
