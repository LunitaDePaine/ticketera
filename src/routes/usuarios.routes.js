const { Router } = require('express');
const router = Router();

const { renderUserForm, createNewUser, renderUsers, renderEditForm, updateUser, deleteUser, renderUsersAll } = require('../controllers/usuarios.controller')

// New user
router.get('/usuarios/add', renderUserForm);

router.post('/usuarios/new-user', createNewUser);

// Get all users
router.get('/usuarios', renderUsersAll);

// Get all users in json
router.get('/allusuarios', renderUsers);

// Edit Users
router.get('/usuarios/edit/:id', renderEditForm);

router.put('/usuarios/edit/:id', updateUser);

// Delete Users
router.delete('/usuarios/delete/:id', deleteUser);

module.exports = router;