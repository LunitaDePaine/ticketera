const usuariosCtrl = {};

const Usuario = require('../models/Usuarios');

usuariosCtrl.renderUserForm = (req, res) => {
    res.render('usuarios/new-user');
}

usuariosCtrl.createNewUser = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new Usuario({ name, email, password })
    await newUser.save();
    res.redirect('/usuarios');
}

usuariosCtrl.renderUsers = async (req, res) => {
    Usuario
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

usuariosCtrl.renderUsersAll = async (req, res) => {
    const usuarios = await Usuario.find().lean();
    res.render('usuarios/all-users', { usuarios });
}



usuariosCtrl.renderEditForm = async (req, res) => {
    const usuarios = await Usuario.findById(req.params.id).lean();
    //console.log(usuarios);
    res.render('usuarios/edit-user', { usuarios });
}

usuariosCtrl.updateUser = async (req, res) => {
    const { name, email, password } = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, { name, email, password });
    res.redirect('/');
}

usuariosCtrl.deleteUser = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.redirect('/usuarios')
}

module.exports = usuariosCtrl;