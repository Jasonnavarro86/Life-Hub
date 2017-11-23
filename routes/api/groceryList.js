const router = require('express').Router()
const groceryListController = require('../../controllers/groceryListController')

//Matches with '/api/groceryList
router.route("/")
.get(groceryListController.findAll)
.post(groceryListController.create);


router
.route("/:id")
.get(groceryListController.findByfId)
.put(groceryListController.update)
.delete(groceryListController.remove);

module.exports = router;