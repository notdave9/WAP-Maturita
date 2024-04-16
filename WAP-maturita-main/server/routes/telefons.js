var express = require("express");
var router = express.Router();

const telefonsController = require("../controllers/telefons");

router.get("/", telefonsController.getAllTelefons);

//localhost:3000/telefons/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", telefonsController.getTelefonById);

router.delete("/:id", telefonsController.deleteTelefon);

router.put("/:id", telefonsController.updateTelefon);

router.post("/", telefonsController.createTelefon);

module.exports = router;
