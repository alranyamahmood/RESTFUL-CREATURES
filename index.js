const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
('express-ejs-layouts')
const app = express()

app.set('view angine', 'ejs')
app.use(ejsLayouts)
app.use(express.urlencoded({extended:false}))
app.use('/dinosaurs', require('./controllers/dinosaurs'))

app.get('/', (req,res) => {
    res.redirect('/dinosaurs')
})
app.listen(3500, () =>{
    console.log('App listeng on port 3500!')
})