const usuarioGuardado = JSON.parse(localStorage.getItem('usuario')); // Objeto usuario que tengo creado
//console.log(usuarioGuardado);

const nombre = document.getElementById('name');
const correo = document.getElementById('email');
const cerrar = document.getElementById('cerrar');

nombre.innerHTML = usuarioGuardado.name;
email.innerHTML = usuarioGuardado.email;


//Muestra el nuevo link si se esta logeado
if (localStorage.getItem('usuario') !== undefined && localStorage.getItem('usuario')) {

    const eliminar = document.getElementById('eliminar');
    eliminar.remove();
    const nuevoEnlace = document.createElement('A');

    nuevoEnlace.href = '/mi-cuenta';

    nuevoEnlace.textContent = 'Mi cuenta';

    nuevoEnlace.classList.add('navegacion__enlace');

    const navegacion = document.querySelector('.navegacion');
    navegacion.appendChild(nuevoEnlace);
}

cerrar.addEventListener('submit', function(evento){
    evento.preventDefault();

    mostrarMensaje('Cerrando Sesión');

    localStorage.removeItem('usuario');    

    setTimeout(function () {
        window.location.href = "/";
    }, 1500);
});

function mostrarMensaje(mensaje) {
    const solicitud = document.createElement('P');
    solicitud.textContent = mensaje;
    solicitud.classList.add('solicitud');

    cerrar.appendChild(solicitud);

    setTimeout(() => {
        solicitud.remove();
    }, 2000);
}



const cambiarContrasenha = document.getElementById('cambiar');

cambiarContrasenha.href = "/usuarios/edit/" + usuarioGuardado._id + "?_method=PUT"