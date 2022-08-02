/**
 * Modified by Arun, on 2 Aug 2022
 * role from https://www.bezkoder.com/node-js-express-login-mongodb
 * User data Mdoel
 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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

const userSchema = new Schema(
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
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
