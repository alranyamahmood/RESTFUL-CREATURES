// npm i express express-ejs-layouts ejs method-override
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const app = express()
// MIDDLE WARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(methodOverride('_method'))
app.use((req,res, next) => {
    console.log("Our own middleware!")
    console.log(`Request for ${req.method} at ${req.path} `)
    next()
})
app.use(express.urlencoded({extended:false}))
// ROUTES
app.use('/dinosaurs', require('./controllers/dinosaurs'))

app.get('/', (req,res) => {
    res.redirect('/dinosaurs')
})

app.listen(3500, () => {
    console.log('App listening on port 3500!')
})