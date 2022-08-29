const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(201).json({ message: "Created goal" });
});

// @desc   Set goals
// @route  POST  /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        return res.status(404).json({ message: "Please add a text field" });
    }
    res.status(201).json({ message: "Created goal" });
});

// @desc   Update goals
// @route  PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc  Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
