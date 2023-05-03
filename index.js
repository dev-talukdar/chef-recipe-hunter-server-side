const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000; 

const chef = require ('./data/chef.json')
const recipe = require ('./data/recipe.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Dish Delight is Running')
});

app.get('/chef', (req, res) =>{ 
    res.send(chef)
});

app.get('/recipe', (req, res) =>{ 
    res.send(recipe)
});

app.get('/recipe/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id)

})

app.listen(port, () => {
    console.log(`Dish Delight api is running on port :${port}`)
})