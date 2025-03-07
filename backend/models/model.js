const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const TeamSchema= new mongoose.Schema({
    name: { type: String, required: true},
    description: {type: String, required: true},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Event', EventSchema);
module.exports = mongoose.model('Team', TeamSchema);