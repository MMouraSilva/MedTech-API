const Database = require("./Database");
const ErrorHandler = require("./ErrorHandler");
const AppointmentORM = require("../db_tables_ORM/AppointmentORM");
require("dotenv").config();

class Appointment {
    constructor() {
        this.database = new Database(AppointmentORM);
        this.errorHandler = new ErrorHandler();
    }

    async CreateAppointment(data) {
        data = await this.#HandleAppointmentDataToCreate(data);
        const { hasSucceed, error } = await this.database.Create(data);
        if(error) this.errorHandler.HandleError(error);

        return { hasSucceed };
    }

    async #HandleAppointmentDataToCreate(data) {
        const handledData = {
            idAppointment: data.idAppointment,
            idSchedule: data.idSchedule,
            idPatient: data.idPatient,
            appointmentDate: data.appointmentDate
        }

        return handledData;
    }
}

module.exports = Appointment;