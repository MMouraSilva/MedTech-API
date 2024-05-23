require('dotenv').config();
const DoctorModel = require("../Models/Doctor");
const StatusCodeResponse = require("../Controllers/statusCodeResponse");

class DoctorController {
    #doctorModel;
    #statusCode;

    constructor() {
        this.#doctorModel = new DoctorModel();
        this.#statusCode = new StatusCodeResponse();
    }

    HandleCreateRequest = async (req, res) => {
        const { hasSucceed } = await this.#doctorModel.CreateDoctor(req.body);
        hasSucceed ? this.#statusCode.ResponseCreated(res) : this.#statusCode.ResponseServerError(res);
    }

    HandleAuthenticateRequest = async (req, res) => {
        const { isCredentialsValid, error, doctor } = await this.#doctorModel.AuthenticateDoctor(req.body);
        const doctorJson = JSON.parse(JSON.stringify(doctor));
        res.statusCode = 200;
        
        return error ? this.#statusCode.ResponseServerError(res) : isCredentialsValid ? res.json(doctorJson) : this.#statusCode.ResponseUnauthorized(res);
    }


}

module.exports = DoctorController;