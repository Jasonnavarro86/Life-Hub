const router = require('express').Router()
const mainRoute = require('./main')
const financeRoute = require('./finance')
const groceryListRoute = require('./groceryList')
const kidsRoute = require('./kids')
const choresRoute = require('./chores')
const appointmentsRoute = require('./appointments')

//routes
router.use('/main', mainRoute)
router.use('/finance', financeRoute)
router.use('/groceryList', groceryListRoute)
router.use('/kids', kidsRoute)
router.use('/chores', choresRoute)
router.use('/appointments', appointmentsRoute)

module.exports = router;