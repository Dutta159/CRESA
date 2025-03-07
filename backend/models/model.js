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
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    event_head: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    event_type: {type: String, required: true},
});

const TeamSchema= new mongoose.Schema({
    name: { type: String, required: true},
    position: {type: String, required: true},
    academic_year: {type: Number, required: true},
    description: {type: String, required: true},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

const User = mongoose.model('User', UserSchema);
const Event = mongoose.model('Event', EventSchema);
const Team = mongoose.model('Team', TeamSchema);

module.exports = { User, Event, Team };