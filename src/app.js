require('dotenv').config();
const express = require('express')

// app init
const app = express();

app.use(express.json());

module.exports = app