const express = require("express");
const dotenv = require("dotenv").config();
const goalRoutes = require("../backend/routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 3000;
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/api/goals", goalRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
