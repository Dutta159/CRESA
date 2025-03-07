// require('dotenv').config();
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const mongoose = require('mongoose');
// const userRoutes = require('./routes/users');

// const PORT = process.env.PORT || 5000;

// //Middleware
// app.use(express.json());
// app.use(cors());

// //Routes
// app.use('/api/users', userRoutes);

// //MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(()=>{
//     console.log('MongoDB connected');
// }).catch(err => console.error('MongoDB connection error: ', err));  


// //Expose the server
// app.listen(PORT, ()=>{
//     console.log('Server is running on port: ', PORT);
// })


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
