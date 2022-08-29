const CityStorename = require("../models/citystorename.model");
const router = require("express").Router();

router.route("/").get((req, res) => {
  CityStorename.find()
    .then((citystorename) => res.json(citystorename))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const citystorename = req.body.citystorename;
  const cityname = req.body.cityname;

  const newCitystorename = new CityStorename({
    cityname,
    citystorename,
  });

  newCitystorename
    .save()
    .then(() => res.json("City Store name added!"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
