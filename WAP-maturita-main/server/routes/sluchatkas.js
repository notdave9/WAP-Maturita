var express = require("express");
var router = express.Router();

const controller = require("../controllers/sluchatkas");

router.get("/", controller.getAllSluchatkas);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getSluchatkaById);

router.delete("/:id", controller.deleteSluchatka);

router.put("/:id", controller.updateSluchatka);

router.post("/", controller.createSluchatka);

module.exports = router;
