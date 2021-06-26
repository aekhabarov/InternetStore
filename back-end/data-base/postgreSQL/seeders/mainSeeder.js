require("dotenv").config();
const sequelize = require("../config/config");
const seederBrands = require("./brands/brandsSeeder");
const seederTypes = require("./types/typesSeeder");

async function mainSeeder() {
  await sequelize.authenticate();
  await sequelize.sync();
  console.clear();
  await seederBrands();
  await seederTypes();
}

mainSeeder();
