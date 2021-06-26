const { Type } = require("../data-base/postgreSQL/models/models");
const ApiError = require("../errors/api-error");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    try {
      const type = await Type.findOne({ where: { name } });
      if (type) {
        throw ApiError.BadRequest(`Такой тип - ${type.name}, уже существует`);
      }
      type = await Type.create({ name });
      return res.json({ type });
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json({ types });
  }
}

module.exports = new TypeController();
