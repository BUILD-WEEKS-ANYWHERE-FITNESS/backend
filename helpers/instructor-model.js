const db = require('../data/dbConfig.js')

module.exports = {
    getAll,
    add,
    findById,
    findBy
}

function getAll(){
    return db('instructors')
        .select('id', 'username')
}

async function add(instructor) {
    const [id] = await db('instructors').insert(instructor);
    return findById(id);
}

function findById(id) {
    return db('instructors')
      .select('id', 'username')
      .where({ id })
      .first();
}

function findBy(filter){
    return db('instructors').where(filter).first();
}