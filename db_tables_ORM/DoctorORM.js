const Sequelize = require("sequelize");
const connection = require("../database/connection");

const DoctorORM = connection.define("DOCTOR", {
    idDoctor: {
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
    specialty: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    address: {
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

DoctorORM.removeAttribute('id');

module.exports = DoctorORM;