const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Codepromo = new Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
      minlenght: 3,
    },
    isValid: {
        type: Boolean,
        default: true,
       
      },
      pourcentage: {
        type: Number,
        required: true,
    },
  },
  {
    versionKey: false
}
);

const CodepromoList = mongoose.model("Codepromo", Codepromo);
module.exports = CodepromoList;