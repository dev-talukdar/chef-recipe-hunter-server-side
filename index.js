const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;  

app.get('/', (req, res) =>{
    res.send('Dish Delight is Running')
});


app.listen(port, () => {
    console.log(`Dish Delight api is running on port :${port}`)
})