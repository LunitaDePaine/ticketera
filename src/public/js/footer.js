//Muestra el nuevo link si se esta logeado
if (localStorage.getItem('usuario') !== undefined && localStorage.getItem('usuario')) {

    const eliminar = document.getElementById('eliminar');
    eliminar.remove();

    const nuevoEnlace = document.createElement('A');

    nuevoEnlace.href = '/mi-cuenta';

    nuevoEnlace.textContent = 'Mi cuenta';

    nuevoEnlace.classList.add('navegacion__enlace');

    const navegacion = document.querySelector('.navegacion__footer');
    navegacion.appendChild(nuevoEnlace);
}