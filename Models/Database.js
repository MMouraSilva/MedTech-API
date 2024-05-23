class Database {
    #dbTableORM;
    #error;

    constructor(tableORM) {
        this.#dbTableORM = tableORM;
        this.#error = "";
    }

    async Create(data) {
        await this.dbTableORM.create(data)
            .catch(error => this.error = error);

        return { hasSucceed: this.error ? false : true, error: this.error }
    }

    async FindBy(whereClause) {
        const queryResult = await this.dbTableORM.findAll(whereClause)
            .catch(error => this.error = error);

        return { queryResult, error: this.error }
    }


    get dbTableORM() {
        return this.#dbTableORM;
    };
    set dbTableORM(newValue) {
        this.#dbTableORM = newValue;
    };

    get error() {
        return this.#error;
    };
    set error(newValue) {
        this.#error = newValue;
    };
}

module.exports = Database;