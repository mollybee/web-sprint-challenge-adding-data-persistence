# Adding Data Persistence Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Data Persistence**. During this sprint, you studied **RDBMS, including SQL, multi-table queries, and data modeling**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a database based on given specifications**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers a few days after the challenge submission. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [x ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [x ] Open the assignment in Canvas and click on the "Set up git" option.
- [x ] Follow instructions to set up Codegrade's Webhook and Deploy Key.
- [x ] Make a commit and push it to Github.
- [x ] Check to see that Codegrade has accepted your git submission.

For a step-by-step on setting up Codegrade see [this guide.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

## Project Instructions

### Introduction

In this project you will be given a set of requirements and must design a database to satisfy them. As a part of this process you'll also build an API with endpoints to access the data.

### Files to Complete

1. [x]`index.js`
2. [x]`api/server.js`
3. `model.js` inside `api/project`, `api/resource` and `api/task`
4. `router.js` inside `api/project`, `api/resource` and `api/task`
5. migration file(s) * GUI representation of my tables
6. seed file(s) **optional**

### Required Dependencies[x]

The project needs some additional NPM dependencies in order to work.

### Required Scripts[x]

Add `"start"`. `"server"`, `"migrate"` and `"rollback"` scripts to the `package.json` file.
 ## this makes my terminal commands: npm start, npm server, npm migrate, npm rollback


### Required Tables[x]

Build the migration(s) in Knex inside the `data/migrations` folder using appropriate data types and constraints. **You must use the table names and the column names described below.** To give a primary key a name different than `id`, do `table.increments("project_id")` instead of `table.increments()`.

- [ x] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

  - [ x] `project_id` - primary key
  - [ x] `project_name` - required
  - [ x] `project_description` - optional
  - [ x] `project_completed` - the database defaults it to `false` (integer 0) if not provided

- [ x] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

  - [ x] `resource_id` - primary key
  - [ x] `resource_name` - required and unique
  - [ x] `resource_description` - optional

- [ x] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

  - [ x] `task_id` - primary key
  - [ x] `task_description` - required
  - [ x] `task_notes` - optional
  - [ x] `task_completed` - the database defaults it to `false` (integer 0) if not provided
  - [ x] `project_id` - required and points to an actual `project_id` in the `projects` table

- [ x] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.

### Required Endpoints

Build an API inside the `api` folder with endpoints for:

- [ ] `[POST] /api/resources`
  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [ ] `[GET] /api/resources`
  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

- [ ] `[POST] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [ ] `[GET] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

- [ ] `[POST] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [ ] `[GET] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Each task must include `project_name` and `project_description`
  - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

**Notes:**[x]

- Run tests locally by executing `npm run test`. Tests will be very broken until you flesh out the project sufficiently.
- You are welcome to create additional files for middlewares etc, but **do not move or rename existing files** or folders.
- Do not make changes to your `package.json` except to add **additional** dependencies and scripts. Do not update existing packages.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format[x]

- [ x] Submit via Codegrade by committing and pushing any new changes.
- [ x] Create a pull request to merge `<firstName-lastName>` branch into `main`.
- [x ] Please don't merge your own pull request and make sure **you are on your own repo**.
- [ x] Check Codegrade for automated feedback.
- [ x] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ x] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions [x]

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain the difference between Relational Databases and SQL.
    ## SQL databases are synonmous with 'relational databases', as they require a table-based structure, where the tables can communication their information to one another. NoSQL databases are key-value pair database's where the data structure does not allow for any sort of cross communication.
2. Why do tables need a Primary Key?
  ## This is because primary keys are unique identifiers for columns, so no two values can be the same, allowing for row-level accessibility.
3. What is the name given to a table column that references the Primary Key on another table?
  ## Foreign Key
4. What do we need in order to have a _many to many_ relationship between two tables?
  ## A many-to-many relationship is when multiple records in a table are referencing multiple records in another table. For example, 'animals' could eat various 'foods', and 'foods' could be eaten by a variety of 'animals'.
    
