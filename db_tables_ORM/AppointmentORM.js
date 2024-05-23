const Sequelize = require("sequelize");
const connection = require("../database/connection");

const AppointmentORM = connection.define("APPOINTMENT", {
    idAppointment: {
        type: Sequelize.INTEGER
    },
    idSchedule: {
        type: Sequelize.INTEGER
    },
    idPatient: {
        type: Sequelize.INTEGER
    },
    appointmentDate: {
        type: Sequelize.DATE
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
},
{
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    freezeTableName: true,
    timestamps: false
});

AppointmentORM.removeAttribute('id');

module.exports = AppointmentORM;