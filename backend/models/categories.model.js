const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Category = new Schema(
  {
    nom: {
      type: String,
      required: true,
      trim: true,
    }
    
  },
  {
    versionKey: false
}
);

const CategoryList = mongoose.model("Category", Category);
module.exports = CategoryList;
