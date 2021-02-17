const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Table = new Schema(
  {
    numTable: {
      type: Number,
    },
    isOcuped :{
        type: Boolean,
        defult : false
    }
    
  },
  {
    versionKey: false
}
);

const TableList = mongoose.model("Table", Table);
module.exports = TableList;
