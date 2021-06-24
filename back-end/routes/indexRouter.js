const router = require("express").Router();

const deviceRouter = require("./deviceRouter");
const typeRouter = require("./typeRouter");
const brandRouter = require("./brandRouter");
const userRouter = require("./userRouter");

router.use("/user", userRouter);
router.use("/device", deviceRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);

module.exports = router;
