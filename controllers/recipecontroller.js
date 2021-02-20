let express = require('express');
const router = express.Router();
const Recipe = require('../db').import('../models/recipe');

///CREATE
router.post('/create', function (req, res) {
    Recipe.create({
        owner: req.user.id,
        title: req.body.title,
        image: req.body.image,
        servings: req.body.servings,
        readyInMinutes: req.body.readyInMinutes,
        entry: req.body.entry,
        rating: req.body.rating
    })
        .then(
            function createSuccess(recipe) {

                res.json({
                    recipe: recipe,
                    message: 'Recipe added',
                })
            }
        )
        .catch(err => res.status(500).json({ error: err }))
});

///UPDATE 
router.put('/update/:entryId', validateSession, function (req, res) {  
    const updateRecipeEntry = {
        // title: req.body.recipe.title,
        entry: req.body.recipe.entry,
        rating: req.body.recipe.rating,
    };

    const query = { where: { id: req.params.entryId, owner: req.user.id } };
    Recipe.update(updateRecipeEntry, query)
        .then((recipes) => res.status(200).json(recipes)) 
        .catch((err) => res.status(500).json({ error: err }))
});

//FIND ALL THE RECIPES FOR INDIVIDUAL USER
router.get('/', (req, res) => {
    Recipe.findAll()
        .then(recipes => res.status(200).json(recipes))
        .catch(err =>res.status(500).json({ error: err }))
});

//DELETE RECIPE ENTRY
router.delete('/delete/:id', validateSession, function (req,res) {
    const query = {where: {id: req.params.id, owner: req.user.id}};
    Recipe.destroy(query)
    .then(() => res.status(200).json({ message: 'Recipe Removed'}))
    .catch((err) => res.status(500).json({error: err}))
});

module.exports = router;