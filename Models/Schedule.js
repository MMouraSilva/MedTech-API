const Database = require("./Database");
const ErrorHandler = require("./ErrorHandler");
const ScheduleORM = require("../db_tables_ORM/ScheduleORM");
require("dotenv").config();

class Schedule {
    constructor() {
        this.database = new Database(ScheduleORM);
        this.errorHandler = new ErrorHandler();
    }

    async CreateSchedule(data) {
        data = await this.#HandleScheduleDataToCreate(data);
        const { hasSucceed, error } = await this.database.Create(data);
        if(error) this.errorHandler.HandleError(error);

        return { hasSucceed };
    }

    async #HandleScheduleDataToCreate(data) {
        const handledData = {
            idDoctor: data.idDoctor,
            weekDay: data.weekDay,
            startTime: data.startTime,
            endTime: data.endTime
        }

        return handledData;
    }
}

module.exports = Schedule;