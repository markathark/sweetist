const CustomOrder = require("../models/Custom");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const customOrder = new CustomOrder(req.body);

  try {
    const savedCustomOrder = await customOrder.save();
    res.status(200).json(savedCustomOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
