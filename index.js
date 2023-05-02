const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');
const recipe = require('./data/recipe.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Dragon is Running')
});

app.get('/chef', (req, res) =>{
    res.send(chef)
});

app.get('/recipe', (req, res) =>{
    res.send(recipe)
}) ;

app.get('/recipe/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id)
    const selectedRecipe = recipe.find(n => n._id ===id);
    res.send(selectedRecipe)
});

app.get('/chef/:id',(req, res) =>{
const id =  parseInt(req.params.id);
// const id =   req.params.id;

if (id == 0) {
    res.send(recipe)
}
else{
    const chefRecipe = recipe.filter(n => parseInt(n.category_id) === id)
    // const chefRecipe = recipe.filter(n =>  n.category_id === id)
    res.send(chefRecipe)
}
});

app.listen(port, () => {
    console.log(`dragon api is running on port :${port}`)
})