const express =require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req,res) => {
    let dinosaurs = fs.readFileSync
    ("./dinosaurs.json")
    let dinoDate = JSON.parse
    (dinosaurs);
    console.log(dinoDate)
    res.render('dinosaurs/index',
    {myDinos: dinoDate})

})

router.get('/:index'; (req,res) =>{
    // get dinosaures
    let dinosaurs = fs.readFileSync('./dinosaurs.json');
    let dinoData = JSON.parse(dinosaurs);
    console.log('this is the req.params object!', req.params)
    let dinoIndex = parseInt(req.params.idx);
    res.render('dinosaurs/show', {myDinos: dinoData})

})

router.post('/', (req,res)=> {
    console.log('this is the Request Body: 'req,body)
})
module.exports = router;
