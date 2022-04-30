const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const events = require("../controllers/events");
const catchAsync = require("../utils/catchAsync");
router.route("/").get(catchAsync(events.index));
module.exports = router;
