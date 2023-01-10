const { routes } = require('./routes/index.js');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
);
app.use(express.json());
app.use(routes);

module.exports = { app };
