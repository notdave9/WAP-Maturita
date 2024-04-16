const Klavesnice = require("../models/klavesnices");

exports.getAllKlavesnices = async (req, res) => {
  try {
    const result = await Klavesnice.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Klavesnices found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Klavesnices not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getKlavesniceById = async (req, res) => {
  try {
    const result = await Klavesnice.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Klavesnice found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Klavesnice not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteKlavesnice = async (req, res) => {
  try {
    const result = await Klavesnice.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Klavesnice deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateKlavesnice = async (req, res) => {
  try {
    const data = {
      znacka: req.body.znacka,
      mechanika: req.body.mechanika,
      podsviceni: req.body.podsviceni,
    };
    const result = await Klavesnice.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Klavesnice updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Klavesnice was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createKlavesnice = async (req, res) => {
  try {
    const data = new Klavesnice({
      znacka: req.body.znacka,
      mechanika: req.body.mechanika,
      podsviceni: req.body.podsviceni,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Klavesnice created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Klavesnice was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
