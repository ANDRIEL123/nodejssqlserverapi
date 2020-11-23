const dboperations = require('./dboperations')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const { response } = require('express');
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)

router.use((request, response, next) => {
    console.log('middleware')
    next()
})

router.route('/cases').get((req, res) => {
    dboperations.getCases().then(result => {
        res.json(result)
    })

})



module.exports = app