const router = require('express').Router();
const mainController = require('../../controllers/mainController');

//Matches with '/api/main

router.route("/")
.get(mainController.findAll)
.post(mainController.create);


router
.route("/:id")
.get(mainController.findByfId)
.put(mainController.update)
.delete(mainController.remove);

module.exports = router;