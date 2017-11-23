const router = require('express').Router()
const appointmentsController = require('../../controllers/appointmentsController')

//Matches with '/api/appointments'
router.route("/")
.get(appointmentsController.findAll)
.post(appointmentsController.create);


router
.route("/:id")
.get(appointmentsController.findByfId)
.put(appointmentsController.update)
.delete(appointmentsController.remove);

module.exports = router;