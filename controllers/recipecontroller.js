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

module.exports = router;