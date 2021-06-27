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

    // project_completed comes back as 0/1, but we need to cast it to false/true
    // we do that by mapping here and then returning the mapped array.
    const mappedProjects = allProjects.map(prj => {
        return {
            ...prj,
            project_completed: prj.project_completed === 1
        }
    })
  
    return mappedProjects;
}

/**
 * 
 * @param {object} project
 * @param {number} project.project_id
 * @param {string} project.project_name
 * @param {string} project.project_description
 * @param {number} project.project_completed - 0 | 1
 * @returns 
 */
const insert = async ({ project_id, project_name, project_description, project_completed }) => {
    console.warn('~~~~~ ATTEMPTING INSERT')
    const insertResult = await db('projects')
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