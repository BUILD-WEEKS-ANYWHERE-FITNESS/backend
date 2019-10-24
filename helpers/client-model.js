const db = require('../data/dbConfig.js')

module.exports = {
    getAll,
    add,
    findByClientId,
    findBy
}

function getAll(){
    return db('clients')
        .select('id', 'username')
}

function getClasses(){
    return db('classes')
        .select('classes.id', 'instructors.username as instructor', 'name', 'type', 'start_time', 'duration', 'intensity', 'location', 'max_size')
        .join('instructors', 'instructors.id', 'classes.instructor_id')
}

async function add(client) {
    const [id] = await db('clients').insert(client, 'id');
    return findByClientId(id);
}

function findByClientId(id) {
    return db('clients').where({ id })
}

function findBy(filter){
    return db('clients').where(filter).first();
}