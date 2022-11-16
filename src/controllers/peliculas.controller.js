const pelicukaCtrl = {};

const Pelicula = require('../models/Peliculas');

pelicukaCtrl.renderMovieForm = (req, res) => {
    res.render('peliculas/new-movie');
}

pelicukaCtrl.createNewMovie = async (req, res) => {
    const { name, description, sinopsis, valuation, gender, stock, seats, people, image } = req.body;
    const newMovie = new Pelicula({ name, description, sinopsis, valuation, gender, stock, seats, people, image });
    await newMovie.save();
    res.redirect('/');
}

pelicukaCtrl.renderMovies = async (req, res) => {
    Pelicula
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

pelicukaCtrl.renderMoviesIndex = async (req, res) => {
    const peliculas = await Pelicula.find().lean();
    res.render('peliculas/all-movies', { peliculas });
}

pelicukaCtrl.renderMoviesAll = async (req, res) => {
    const peliculas = await Pelicula.find().lean();
    res.render('peliculas/array-movies', { peliculas });
}

pelicukaCtrl.renderEditForm = async(req, res) => {
    const peliculas = await Pelicula.findById(req.params.id).lean();
    //console.log(usuarios);
    res.render('peliculas/edit-movie', { peliculas });
}

pelicukaCtrl.updateMovie = async(req, res) => {
    const { name, description, sinopsis, valuation, gender, stock, seats, people, image } = req.body;
    await Pelicula.findByIdAndUpdate(req.params.id, { name, description, sinopsis, valuation, gender, stock, seats, people, image });
    res.redirect('/');
}

pelicukaCtrl.deleteMovie = async (req, res) => {
    await Pelicula.findByIdAndDelete(req.params.id);
    res.redirect('/')
}

pelicukaCtrl.renderInfoMovie = async (req, res) => {
    const peliculas = await Pelicula.findById(req.params.id).lean();
    res.render('peliculas/info-movie', { peliculas });
}

pelicukaCtrl.renderBuySeats = async (req, res) => {
    const peliculas = await Pelicula.findById(req.params.id).lean();
    res.render('peliculas/buy-seats', { peliculas });
}

module.exports = pelicukaCtrl;