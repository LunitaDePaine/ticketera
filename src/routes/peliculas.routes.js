const { Router } = require('express');
const router = Router();

const { renderMovieForm, createNewMovie, renderMovies, renderEditForm, updateMovie, deleteMovie, renderMoviesIndex, renderInfoMovie, renderBuySeats, renderMoviesAll } = require('../controllers/peliculas.controller')

// New Movie
router.get('/peliculas/add', renderMovieForm);

router.post('/peliculas/new-movie', createNewMovie);

// Get all Movie 
router.get('/', renderMoviesIndex);

// Get all movies in json
router.get('/Allpeliculas', renderMovies);

// Edit Movie
router.get('/peliculas/edit/:id', renderEditForm);

router.put('/peliculas/edit/:id', updateMovie);

// Delete Movie
router.delete('/peliculas/delete/:id', deleteMovie);

// Info Movie
router.get('/peli/:id', renderInfoMovie);

// Buy Seats
router.get('/peli/seats/:id', renderBuySeats);

// Get all movies
router.get('/peliculas', renderMoviesAll);

module.exports = router