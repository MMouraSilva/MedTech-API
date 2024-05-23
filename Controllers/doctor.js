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
        const { isCredentialsValid, error } = await this.#doctorModel.AuthenticateDoctor(req.body);
        error ? this.#statusCode.ResponseServerError(res) : isCredentialsValid ? this.#statusCode.ResponseOk(res) : this.#statusCode.ResponseUnauthorized(res);
    }


}

module.exports = DoctorController;