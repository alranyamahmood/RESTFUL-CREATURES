const {render } = require('ejs')
const express = require('express')
const router = express.Router
const fs = require('fs')


router.get('/', (req,res) => {

    const context = {}

    context.myCreatures = require('../prehistoric_creatures.json')

    res.render('prehistoric_creatures/index', context)

 router.post('/', (req, res)=> {
            console.log('This is the Request Body: ', req.body)


            // retrieve the save pre creatures as object 
            const creaturesData = require ('../prehistoric.json')

            // PUSH THE NEW CREATURE FROM THE FOEM 
            creaturesData.push(req.body)

            // save dino to the data.json file 
            fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(CreaturesData))


    // let prehistoric = fs.readFileSync("./prehistoric.json")
    let hisrData = JSON.parse(prehistoric);
    // console.log(hisrData)
    res.render('prehistoric/index.ejs', {myhisr: hisrData})

router.get('/new', (req,res) => {
        res.render('prehistoric/new')

        router.get('/:idx', (req,res) => {
            // get prehistoric
            let prehistoric = fs.readFileSync('./prehistoric.json')
            let dinohisr = JSON.parse(prehistoric);
            console.log('This is the req.params object! ', req.params)
            let hisrIndex = parseInt(req.params.idx)
            res.render('prehistoric/show', {myhisr: hisrData[hisrIndex]})
        })
        
        
       
            let prehistoric = fs.readFileSync('./prehistoric.json')
            let hisrData = JSON.parse(hisrsaurs)
            hisrData.push(req.body)
            fs.writeFileSync('./prehistoric.json', JSON.stringify(hisrData))
            res.redirect('/prehistoric')

        
        
            router.delete('/:idx', (req,res) => {
                console.log('This is my Req Params object ', req.params)
            
                let  = fs.readFileSync('./prehistoric.json')
                let hisrData = JSON.parse(prehistori)
                hisrData.splice(req.params.idx, 1)
                fs.writeFileSync('./prehistoric.json', JSON.stringify(hisrData))
                res.redirect('/prehistoric')



                router.get('/edit/:idx', (req,res) => {
                    //Grab hisr data
                    let prehistori = fs.readFileSync('./prehistoric.json')
                    let hisrData = JSON.parse(prehistoric)
                    //Display edit page 
                    res.render('prehistoric/edit', {
                        dino: hisrData[req.params.idx],
                        hisrId: req.params.idx
                    })
                })
                
                router.put('/:hisrId', (req,res) => {
                    //Grab all hisr data VVV
                    let prehistori = fs.readFileSync('./prehistoric.json')
                    // Parse JSON data into JS Object VVV
                    let hisrData = JSON.parse(prehistori)
                    // Update our prehistoric with form data
                    hisrData[req.params.hisrId].name = req.body.name
                    hisrData[req.params.hisrId].type = req.body.type
                    // update our json file with new data
                    fs.writeFileSync('./prehistoric.json', JSON.stringify(hisrData))
                    //redirect to home page
                    res.redirect('/prehistoric')
                })
                
                module.exports = router
            
        

