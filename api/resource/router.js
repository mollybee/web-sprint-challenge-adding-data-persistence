// build your `/api/resources` router here
// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

//resourcesRouter

const express = require('express');
const Resources = require('./model.js')

const resourcesRouter = express.Router();



module.exports = resourcesRouter;