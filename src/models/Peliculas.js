const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    sinopsis: { type: String, required: true },
    valuation: { type: Number, required: true },
    gender: { type: String, required: true },
    stock: { type: Number, required: false },
    seats: { type: String, required: false },
    people: { type: String, required: false },
    image: { type: String, required: false }
});

module.exports = model('Pelicula', MovieSchema, 'peliculas');