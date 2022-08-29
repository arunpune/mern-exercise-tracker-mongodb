const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citystorenameSchema = new Schema(
  {
    cityname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    citystorename: {
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

const CityStorename = mongoose.model("CityStorename", citystorenameSchema);

module.exports = CityStorename;
