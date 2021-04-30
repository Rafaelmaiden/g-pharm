const { Router } = require('express')
const vendorsRoutes = require('./vendors.routes.js')
const pharmaciesRoutes = require('./pharmacies.routes')
const authRoutes = require('./auth.routes')

const router = Router()

router.get('/', function (req, res) {
  res.status(200).send('<h1 style="text-align: center">App Online!</h1>')
})

router.use(vendorsRoutes)
router.use(pharmaciesRoutes)
router.use(authRoutes)

module.exports = router
