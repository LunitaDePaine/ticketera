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

const Url = 'http://localhost:4000/Allpeliculas';
let peliculas = [];

// fetch(Url).then(data => { return data.json() }).then(res => {
//     console.log(res);
//     setTimeout(() => {
//         peliculas = res;
//         console.log(peliculas);

//         for (let i = 0; i < peliculas.length; i++) {
//             const titulo = 'tituloPelicula' + i;
//             const descripcion = 'descripcionPelicula' + i;

//             titulo.innerHTML = peliculas[i].name;
//         }
//     }, 1000);
// });

// Pelicula 1
const tituloPelicula1 = document.getElementById('tituloPelicula1');
const descripcionPelicula1 = document.getElementById('descripcionPelicula1');

// Pelicula 2
const tituloPelicula2 = document.getElementById('tituloPelicula2');
const descripcionPelicula2 = document.getElementById('descripcionPelicula2');

// Pelicula 3
const tituloPelicula3 = document.getElementById('tituloPelicula3');
const descripcionPelicula3 = document.getElementById('descripcionPelicula3');

// Pelicula 4
const tituloPelicula4 = document.getElementById('tituloPelicula4');
const descripcionPelicula4 = document.getElementById('descripcionPelicula4');

// Pelicula 5
const tituloPelicula5 = document.getElementById('tituloPelicula5');
const descripcionPelicula5 = document.getElementById('descripcionPelicula5');

// Pelicula 6
const tituloPelicula6 = document.getElementById('tituloPelicula6');
const descripcionPelicula6 = document.getElementById('descripcionPelicula6');

setTimeout(() => {

    //tituloPelicula1.innerHTML = peliculas[0].name;

    for(let i = 0; i < peliculas.length; i++){
        const titulo = document.getElementById('tituloPelicula' + (i + 1));
        const descripcion = document.getElementById('descripcionPelicula' + (i + 1));

        titulo.innerHTML = peliculas[i].name;
        descripcion.innerHTML = peliculas[i].description;
    }

},1500);

localStorage.removeItem('asientos');

const botonCrearPelicula = document.getElementById('botonCrearPelicula');

if (localStorage.getItem('usuario') !== undefined && localStorage.getItem('usuario')) {     
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    let arr = usuario.name.split(' ');

    if(arr[0] != 'admin'){
        botonCrearPelicula.remove();
    }
}
else{
    botonCrearPelicula.remove();
}
// Caso no logeado













