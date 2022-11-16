const { Router } = require('express');
const router = Router();

const { renderIndex, renderAbout, renderPreguntas, renderContacto, renderLogin, renderMiCuenta, renderPeli, renderMoviesAll } = require('../controllers/index.controller')

//router.get('/', renderIndex);

router.get('/about', renderAbout);
router.get('/preguntasf', renderPreguntas);
router.get('/contacto', renderContacto);
router.get('/login', renderLogin);
//router.get('/mi-cuenta', renderMiCuenta);
router.get('/peli', renderPeli);

//Get all users
router.get('/mi-cuenta', renderMoviesAll);

module.exports = router;