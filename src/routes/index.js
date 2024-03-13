const express = require("express")
const router = express.Router();

const resenasRouter = require("../components/resenas/routes");

router.use("/resenas", resenasRouter);
module.exports = router;
