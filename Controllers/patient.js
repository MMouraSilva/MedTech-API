require('dotenv').config();
const PatientModel = require("../Models/Patient");
const StatusCodeResponse = require("../Controllers/statusCodeResponse");

class PatientController {
    #patientModel;
    #statusCode;

    constructor() {
        this.#patientModel = new PatientModel();
        this.#statusCode = new StatusCodeResponse();
    }

    HandleCreateRequest = async (req, res) => {
        const { hasSucceed } = await this.#patientModel.CreatePatient(req.body);
        hasSucceed ? this.#statusCode.ResponseCreated(res) : this.#statusCode.ResponseServerError(res);
    }

    HandleAuthenticateRequest = async (req, res) => {
        const { isCredentialsValid, error, patient } = await this.#patientModel.AuthenticatePatient(req.body);
        const patientJson = JSON.parse(JSON.stringify(patient));
        res.statusCode = 200;
        
        return error ? this.#statusCode.ResponseServerError(res) : isCredentialsValid ? res.json(patientJson) : this.#statusCode.ResponseUnauthorized(res);
    }
}

module.exports = PatientController;