
//  - [ ] `[POST] /api/projects`
//  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

// - [ ] `[GET] /api/projects`
//  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// response: * for both GET and POST

// [
//     {
//         "project_id": 1,
//         "project_name": "to-do",
//         "project_description":null,
//         "project_completed":false
//     }

// ]
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const express = require('express');
const Projects = require('./model.js')
const projectsRouter = express.Router();

// [GET] /api/projects
projectsRouter.get('/', (req, res) => {
    // Could use `.get()`
    Projects.find()
        .then((projectsArray) => {
            if(!projectsArray){
                res.status(404).json([])
            } else {
                res.status(200).json(projectsArray)
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({message: 'Error recieving all projects array'});
        });
})



// [POST] /api/projects
projectsRouter.post('/', (req, res) => {
    console.warn('~~ PROJECTS ROUTER: ')

    // We have t o check `project_completed` differently because `0` is falsey, but is a valid value
    const { project_name } = req.body;
    const isMissingRequiredFields = !project_name 

    if(isMissingRequiredFields) {
        res.status(400).json({message: 'project_name is required'});
    } else {
        Projects.insert(req.body)
            .then(project => {
                res.status(200).json(project);
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({error, message: 'Error, Could not create new project'})
            });
    }
});


module.exports = projectsRouter;


//model functions that need created: .insert (for post), .find (for get)