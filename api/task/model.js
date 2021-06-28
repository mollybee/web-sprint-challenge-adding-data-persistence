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

// MODEL FOR GET(/)
 const find = async () => {
     const allTasks = await db
       .from('tasks')
       .select(
           'tasks.task_id', 
           'tasks.task_description', 
           'tasks.task_notes', 
           'tasks.task_completed', 
           'projects.project_name', 
           'projects.project_description')
       .leftJoin('projects', 'tasks.project_id', 'projects.project_id');

    // task_completed comes back as 0/1, but we need to cast it to false/true
    // we do that by mapping here and then returning the mapped array.
    const mappedTasks = allTasks.map(tsk => {
        return {
            ...tsk,
            task_completed: tsk.task_completed === 1
        }
    })
  
     return mappedTasks;
}


// MODEL FOR POST(/)
const insert = async (task) => {
    const insertResult = await db('tasks').insert(task);
    const mappedResult = {
        task_id: insertResult,
        task_description: task.task_description,
        task_notes: task.task_notes || null,
        task_completed: task.task_completed === 1,
    }
  
    return mappedResult;
}

 module.exports = {
    find,
    insert
  };