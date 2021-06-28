// NOTES
// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const express = require('express');
const Tasks = require('./model.js')

const tasksRouter = express.Router();

// [GET] /api/tasks
tasksRouter.get('/', (req, res) => {
    Tasks.find()      //or get()
        .then((tasksArray) => {
            if(!tasksArray){
                res.status(404).json([])
            } else {
                res.status(200).json(tasksArray)
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({message: 'Error recieving all tasks array'});
        });
})


// [POST] /api/tasks
tasksRouter.post('/', (req, res) => {
    const { task_description, project_id } = req.body;
    const isMissingRequiredFields = !task_description || project_id === undefined;

    if(isMissingRequiredFields) {
        res.status(400).json({ message: 'task_description and project_id are required fields' })
    } else {
        Tasks.insert(req.body)
            .then(task => res.status(200).json(task))
            .catch(error => {
                console.log(error);
                res.status(500).json({ error, message: 'Error, Could not create new task' })
            })
    }
});


module.exports = tasksRouter;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//NOTES -- output for the GET only
// `{
//     "task_id":1,
//     "task_description":"baz",
//     "task_notes":null,
//     "task_completed":false,
//     "project_name":1,
//     "project_description": null
// }`