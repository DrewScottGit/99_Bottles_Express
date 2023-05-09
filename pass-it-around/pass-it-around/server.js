const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <h2> <a href="/98">take one down pass it around</a></h2> 
    `)
})

const takeOneDown = function(bottlesLeft){
    return bottlesLeft - 1
}

app.get('/:number_of_bottles', (req, res) => {
    let newBottlesNum = req.params.number_of_bottles
    let minusBottle = takeOneDown(newBottlesNum)
    if (newBottlesNum > 0 ){
        res.send(` <h1>${newBottlesNum} Bottles of beer left on the wall!</h1>
        <h2><a href="/${minusBottle}">take one down pass it around</a></h2> 
        `)
     } else if (newBottlesNum < 1){
        res.send(` 
        <h1> You are out of beer! :(</h1>
        <h2><a href="/">click here to restock on beer</a></h2> 
        `)
    }
})

app.listen(PORT, () => {
    console.log(`listing on port: 3000`)
})