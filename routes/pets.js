const express = require('express');
const router = express.Router();
const pets = require('../controllers/pets');


// start from /

// map
router.get('/', pets.index);

// pet submission form
router.get('/pets/new', pets.new);

// pet submission create
router.post('/pets', pets.create);

// show all pets
router.get('/pets/all', pets.all);

// show one pet
router.get('/pets/:id', pets.show);

// edit one pet form
router.get('/pets/:id/edit', pets.edit);

// edit one update
router.put('/pets/:id', pets.update);

// delete pet
router.delete('/pets/:id', pets.delete);

module.exports = router;