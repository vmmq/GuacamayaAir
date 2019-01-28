const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {

	db.Vuelo.findAll({
		include: [ db.Avion ]
	}).then( (dbVuelo) => {

		res.render("index", {vuelos: dbVuelo});

	});
});

router.post("/", (req, res) => {

	db.Avion.create({
		Avion_name: "placeholder"
	}).then( (dbAvion) => {

		db.Vuelo.create({
			vuelo_code: req.body.name,
			assigned: req.body.assigned,
			AvionId: dbAvion.dataValues.id
		}).then( (dbVuelo) => {

				res.redirect("/");

		});
	});


});

router.put("/:id", function(req, res) {

	db.Vuelo.findAll({
		include: [ db.Avion ]
	}).then( (results) => {
		
		db.Avion.update(
			{
				Avion_name: req.body.Avion_name
			},
			{
				where: {
					id: req.params.id
				}
			}).then( (dbAvion) => {
				db.Vuelo.update(
				{
					assigned: true
				},
		    {
		      where: {
		        id: req.params.id
		      }
		  	}).then( (dbVuelo) => {

					res.redirect("/");

				});
			});
	});
});

router.delete("/:id", function(req, res) {

	db.Vuelo.destroy({
		where: {
			id: req.params.id
		}
	}).then( (dbVuelo) => {

		res.redirect("/");

	});

});






module.exports = router;


