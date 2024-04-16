const Sluchatka = require("../models/sluchatkas");

exports.getAllSluchatkas = async (req, res) => {
  try {
    const result = await Sluchatka.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Sluchatkas found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Sluchatkas not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSluchatkaById = async (req, res) => {
  try {
    const result = await Sluchatka.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Sluchatka found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Sluchatka not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteSluchatka = async (req, res) => {
  try {
    const result = await Sluchatka.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Sluchatka deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateSluchatka = async (req, res) => {
  try {
    const data = {
      znacka: req.body.znacka,
      hlasitost: req.body.hlasitost,
    };
    const result = await Sluchatka.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Sluchatka updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Sluchatka was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createSluchatka = async (req, res) => {
  try {
    const data = new Sluchatka({
      znacka: req.body.znacka,
      hlasitost: req.body.hlasitost,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Sluchatka created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Sluchatka was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
