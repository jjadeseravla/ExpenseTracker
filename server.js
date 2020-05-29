const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env'})

const app = express();

app.get('/', (req, res) => res.send('jade'));

const PORT = process.env.PORT || 5000; //process.env is how we access any variables

app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold));
