
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

// Fila A
const A1 = document.getElementById('A1');
const A2 = document.getElementById('A2');
const A3 = document.getElementById('A3');
const A4 = document.getElementById('A4');
const A5 = document.getElementById('A5');
const A6 = document.getElementById('A6');
const A7 = document.getElementById('A7');
const A8 = document.getElementById('A8');
const A9 = document.getElementById('A9');
const A10 = document.getElementById('A10');

// Fila B
const B1 = document.getElementById('B1');
const B2 = document.getElementById('B2');
const B3 = document.getElementById('B3');
const B4 = document.getElementById('B4');
const B5 = document.getElementById('B5');
const B6 = document.getElementById('B6');
const B7 = document.getElementById('B7');
const B8 = document.getElementById('B8');
const B9 = document.getElementById('B9');
const B10 = document.getElementById('B10');

// Fila C
const C1 = document.getElementById('C1');
const C2 = document.getElementById('C2');
const C3 = document.getElementById('C3');
const C4 = document.getElementById('C4');
const C5 = document.getElementById('C5');
const C6 = document.getElementById('C6');
const C7 = document.getElementById('C7');
const C8 = document.getElementById('C8');
const C9 = document.getElementById('C9');
const C10 = document.getElementById('C10');

// Fila D
const D1 = document.getElementById('D1');
const D2 = document.getElementById('D2');
const D3 = document.getElementById('D3');
const D4 = document.getElementById('D4');
const D5 = document.getElementById('D5');
const D6 = document.getElementById('D6');
const D7 = document.getElementById('D7');
const D8 = document.getElementById('D8');
const D9 = document.getElementById('D9');
const D10 = document.getElementById('D10');

// Fila E
const E1 = document.getElementById('E1');
const E2 = document.getElementById('E2');
const E3 = document.getElementById('E3');
const E4 = document.getElementById('E4');
const E5 = document.getElementById('E5');
const E6 = document.getElementById('E6');
const E7 = document.getElementById('E7');
const E8 = document.getElementById('E8');
const E9 = document.getElementById('E9');
const E10 = document.getElementById('E10');

const comprarAsiento = document.getElementById('comprarAsiento');

//Fila A
A1.addEventListener('click', seleccionarAsiento);
A2.addEventListener('click', seleccionarAsiento);
A3.addEventListener('click', seleccionarAsiento);
A4.addEventListener('click', seleccionarAsiento);
A5.addEventListener('click', seleccionarAsiento);
A6.addEventListener('click', seleccionarAsiento);
A7.addEventListener('click', seleccionarAsiento);
A8.addEventListener('click', seleccionarAsiento);
A9.addEventListener('click', seleccionarAsiento);
A10.addEventListener('click', seleccionarAsiento);

//Fila B
B1.addEventListener('click', seleccionarAsiento);
B2.addEventListener('click', seleccionarAsiento);
B3.addEventListener('click', seleccionarAsiento);
B4.addEventListener('click', seleccionarAsiento);
B5.addEventListener('click', seleccionarAsiento);
B6.addEventListener('click', seleccionarAsiento);
B7.addEventListener('click', seleccionarAsiento);
B8.addEventListener('click', seleccionarAsiento);
B9.addEventListener('click', seleccionarAsiento);
B10.addEventListener('click', seleccionarAsiento);

//Fila C
C1.addEventListener('click', seleccionarAsiento);
C2.addEventListener('click', seleccionarAsiento);
C3.addEventListener('click', seleccionarAsiento);
C4.addEventListener('click', seleccionarAsiento);
C5.addEventListener('click', seleccionarAsiento);
C6.addEventListener('click', seleccionarAsiento);
C7.addEventListener('click', seleccionarAsiento);
C8.addEventListener('click', seleccionarAsiento);
C9.addEventListener('click', seleccionarAsiento);
C10.addEventListener('click', seleccionarAsiento);

//Fila D
D1.addEventListener('click', seleccionarAsiento);
D2.addEventListener('click', seleccionarAsiento);
D3.addEventListener('click', seleccionarAsiento);
D4.addEventListener('click', seleccionarAsiento);
D5.addEventListener('click', seleccionarAsiento);
D6.addEventListener('click', seleccionarAsiento);
D7.addEventListener('click', seleccionarAsiento);
D8.addEventListener('click', seleccionarAsiento);
D9.addEventListener('click', seleccionarAsiento);
D10.addEventListener('click', seleccionarAsiento);

//Fila E
E1.addEventListener('click', seleccionarAsiento);
E2.addEventListener('click', seleccionarAsiento);
E3.addEventListener('click', seleccionarAsiento);
E4.addEventListener('click', seleccionarAsiento);
E5.addEventListener('click', seleccionarAsiento);
E6.addEventListener('click', seleccionarAsiento);
E7.addEventListener('click', seleccionarAsiento);
E8.addEventListener('click', seleccionarAsiento);
E9.addEventListener('click', seleccionarAsiento);
E10.addEventListener('click', seleccionarAsiento);

function seleccionarAsiento(e) {
    const asiento = e.target.id;
    switch (asiento) {
        case 'A1':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'A2':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'A3':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'A4':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'A5':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'A6':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'A7':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'A8':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'A9':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'A10':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'B1':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'B2':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'B3':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'B4':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'B5':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'B6':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'B7':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'B8':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'B9':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'B10':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'C1':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'C2':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'C3':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'C4':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'C5':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'C6':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'C7':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'C8':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'C9':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'C10':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'D1':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'D2':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'D3':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'D4':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'D5':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'D6':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'D7':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'D8':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'D9':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'D10':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'E1':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'E2':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'E3':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'E4':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'E5':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'E6':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'E7':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'E8':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'E9':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        case 'E10':
            // console.log(asiento);
            marcarAsiento(asiento);
            break;
        default:
            console.log("Ningun Asiento seleccionado");
    }
}

// Asientos Seleccionados para mandar a la db
let asientosSeleccionados = '';

let UrlActual = window.location.href.split('/');
const Url = 'http://localhost:4000/Allpeliculas';
const idPelicula = UrlActual[5];
let peliculaActual;
let asientosOcupados;
let asientosPersonas;
const usuario = JSON.parse(localStorage.getItem('usuario'));

fetch(Url).then(data => { return data.json() }).then(res => {
    setTimeout((e) => {
        let arrayPeliculas = res;

        arrayPeliculas.forEach(pelicula => {
            //console.log(pelicula._id);
            if (pelicula._id == idPelicula) {
                peliculaActual = pelicula;
            }
        })

        if (peliculaActual.seats != '') {
            asientosOcupados = peliculaActual.seats.split(', ');
            asientosPersonas = peliculaActual.people.split(', ');

            console.log("Asientos ocupados: " + asientosOcupados);
            console.log("Asientos personas: " + asientosPersonas);
            marcarAsientosOcupados(asientosOcupados);
        }
        else {
            asientosOcupados = [];
            asientosPersonas = [];
        }
    }, 1000)
});

function marcarAsiento(asiento, e) {
    if (asientosOcupados.includes(asiento)) {
        console.log("Asiento ocupado")
    }
    else {
        console.log('Insertado')
        asientosOcupados.push(asiento);
        asientosPersonas.push(usuario._id);
        //marcarAsientosOcupados(asientosOcupados);
        marcarAsientosSeleccionados(asientosOcupados);
    }
    // console.log('Asientos seleccionados: ' + asientosSeleccionados)
    console.log('Asientos ocupados: ' + asientosOcupados)
}

function marcarAsientosSeleccionados(asientosOcupados, evento) {
    asientosOcupados.forEach(asiento => {
        const ocupado = document.getElementById(asiento);
        ocupado.classList.remove('asiento');
        ocupado.classList.add('indice2');
    })
}

function marcarAsientosOcupados(asientosOcupados, evento) {
    asientosOcupados.forEach(asiento => {
        const ocupado = document.getElementById(asiento);
        ocupado.classList.remove('asiento');
        ocupado.classList.add('indice3');
    })
}

comprarAsiento.addEventListener('click', function (e) {
    //e.preventDefault();
    const personas = document.getElementById('personas');
    let idPersona = '';

    asientosOcupados.forEach(asiento => {
        if(asientosSeleccionados == ''){
            asientosSeleccionados = asiento;
        }
        else{
            asientosSeleccionados = asientosSeleccionados + ', ' + asiento;
        }
    });

    asientosPersonas.forEach(persona => {
        if(idPersona == ''){
            idPersona = persona;
        }
        else{
            idPersona = idPersona + ', ' + persona;
        }
    });

    console.log(idPersona);
    console.log(asientosSeleccionados);

    personas.value = idPersona;
    comprarAsiento.value = asientosSeleccionados;

});
