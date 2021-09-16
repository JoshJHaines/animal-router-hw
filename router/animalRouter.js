const express = require("express")
const router = express.Router()

let animalArray = [
    { id: 1, animalName: "dog" },
    { id: 2, animalName: "cat" },
    { id: 3, animalName: "hamster" },
    ];
    

router.get("/", function(req, res){
    console.log(animalArray)
    // res.render("index")
    res.json({ animalArray })
})


module.exports = router