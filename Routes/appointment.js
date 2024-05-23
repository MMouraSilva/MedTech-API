const express = require("express");
const router = express.Router();

const AppointmentController = require("../Controllers/appointment");
const controller = new AppointmentController();

router.post("/appointment", controller.HandleCreateRequest);

module.exports = router;