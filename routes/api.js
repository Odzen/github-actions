const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/pokemons', async (req, res) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const jsonData = await response.json();
    res.send(jsonData);
});

router.get('/pokemons/bulbasaur', async (req, res) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    const jsonData = await response.json();
    res.send(jsonData);
});

router.get('/rickandmorty_characters/', async (req, res) => {
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const jsonData = await response.json();
    res.send(jsonData);
});

router.get('/rickandmorty_characters/harold', async (req, res) => {
    const response = await fetch('https://rickandmortyapi.com/api/character/155')
    const jsonData = await response.json();
    res.send(jsonData);
});


module.exports = router;