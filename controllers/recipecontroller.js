let express = require('express');

const router = express.Router();

const Recipe = require('../db').import('../models/recipe');

router.post('/create', function (req, res) {
    Recipe.create({
        id: req.body.user.email,
        title: req.body,
        image: req.body,
        servings: req.body,
        readyInMinutes: req.body,
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


// FIND ALL RECIPES FOR INDIVIDUAL USER
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