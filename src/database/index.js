import Sequelize from 'sequelize';

import databaseConfig from '../config/database'
import Spreeds from '../app/models/Spreeds';

const models = [ Spreeds]

class Database {
    constructor(){
        this.init()
    }

    init(){
        this.connection = new Sequelize(databaseConfig)

        models
        .map(model => model.init(this.connection))
    }
}

export default new Database()