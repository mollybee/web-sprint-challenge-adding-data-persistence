//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//NOTES -- output for the POST only
// `{
//     "task_id":1,
//     "task_description":"baz",
//     "task_notes":null,
//     "task_completed":false,
//     "project_id:1
// }`

//NOTES -- output for the GET only
// `{
//     "task_id":1,
//     "task_description":"baz",
//     "task_notes":null,
//     "task_completed":false,
//     "project_name":1,
//     "project_description": null
// }`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const db = require('./../../data/dbConfig.js');

//MODEL FOR GET(/)
 const find = async () => {
     
     const allTasks = await db
       .from('tasks')
       .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description');
  
     return allTasks;
   }


//MODEL FOR POST(/)
const insert = ({ task_id, task_description, task_notes, task_completed, project_id }) => {
    
    const insertResult = db('tasks')
      .insert({ task_id, task_description, task_notes, task_completed, project_id});
  
    return insertResult;
  }




 module.exports = {
    find,
    insert
  };