require('dotenv').config();
const AppointmentModel = require("../Models/Appointment");
const StatusCodeResponse = require("../Controllers/statusCodeResponse");

class AppointmentController {
    #appointmentModel;
    #statusCode;

    constructor() {
        this.#appointmentModel = new AppointmentModel();
        this.#statusCode = new StatusCodeResponse();
    }

    HandleCreateRequest = async (req, res) => {
        const { hasSucceed } = await this.#appointmentModel.CreateAppointment(req.body);
        hasSucceed ? this.#statusCode.ResponseCreated(res) : this.#statusCode.ResponseServerError(res);
    }
}

module.exports = AppointmentController;