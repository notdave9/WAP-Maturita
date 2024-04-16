const Monitor = require("../models/monitors");

exports.getAllMonitors = async (req, res) => {
  try {
    const result = await Monitor.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Monitors found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Monitors not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getMonitorById = async (req, res) => {
  try {
    const result = await Monitor.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Monitor found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Monitor not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteMonitor = async (req, res) => {
  try {
    const result = await Monitor.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Monitor deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateMonitor = async (req, res) => {
  try {
    const data = {
      znacka: req.body.znacka,
      uhlopricka: req.body.uhlopricka,
      hz: req.body.hz,
    };
    const result = await Monitor.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Monitor updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Monitor was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createMonitor = async (req, res) => {
  try {
    const data = new Monitor({
      znacka: req.body.znacka,
      uhlopricka: req.body.uhlopricka,
      hz: req.body.hz,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Monitor created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Monitor was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
