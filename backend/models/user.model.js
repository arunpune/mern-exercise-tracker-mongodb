/**
 * Modified by Arun, on 2 Aug 2022
 * User from https://www.bezkoder.com/node-js-express-login-mongodb
 * User data Mdoel
 */

/* const mongoose = require("mongoose");

const Schema = mongoose.Schema;
 */
/* const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
}); */

/* const userSchema = new Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "role",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
 */

const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

//const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
