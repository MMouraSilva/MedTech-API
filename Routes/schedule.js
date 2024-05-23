const express = require("express");
const router = express.Router();

const ScheduleController = require("../Controllers/schedule");
const controller = new ScheduleController();

router.post("/schedule", controller.HandleCreateRequest);

module.exports = router;