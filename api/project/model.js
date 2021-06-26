//NOTES
//model functions that need created: .insert (for post), .find (for get)

//const db = require('../../data/dbConfig.js');
//const mappers = require('../../data/helpers/mappers'); --Do I need a file like this with helper functions, to deal with the booleans?

//         "project_id": 1,
//         "project_name": "to-do",
//         "project_description":null,
//         "project_completed":false
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const db = require('./../../data/dbConfig.js');

//MODEL FOR GET(/)
 const find = async () => {
     
     const allProjects = await db
       .from('projects')
       .select('project_id', 'project_name', 'project_description', 'project_completed');
  
     return allProjects;
   }


//MODEL FOR POST(/)
const insert = ({ project_id, project_name, project_description, project_completed }) => {
    
    const insertResult = db('projects')
      .insert({ project_id, project_name, project_description, project_completed });
  
    return insertResult;
  }




 module.exports = {
    find,
    insert
  };


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//NOTES 
// function insert(project) {
//   return db('actions')
//     .insert(action)
//     .then(([id]) => get(id));
// }

// const getAll = async () => {
//     // DO YOUR MAGIC
//     const allCars = await knex
//       .from('cars')
//       .select('id', 'vin', 'make', 'model', 'mileage', 'title', 'transmission');
  
//     return allCars;
//   }