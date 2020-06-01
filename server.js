const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json()); //allows .body to be used in files in controller folder

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions); //even if just say '/', it will go to this route

const PORT = process.env.PORT || 5000; //process.env is how we access any variables

app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold));
