const cuenta = {
    email: '',
    password: ''
}

const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const Url = 'http://localhost:4000/Allusuarios';
let logeado = false;
let datosUsuarioLogeado;

email.addEventListener('change', leerTexto);
password.addEventListener('change', leerTexto);

login.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Validar el formualrio 

    const { email, password } = cuenta;
    let datosUsuario;

    //Termina el proceso en caso de estar algun campo vacio
    if (email === '' || password === '') {

        mostrarError('Todos los campos son obligatorios');
        return;
    }
    else {
        mostrarMensaje('Verificando Credenciales...');
    }

    //Url = Url + "/6340a554768be91278782f47"

    let array = [];

    // Guardo todos los perfiles que hay 
    fetch(Url).then(data => { return data.json() }).then(res => {
        //console.log(res);
        array = res;
    });

    setTimeout(() => {
        // Verifico si hay algun usuario con las mismas credenciales
        const resultadoNombre = array.some(usuario => {
            return usuario.email == email;
        });

        if (resultadoNombre === true) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].email == email && array[i].password == password) {
                    logeado = true;
                    datosUsuario = array[i];
                    break;
                }
                else {
                    logeado = false;
                }
            }
        }
        // logeado es lo que me indica si estan bien digitados los datos de una cuenta
        //console.log(logeado);
        if (logeado === true) {
            if (datosUsuario.sex == 'hombre' || datosUsuario.sex == 'Hombre') {
                console.log('Bienvenido ' + datosUsuario.name);
                mostrarAceptado('Bienvenido ' + datosUsuario.name);
            }
            else if (datosUsuario.sex == 'mujer' || datosUsuario.sex == 'Mujer') {
                console.log('Bienvenida ' + datosUsuario.name);
                mostrarAceptado('Bienvenida ' + datosUsuario.name);
            }
            else {
                console.log('Bienvenid@ ' + datosUsuario.name);
                mostrarAceptado('Bienvenidx ' + datosUsuario.name);
            }
        }
        else {
            console.log("La contraseña ingresada no está asociada a ningun correo");
            mostrarError("La contraseña ingresada no está asociada a ningun correo");
            return;
        }

        localStorage.setItem('usuario', JSON.stringify(datosUsuario)); // Metemos los datos del usuario en el localStorage

        //Muestra el nuevo link si se esta logeado
        if (localStorage.getItem('usuario') !== undefined && localStorage.getItem('usuario')) {

            const eliminar = document.getElementById('eliminar');
            eliminar.remove();

            const nuevoEnlace = document.createElement('A');

            nuevoEnlace.href = 'mi-cuenta.html';

            nuevoEnlace.textContent = 'Mi cuenta';

            nuevoEnlace.classList.add('navegacion__enlace');

            const navegacion = document.querySelector('.navegacion');
            navegacion.appendChild(nuevoEnlace);
        }

        setTimeout(function () {
            window.location.href = "/mi-cuenta";
        }, 1500);
    }, 2000)
});


function leerTexto(e) {
    // Hace que se guarde al hacer un cambio en el area seleccionada

    cuenta[e.target.id] = e.target.value;
}

function mostrarAceptado(mensaje) {
    const aceptado = document.createElement('P');
    aceptado.textContent = mensaje;
    aceptado.classList.add('aceptado');

    login.appendChild(aceptado);

    setTimeout(() => {
        aceptado.remove();
    }, 2000);
}

function mostrarMensaje(mensaje) {
    const solicitud = document.createElement('P');
    solicitud.textContent = mensaje;
    solicitud.classList.add('solicitud');

    login.appendChild(solicitud);

    setTimeout(() => {
        solicitud.remove();
    }, 2000);
}

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    login.appendChild(error);

    // Desaparezca despues de 4 segundos
    setTimeout(() => {
        error.remove();
    }, 4000)
}
