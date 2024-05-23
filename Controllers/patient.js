require('dotenv').config();
const PatientModel = require("../Models/Patient");

class PatientController {
    #patientModel;

    constructor() {
        this.#patientModel = new PatientModel();
    }

    HandleCreateRequest = async (req, res) => {
        const { hasSucceed } = await this.#patientModel.CreatePatient(req.body);
        hasSucceed ? this.#ResponseCreated(res) : this.#ResponseServerError(res);
    }

    HandleAuthenticateRequest = async (req, res) => {
        const { isCredentialsValid, error } = await this.#patientModel.AuthenticatePatient(req.body);
        error ? this.#ResponseServerError(res) : isCredentialsValid ? this.#ResponseOk(res) : this.#ResponseUnauthorized(res);
    }

    #ResponseOk(res) {
        res.sendStatus(200);
    }

    #ResponseCreated(res) {
        res.sendStatus(201);
    }

    #ResponseUnauthorized(res) {
        res.sendStatus(401);
    }

    #ResponseServerError(res) {
        res.sendStatus(500);
    }
}

module.exports = PatientController;