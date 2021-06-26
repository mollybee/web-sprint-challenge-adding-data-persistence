//NOTES

// response: * for both GET and POST

// [
//     {
//         "resource_id": 1,
//         "resource_name": "foo",
//         "resource_description":null,
//         
//     }

// ]
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const db = require('./../../data/dbConfig.js');

//MODEL FOR GET(/)
 const find = async () => {
     
     const allResources = await db
       .from('resources')
       .select('resource_id', 'resource_name', 'resource_description');
  
     return allResources;
   }


//MODEL FOR POST(/)
const insert = ({ resource_id, resource_name, resource_description}) => {
    
    const insertResult = db('resources')
      .insert({ resource_id, resource_name, resource_description });
  
    return insertResult;
  }




 module.exports = {
    find,
    insert
  };