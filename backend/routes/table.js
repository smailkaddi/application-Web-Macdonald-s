const express = require('express')
let Table = require('../models/table.model');
const router = express.Router();

// show all Codepromo


router.get('/', (req,res) =>{

    Table.find()
  .then((Table) => res.json(Table))
  .catch((err) => res.status(400).json("Error :" + err));
});


// add category

router.route("/add").post((req, res) => {
  const numTable = req.body.numTable;
  const isOcuped = req.body.isOcuped;
    const TablePush = new Table({
        numTable,
        isOcuped


    });
  
    TablePush
      .save()
      .then(() => res.json("Table successfully added"))
      .catch((err) =>  res.status(400).json("Error :" + err));
      
  });



router.route("/update/:numTable").put((req, res) => {


    
  
    Table.updateOne({numTable: req.params.numTable}, {isOcuped : true})
    .then(() => res.status(201).json("table updated "))
    .catch((err) =>  res.status(400).json("Error :" + err));
})


  


module.exports = router;