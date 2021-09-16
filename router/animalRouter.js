const express = require("express");
const router = express.Router();

let animalArray = [
	{ id: 1, animalName: "dog" },
	{ id: 2, animalName: "cat" },
	{ id: 3, animalName: "hamster" },
];

router.get("/", function (req, res) {
	console.log(animalArray);
	// res.render("index")

	let foundAnimal = null;
	//see what the query length is
	console.log(`URL QUERY LENGTH: ${Object.keys(req.query).length}`);
	//if length is 0 then return the full array
	if (Object.keys(req.query).length === 0) {
		res.json({ animalArray });
		//if length is not 0, search for matches
	} else {
		animalArray.forEach((animal) => {
			//if there is a match, set truthy value for search
			if (
				animal.animalName === req.query.animal ||
				animal.id === +req.query.id
			) {
				foundAnimal = animal;
			}
		});
		//if truthy value is NOT true, return an error to guide user
		if (!foundAnimal) {
			return res.send("Animal not found, please check your spelling");
			//if truthy value is true, return the animal
		} else {
			return res.json({ foundAnimal });
		}
	}
});

router.post("/add-animal", function (req, res) {
	// res.send("post path!");
	console.log(req.body);
	animalArray.push({
        id: +`${animalArray.length + 1}`,
        animalName: `${req.body.animalName}`
    });
	res.json({ animalArray });
});

module.exports = router;
