const express = require("express");
const router = express.Router();
// const Middleware = require("../middlewares/userAccess");
// const loginPageAuth = require("../middlewares/loginPageAuth");

const DoctorController = require("../Controllers/doctor");
const controller = new DoctorController();

router.post("/doctor", controller.HandleCreateRequest);

// router.get("/patient", Usuario.getUsuario);

// router.get("/patient/:id", Usuario.getUsuarioById);

// router.put("/patient/:id", Usuario.updateUsuario);

// router.delete("/patient/:id", Usuario.deleteUsuario);

router.post("/doctor/authenticate", controller.HandleAuthenticateRequest);

module.exports = router;