const Telefon = require("../models/telefons");

exports.getAllTelefons = async (req, res) => {
  try {
    const result = await Telefon.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Telefons found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Telefons not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTelefonById = async (req, res) => {
  try {
    const result = await Telefon.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Telefon found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Telefon not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteTelefon = async (req, res) => {
  try {
    const result = await Telefon.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Telefon deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTelefon = async (req, res) => {
  try {
    const data = {
      znacka: req.body.znacka,
      pamet: req.body.pamet,
      kamera: req.body.kamera,
    };
    const result = await Telefon.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Telefon updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Telefon was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createTelefon = async (req, res) => {
  try {
    const data = new Telefon({
      znacka: req.body.znacka,
      pamet: req.body.pamet,
      kamera: req.body.kamera,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Telefon created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Telefon was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
