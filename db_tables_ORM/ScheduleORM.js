const Sequelize = require("sequelize");
const connection = require("../database/connection");

const ScheduleORM = connection.define("SCHEDULE", {
    idSchedule: {
        type: Sequelize.INTEGER
    },
    idDoctor: {
        type: Sequelize.INTEGER
    },
    weekDay: {
        type: Sequelize.STRING
    },
    startTime: {
        type: Sequelize.TIME
    },
    endTime: {
        type: Sequelize.TIME
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

ScheduleORM.removeAttribute('id');

module.exports = ScheduleORM;