const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
require('dotenv').config();

const app = express();
const port = process.env.BACKEND_PORT;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri).then();

mongoose.connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
