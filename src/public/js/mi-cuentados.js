const Url = 'http://localhost:4000/Allpeliculas';
let peliculas;
let boletos = [];
const usuario = JSON.parse(localStorage.getItem('usuario'));

fetch(Url).then(data => { return data.json() }).then(res => {
    peliculas = res;
    verPeliculas();
});



function verPeliculas(e) {
    // console.log(peliculas);
    // console.log(usuario);

    peliculas.forEach(pelicula => {
        let personas = [];
        personas = pelicula.people.split(', ');
        console.log(personas);
        if (personas.includes(usuario._id)) {
            let cant = 0;
            for(let i = 0; i < personas.length; i++){
                if(personas[i] == usuario._id){
                    cant++;
                }
            }

            const nuevoBoleto = document.createElement('div');
            nuevoBoleto.classList.add('boletos');
            const contenedorEvento = document.getElementById('contenedor-boletos');
            contenedorEvento.appendChild(nuevoBoleto);

            const cuentaPeliImagen = document.createElement('img');
            cuentaPeliImagen.classList.add('cuenta-peli-img');
            nuevoBoleto.appendChild(cuentaPeliImagen);

            cuentaPeliImagen.src = pelicula.image;

            const boletosDesc = document.createElement('div');
            boletosDesc.classList.add('boletos-desc');
            nuevoBoleto.appendChild(boletosDesc);

            const boletoTitulo = document.createElement('h4');
            boletoTitulo.classList.add('boleto__titulo');
            boletosDesc.appendChild(boletoTitulo);

            boletoTitulo.textContent = pelicula.name;

            const boletoText = document.createElement('p');
            boletoText.classList.add('boleto__text');
            boletosDesc.appendChild(boletoText);

            boletoText.textContent = 'Cantidad: ';

            const boletoCant = document.createElement('p');
            boletoCant.classList.add('boleto__cant');
            boletosDesc.appendChild(boletoCant);

            boletoCant.textContent = cant;
        }
    });

}





// const nuevoBoleto = document.createElement('div');
// nuevoBoleto.classList.add('boletos');
// const contenedorEvento = document.getElementById('contenedor-boletos');
// contenedorEvento.appendChild(nuevoBoleto);

// const cuentaPeliImagen = document.createElement('img');
// cuentaPeliImagen.classList.add('cuenta-peli-img');
// nuevoBoleto.appendChild(cuentaPeliImagen);

// cuentaPeliImagen.src = dato.image;

// const boletosDesc = document.createElement('div');
// boletosDesc.classList.add('boletos-desc');
// nuevoBoleto.appendChild(boletosDesc);

// const boletoTitulo = document.createElement('h4');
// boletoTitulo.classList.add('boleto__titulo');
// boletosDesc.appendChild(boletoTitulo);

// boletoTitulo.textContent = dato.pelicula;