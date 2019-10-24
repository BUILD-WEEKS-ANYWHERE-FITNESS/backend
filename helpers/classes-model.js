const db = require('../data/dbConfig.js')

module.exports = {
    getAll,
    add,
    findById,
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