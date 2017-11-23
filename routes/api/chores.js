const router = require('express').Router()
const choresController = require('../../controllers/choresController')

//Matches with '/api/chores
router.route("/")
.get(choresController.findAll)
.post(choresController.create);


router
.route("/:id")
.get(choresController.findByfId)
.put(choresController.update)
.delete(choresController.remove);

module.exports = router;