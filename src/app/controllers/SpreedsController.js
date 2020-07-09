import Spreeds from '../models/Spreeds';

class SpreedsController {
  async store(req, res){
    const {id, name, address, age, data} = await Spreeds.create(req.file)
    return res.json({
        id,
        name,
        address,
        age,
        data,
    });
  }

  async index(req, res) {
      const spreeds = await Spreeds.findAll(req.body)

      return res.json(spreeds)
  }
}

export default new SpreedsController();
