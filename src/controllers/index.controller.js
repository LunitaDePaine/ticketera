const indexdCtrl = {};

const Pelicula = require('../models/Peliculas');

indexdCtrl.renderIndex = (req, res) => {
    res.render('index');
};

indexdCtrl.renderAbout = (req, res) => {
    res.render('about');
};

indexdCtrl.renderPreguntas = (req, res) => {
    res.render('preguntasf');
};

indexdCtrl.renderContacto = (req, res) => {
    res.render('contacto');
};

indexdCtrl.renderLogin = (req, res) => {
    res.render('login');
};

// indexdCtrl.renderMiCuenta = (req, res) => {
//     res.render('mi-cuenta');
// };

indexdCtrl.renderPeli = (req, res) => {
    res.render('peli');
};



indexdCtrl.renderMoviesAll = async (req, res) => {
    const peliculas = await Pelicula.find().lean();
    res.render('mi-cuenta', { peliculas });
}

module.exports = indexdCtrl;