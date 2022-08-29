const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citynameSchema = new Schema(
  {
    cityname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const Cityname = mongoose.model("Cityname", citynameSchema);

module.exports = Cityname;
