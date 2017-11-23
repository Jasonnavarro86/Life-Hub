const router = require('express').Router()
const financeController = require('../../controllers/financeController')

//Matches with '/api/finance
router.route("/")
.get(financeController.findAll)
.post(financeController.create);


router
.route("/:id")
.get(financeController.findByfId)
.put(financeController.update)
.delete(financeController.remove);

module.exports = router;