var express = require("express");
var router = express.Router();

const controller = require("../controllers/monitors");

router.get("/", controller.getAllMonitors);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getMonitorById);

router.delete("/:id", controller.deleteMonitor);

router.put("/:id", controller.updateMonitor);

router.post("/", controller.createMonitor);

module.exports = router;
