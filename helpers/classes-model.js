const db = require('../data/dbConfig.js')

module.exports = {
    getAll,
    add,
    findById,
    findBy
}

function getAll(){
    return db('classes')
        .select('id', 'instructor_id', 'name', 'type', 'start_time', 'duration', 'intensity', 'location', 'max_size')
}

async function add(newClass) {
    const [id] = await db('classes').insert(newClass);
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