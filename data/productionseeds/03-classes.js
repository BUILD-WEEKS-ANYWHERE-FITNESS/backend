
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('classes').insert([
    {instructor_id: 1, name: 'Introdcution to Yoga', start_time: '2019-11-1 08:30:00', duration: '30 mins', intensity: 'beginner', location: 'Austin, TX', max_size: '10', type: 'yoga'},
    {instructor_id: 2, name: 'Vinyasa Yoga', start_time: '2019-11-7 09:00:00', duration: '60 mins', intensity: 'intermediate', location: 'Washington, DC', max_size: '10', type: 'yoga'},
    {instructor_id: 3, name: 'Yoga Sculpt', start_time: '2019-11-14 12:30:00', duration: '90 mins', intensity: 'advanced', location: 'Orlando, FL', max_size: '10', type: 'yoga'},
    {instructor_id: 4, name: 'Introdcution to Pilates', start_time: '2019-12-1 08:30:00', duration: '30 mins', intensity: 'beginner', location: 'Long Beach, CA', max_size: '5', type: 'pilates'},
    {instructor_id: 5, name: 'Pilates Define', start_time: '2019-12-7 09:00:00', duration: '60 mins', intensity: 'intermediate', location: 'Dallas, TX', max_size: '5', type: 'pilates'},
    {instructor_id: 6, name: 'Pilates Sculpt', start_time: '2019-12-14 12:30:00', duration: '90 mins', intensity: 'advanced', location: 'New York, NY', max_size: '5', type: 'pilates'}
  ]);
};
