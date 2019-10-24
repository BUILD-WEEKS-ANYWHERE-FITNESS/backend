const db = require('../data/dbConfig.js')
const Clients = require('./client-model.js')
const Enrolled = require('./enrolled-model') 
//clientsEnrolled

module.exports = {
    getAll,
    add,
    findById,
    findClass,
    findBy,
    getAvailable
}

function getAll(){
    return db('classes')
        .select('id', 'instructor_id', 'name', 'type', 'start_time', 'duration', 'intensity', 'location', 'max_size')
}



function getAvailable(){
    return db('classes')
        .select('classes.id', 'instructors.username as instructor', 'name', 'type', 'start_time', 'duration', 'intensity', 'location', 'max_size')
        .join('instructors', 'instructors.id', 'classes.instructor_id')
}

async function add(newClass) {
    const [id] = await db('classes').insert(newClass, 'id');
    return findById(id);
}


function findById(id) {
    return db('classes')
      .select('id', 'instructor_id', 'name', 'type', 'start_time', 'duration', 'intensity', 'location', 'max_size')
      .where({ id })
      .first();
}

//new findById 47:28
function findClass(id) {
    return getAvailable().where( {"classes.id": id} )
}

function findBy(filter){
    return db('classes').where(filter).first();
}




/* 
function getAvailable(){
    return db('classes')
        .select('classes.id', 'instructors.username as instructor', 'name', 'type', 'start_time', 'duration', 'intensity', 'location', 'max_size')
        .join('instructors', 'instructors.id', 'classes.instructor_id')
}
*/

/*
   // .join('instructors', 'instructors.id', 'classes.instructor_id')
    // .join('enrolled', 'enrolled.class_id', 'class_id')
    // .join('clients', 'clients.id', 'enrolled.client_id')
*/