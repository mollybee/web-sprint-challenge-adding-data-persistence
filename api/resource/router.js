// build your `/api/resources` router here
// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`


// response: * for both GET and POST

// [
//     {
//         "resource_id": 1,
//         "resource_name": "foo",
//         "resource_description":null,
//         
//     }

// ]
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const express = require('express');
const Resources = require('./model.js')
const resourcesRouter = express.Router();

// [GET] /api/resources
resourcesRouter.get('/', (req, res) => {
    Resources.find()      
        .then((resourcesArray) => {
            if(!resourcesArray){
                res.status(404).json([])
            } else {
                res.status(200).json(resourcesArray)
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({message: 'Error recieving all resources array'});
        });
})



// [POST] /api/resources
resourcesRouter.post('/', (req, res) => {
    const { resource_name } = req.body;
    const isMissingRequiredFields = !resource_name;

    if(isMissingRequiredFields) {
        res.status(400).json({message: 'resource_name is a required field.'});
    } else {
        Resources.insert(req.body)
            .then(() => {
                res.status(200).json({
                    resource_name,
                    resource_description: req.body.resource_description,
                });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({message: 'Error, Could not create new resource'})
            });
    }
});



module.exports = resourcesRouter;