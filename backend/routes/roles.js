/**
 * added by Arun, on 2 Aug 2022
 * Role from https://www.bezkoder.com/node-js-express-login-mongodb
 * Role data Mdoel
 */
const Role = require("../models/role.model");
const router = require("express").Router();

router.route("/").get((req, res) => {
  Role.find()
    .then((role) => res.json(role))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;

  const newRole = new Role({
    name,
  });

  newRole
    .save()
    .then(() => res.json("Role added!"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
