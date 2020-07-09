import Sequelize,{Model} from 'sequelize';

class Spreeds extends Model {
    static init(sequelize) {
        super.init(
            {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        age: Sequelize.INTEGER,
        data: Sequelize.DATE,
            }, {
                sequelize
            })
    }
}
export default Spreeds