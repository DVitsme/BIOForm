const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect To MongoDB Atlas
connectDB();
const PORT = process.env.PORT || 5000;

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/post'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
