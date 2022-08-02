/**
 * Added by Arun, on 2 Aug 2022
 * role from https://www.bezkoder.com/node-js-express-login-mongodb
 * role data Mdoel
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema(
  {
    role: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.models.Role || mongoose.model("Role", roleSchema);
module.exports = Role;
