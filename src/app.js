require('dotenv').config();
const express = require('express');

//*Archivos de rutas
const userRouter = require("./users/users.router").router;
const authRouter = require("./auth/auth.router").router;

// app init
const app = express();

app.use(express.json());

// endpoints
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

module.exports = app