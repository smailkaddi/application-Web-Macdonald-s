const express = require('express')
let reservation = require('../models/reservation.model');
const router = express.Router();

// show all reservation 


router.get('/', (req, res) => {
    reservation.find()
      .then((reservation) => res.json(reservation))
      .catch((err) => res.status(400).json("Error :" + err));
  });







  // add reservation

router.route("/add").post((req, res) => {
    const nom = req.body.nom;
    const reservationPush = new reservation({
      nom
    });
    reservationPush
      .save()
      .then(() => res.json("reservation successfully added"))
      .catch((err) => res.status(400).json("Error :" + err));
  });
  module.exports = router;