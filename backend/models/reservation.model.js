const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservation = new Schema({
    nom: {
        type: String,
        required: true,
        trim: true,
    }

}, {
    versionKey: false
});

const reservationList = mongoose.model("reservation", reservation);
module.exports = reservationList;