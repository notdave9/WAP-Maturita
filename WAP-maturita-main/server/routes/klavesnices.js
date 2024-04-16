var express = require("express");
var router = express.Router();

const controller = require("../controllers/klavesnices");

router.get("/", controller.getAllKlavesnices);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getKlavesniceById);

router.delete("/:id", controller.deleteKlavesnice);

router.put("/:id", controller.updateKlavesnice);

router.post("/", controller.createKlavesnice);

module.exports = router;
