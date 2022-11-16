//Muestra el nuevo link si se esta logeado
//Caso logeado

if (localStorage.getItem('usuario') !== undefined && localStorage.getItem('usuario')) {

    const eliminar = document.getElementById('eliminar');
    eliminar.remove();

    const nuevoEnlace = document.createElement('A');

    nuevoEnlace.href = '/mi-cuenta';

    nuevoEnlace.textContent = 'Mi cuenta';

    nuevoEnlace.classList.add('navegacion__enlace');

    const navegacion = document.querySelector('.navegacion');
    navegacion.appendChild(nuevoEnlace);

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    let arr = usuario.name.split(' ');
    
    const quitarForm = document.getElementById('quitar');
    const quitarLink = document.getElementById('quitar2');
    
    if(arr[0] != 'admin'){
        quitarForm.remove();
        quitarLink.remove();
    }
}
// Caso no logeado
else {
    const quitarForm = document.getElementById('quitar');
    const quitarLink = document.getElementById('quitar2');
    quitarForm.remove();
    quitarLink.remove();
}

