const usuario = JSON.parse(localStorage.getItem('usuario')); // Objeto usuario que tengo creado

const newPassword = document.getElementById('newPassword');
const editarUsuario = document.getElementById('editarUsuario');

editarUsuario.addEventListener('submit', e => {
    let nuevoUsuario = usuario;
    nuevoUsuario.password = newPassword.value;
    localStorage.removeItem('usuario');
    localStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
});



editarUsuario.href = "/usuarios/edit/" + usuario._id + "?_method=PUT"