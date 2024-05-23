const express = require("express");
const router = express.Router();
// const Middleware = require("../middlewares/userAccess");
// const loginPageAuth = require("../middlewares/loginPageAuth");

const PatientController = require("../Controllers/patient");
const controller = new PatientController();

router.post("/patient", controller.HandleCreateRequest);

// router.get("/patient", Usuario.getUsuario);

// router.get("/patient/:id", Usuario.getUsuarioById);

// router.put("/patient/:id", Usuario.updateUsuario);

// router.delete("/patient/:id", Usuario.deleteUsuario);

router.post("/patient/authenticate", controller.HandleAuthenticateRequest);

module.exports = router;