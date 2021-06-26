const { Type } = require("../../models/models");
const { readFile } = require("fs");
const path = require("path");

async function seederTypes() {
  try {
    const filename = path.resolve(__dirname, "dictionary.txt");
    readFile(filename, "utf8", (err, data) => {
      if (err) throw err;
      let typesArr = data.trim().split("\n");
      console.log(typesArr);
      typesArr.forEach(async (el) => {
        let elFromBase = await Type.findOne({ name: el });
        if (!elFromBase) {
          await Type.create({ name: el });
        } else {
          console.log(`${el} уже есть в базе`);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = seederTypes;
