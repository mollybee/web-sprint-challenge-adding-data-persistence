// build your server here and require it from index.js

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
//PLUG IN YOUR ROUTERS HERE[x] -- yOU WILL HAVE 1 FOR EACH, PROJECT, RESOURCE, AND TASK !!!!Make sure to update your router paths
const projectsRouter = require('./project/router.js');
const resourcesRouter = require('./resource/router.js');
const tasksRouter = require('./task/router.js');
const server = express();


server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

//PLUG IN YOUR paths HERE [x] -- yOU WILL HAVE 1 FOR EACH, PROJECT, RESOURCE, AND TASK !!!!Make sure to update your paths
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);


server.get('/', (req, res) => {
    res.send(`<h2>Sprint Challenge!</h2>`);
  });


module.exports = server;