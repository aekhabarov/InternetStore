const router = require("express").Router();
const typeController = require("../controllers/type-controller");

router.post("/", typeController.create);
router.get("/", typeController.getAll);

module.exports = router;
