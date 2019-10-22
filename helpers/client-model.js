const db = require('../data/dbConfig.js')

module.exports = {
    getAll,
    add,
    findById,
    findBy
}

function getAll(){
    return db('clients')
        .select('id', 'username')
}

async function add(client) {
    const [id] = await db('clients').insert(client, 'id');
    return findById(id);
}

function findById(id) {
    return db('clients')
      .select('id', 'username')
      .where({ id })
      .first();
}

function findBy(filter){
    return db('clients').where(filter).first();
}