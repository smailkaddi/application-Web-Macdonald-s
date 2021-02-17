const express = require('express')
let Codepromo = require('../models/codepromo.model');
const router = express.Router();

// show all Codepromo


router.get('/', (req,res) =>{

  Codepromo.find()
  .then((Codepromo) => res.json(Codepromo))
  .catch((err) => res.status(400).json("Error :" + err));
});


// add category

router.route("/add").post((req, res) => {
  const code = req.body.code;
  const isValid = req.body.isValid;
  const pourcentage = req.body.pourcentage;

  
   
  
    const CodepromoPush = new Codepromo({
      
      code,
      isValid,
      pourcentage

     
    });
  
    CodepromoPush
      .save()
      .then(() => res.json("Category successfully added"))
      .catch((err) =>  res.status(400).json("Error :" + err));
      res.redirect('/Codepromo')
  });


  


module.exports = router;