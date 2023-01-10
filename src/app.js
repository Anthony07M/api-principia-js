const express = require('express');
const { routes } = require('./routes/index.js');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
);
app.use(routes);

module.exports = { app };
