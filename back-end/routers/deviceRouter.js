const router = require("express").Router();
const deviceController = require("../controllers/device-controller");

router.post("/", deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);

module.exports = router;
