const router = require('express').Router()
const kidsController = require('../../controllers/kidsController')

//Matches with '/api/kids
router.route("/")
.get(kidsController.findAll)
.post(kidsController.create);


router
.route("/:id")
.get(kidsController.findByfId)
.put(kidsController.update)
.delete(kidsController.remove);

module.exports = router;