const Role = require("../models/role.model");
const router = require("express").Router();

router.route("/").get((req, res) => {
  Role.find()
    .then((role) => res.json(role))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const role = req.body.role;

  const newRole = new Role({
    role,
  });

  newRole
    .save()
    .then(() => res.json("Role added!"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
