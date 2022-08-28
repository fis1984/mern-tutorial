const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
