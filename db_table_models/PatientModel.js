const Sequelize = require("sequelize");
const connection = require("../database/connection");

const PatientORM = connection.define("PATIENT", {
    idPatient: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    birthDate: {
        type: Sequelize.DATE
    },
    phoneNumber: {
        type: Sequelize.STRING
    },
    healthInsurance: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
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

PatientORM.removeAttribute('id');

module.exports = PatientORM;