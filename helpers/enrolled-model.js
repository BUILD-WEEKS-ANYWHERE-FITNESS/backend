const db = require('../data/dbConfig.js')

module.exports = {
    clientsEnrolled
}

function clientsEnrolled(){
    return db('enrolled')
        .select('classes.id', 'instructors.username as instructor', 'name', 'type', 'start_time', 'duration', 'intensity', 'location', 'max_size')
        .join('classes', 'enrolled.class_id','classes.id')
        .join('clients', 'enrolled.client_id','clients.id')
        .join('instructors', 'classes.instructor_id', 'instructors.id')
        .count('client_id as atendees')
        .groupBy('class_id')
}

