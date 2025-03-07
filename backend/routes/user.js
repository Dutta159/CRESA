const express = require('express'); 
const User = require('../models/model');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
})

router.get('/:id', async(req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if(!user) return res.status(404).jons({message: 'User not found in the database'});
    res.json(user);
})

router.post('/register', async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) return res.status(400).json({message: 'Name, email and password not provided'});

    let user = await User.findOne({email});
    if(user) return res.status(400).json({message: 'User already exists'});

    //Has the password
    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({name, email, password: hashedPassword});
    await user.save();

    res.status(201).json({message: 'User registered/created successfully'});
})

router.put('/:id', async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).select('-password');
    if(!updateUser) return res.status(404).send('Usernot found');
    res.json(updateUser);
})

router.delete('/:id', async (req, res) => {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if(!deleteUser) return res.status(404).send('User not found');

    res.json({message: 'User deleted successfully'});
})

module.exports = router;