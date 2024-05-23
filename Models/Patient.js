const bcrypt = require("bcrypt");
const Database = require("./Database");
const ErrorHandler = require("./ErrorHandler");
const PatientORM = require("../db_table_models/PatientModel");
require("dotenv").config();

class Patient {
    #salt;
    #saltRounds;

    constructor() {
        this.database = new Database(PatientORM);
        this.errorHandler = new ErrorHandler();
        this.#saltRounds = parseInt(process.env.SALT_ROUNDS);
        this.#salt = bcrypt.genSaltSync(this.saltRounds);
    }

    async CreatePatient(data) {
        data = await this.#HandlePatientDataToCreate(data);
        const { hasSucceed, error } = await this.database.Create(data);
        if(error) this.errorHandler.HandleError(error);

        return { hasSucceed };
    }

    async GetPatientByEmail(whereClause) {
        const { queryResult, error } = await this.database.FindBy(whereClause);
        if(error) this.errorHandler.HandleError(error);

        return { queryResult, error };
    }

    async AuthenticatePatient(data) {
        const whereClause = this.#HandlePatientDataToAuthenticate(data);
        const { queryResult, error } = await this.GetPatientByEmail(whereClause);
        const isCredentialsValid = error ? false : queryResult.length ? await bcrypt.compare(data.password, queryResult[0].dataValues.password) : false;

        return { isCredentialsValid, error };
    }

    async #HandlePatientDataToCreate(data) {
        const handledData = {
            name: data.name,
            email: data.email,
            birthDate: data.birthDate,
            phoneNumber: data.phoneNumber,
            healthInsurance: data.healthInsurance,
            password: await this.#GeneratePasswordHash(data.password),
        }

        return handledData;
    }

    #HandlePatientDataToAuthenticate(data) {
        const handledData = {
            where: {
                email: data.email
            }
        }        

        return handledData;
    }

    async #GeneratePasswordHash(password) {
        return bcrypt.hashSync(password, this.salt);
    }

    // static async getUsuario() {
    //     try {
    //         const usuarios = await UsuarioORM.findAll();

    //         return usuarios;
    //     } catch (error) {
    //         console.error("Erro na consulta:", error);
    //         throw error; // Lança o erro para ser tratado no chamador da função
    //     }
    // }

    // async getUsuarioById() {
    //     try {
    //         const usuario = await UsuarioORM.findAll({
    //             where: {
    //                 idUsuario: this.id
    //             }
    //         });

    //         return usuario;
    //     } catch (error) {
    //         console.error("Erro na consulta:", error);
    //         throw error; // Lança o erro para ser tratado no chamador da função
    //     }
    // }
    
    // async updateUsuario() {
    //     try {
    //         const { id, nome, senha } = this;
    //         const saltRounds = 10;

    //         bcrypt.hash(senha, saltRounds, async (err, hash) => {
    //             await UsuarioORM.update({ nome, senha: hash }, {
    //                 where: {
    //                     idUsuario: id
    //                 }
    //             });
    //         });
    //     } catch (error) {
    //         console.error("Erro na consulta:", error);
    //         throw error; // Lança o erro para ser tratado no chamador da função
    //     }
    // }

    // async deleteUsuario() {
    //     try {
    //         await UsuarioORM.destroy({
    //             where: {
    //                 idUsuario: this.id
    //             }
    //         });
    //     } catch (error) {
    //         console.error("Erro na consulta:", error);
    //         throw error; // Lança o erro para ser tratado no chamador da função
    //     }
    // }

    get salt() {
        return this.#salt;
    };

    get saltRounds() {
        return this.#saltRounds;
    };
}

module.exports = Patient;