const db = require('../data/dbConfig.js')

module.exports = {
    clientsEnrolled,
    classwithClients
}

function clientsEnrolled(){
    return db('enrolled')
        .select('classes.id', 'instructors.username as instructor', 'name', 'type', 'start_time', 'duration', 'intensity', 'location', 'max_size')
        .join('classes', 'enrolled.class_id','classes.id')
        .join('clients', 'enrolled.client_id','clients.id')
        .join('instructors', 'classes.instructor_id', 'instructors.id')
        // .count('enrolled.client_id as atendees')
        .groupBy('enrolled.class_id')
        .raw('COALESCE(COUNT(enrolled.client_id as atendees), 0)')
}

function classwithClients() {
    return db('classes')
    .select('enrolled.class_id', 'enrolled.instructors.username', 'enrolled.classes.name', 'enrolled.classes.type', 'enrolled.classes.start_time', 'enrolled.classes.duration', 'enrolled.classes.intensity', 'enrolled.classes.location', 'enrolled.classes.max_size', db.raw('COALESCE(COUNT(enrolled.client_id), 0)'))
    .join('enrolled', 'enrolled.class_id', 'classes.id')
    .join('instructors', 'classes.instructor_id', 'instructors.id')
    .join('clients', 'clients.id', 'enrolled.client_id')
    // .count('enrolled.client_id as clients_attending')
    // .raw('COALESCE(COUNT(enrolled.client_id as atendees), 0)')
    .groupBy('enrolled.class_id')
}

/*
function classwithClients() {
    return db('classes')
    .select('classes.id', 'instructors.username', 'classes.name', 'classes.type', 'classes.start_time', 'classes.duration', 'classes.intensity', 'classes.location', 'classes.max_size', db.raw('COALESCE(COUNT(enrolled.client_id), 0)'))
    .join('enrolled', 'enrolled.class_id', 'classes.id')
    .join('instructors', 'classes.instructor_id', 'instructors.id')
    .join('clients', 'clients.id', 'enrolled.client_id')
    // .count('enrolled.client_id as clients_attending')
    // .raw('COALESCE(COUNT(enrolled.client_id as atendees), 0)')
    .groupBy('classes.id')
}
*/

