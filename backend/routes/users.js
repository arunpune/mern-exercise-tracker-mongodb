const User = require("../models/user.model");
const router = require("express").Router();

router.route("/").get((req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error" + err));
});

//how to take this data as an array?
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const roles = req.body.roles;

  const newUser = new User({
    username,
    email,
    password,
    roles,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
