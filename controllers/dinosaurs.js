const {render } = require('ejs')
const { query } = require('express')
const express = require('express')
const router = express.Router()

const fs = require('fs')


router.get('/', (req,res) => {


    // pull in JSON date
    let dinosaurs = require("../dinosaurs.json")

    console.log(dinoData)
    const context = {}

    // turns the JSON date into a JS object
    // let dinoData = JSON.parse(dinosaurs);

    let nameFilter = req.query.nameFilter
    console.log('the query is:', nameFilter)
    // if the user searched for something
    if(nameFilter){
        console.log('not empty')
    dinoData = dinoData.filter(dino=>dino.name.toLowerCase()===nameFilter.toLocaleLowerCase())
    }
    res.render('dinosaurs/index.ejs', {myDinos: dinoData})

})

router.get('/new', (req,res) => {
    res.render('dinosaurs/new')
})

router.get('/:idx', (req,res) => {
    // get dinosaurs
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs);
    console.log('This is the req.params object! ', req.params)
    let dinoIndex = parseInt(req.params.idx)
    res.render('dinosaurs/show', {myDino: dinoData[dinoIndex]})
})


router.post('/', (req, res)=> {
    console.log('This is the Request Body: ', req.body)
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    dinoData.push(req.body)
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    res.redirect('/dinosaurs')
})


router.delete('/:idx', (req,res) => {
    console.log('This is my Req Params object ', req.params)

    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    dinoData.splice(req.params.idx, 1)
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    res.redirect('/dinosaurs')
})


router.get('/edit/:idx', (req,res) => {
    //Grab dino data
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    //Display edit page 
    res.render('dinosaurs/edit', {
        dino: dinoData[req.params.idx],
        dinoId: req.params.idx
    })
})

router.put('/:dinoId', (req,res) => {
    //Grab all dino data VVV
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    // Parse JSON data into JS Object VVV
    let dinoData = JSON.parse(dinosaurs)
    // Update our dinosaurs with form data
    dinoData[req.params.dinoId].name = req.body.name
    dinoData[req.params.dinoId].type = req.body.type
    // update our json file with new data
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    //redirect to home page
    res.redirect('/dinosaurs')
})








module.exports = router;