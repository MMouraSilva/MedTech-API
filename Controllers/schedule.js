require('dotenv').config();
const ScheduleModel = require("../Models/Schedule");
const StatusCodeResponse = require("../Controllers/statusCodeResponse");

class ScheduleController {
    #scheduleModel;
    #statusCode;

    constructor() {
        this.#scheduleModel = new ScheduleModel();
        this.#statusCode = new StatusCodeResponse();
    }

    HandleCreateRequest = async (req, res) => {
        const { hasSucceed } = await this.#scheduleModel.CreateSchedule(req.body);
        hasSucceed ? this.#statusCode.ResponseCreated(res) : this.#statusCode.ResponseServerError(res);
    }
}

module.exports = ScheduleController;