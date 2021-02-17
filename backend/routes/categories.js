const express = require('express')
let Category = require('../models/categories.model');
const router = express.Router();

// show all category 


router.get('/', (req, res) => {
    Category.find()
        .then((category) => res.json(category))
        .catch((err) => res.status(400).json("Error :" + err));
});


// add category

router.route("/add").post((req, res) => {
    const nom = req.body.nom;
    const categoryPush = new Category({
        nom
    });
    categoryPush
        .save()
        .then(() => res.json("Category successfully added"))
        .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;