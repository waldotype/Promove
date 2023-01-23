let imgCarrusel = document.getElementById("carrusel")

function cambiarimgcarrusel(numeroimg){
    let rutaimg=`Imagenes/carrusel/${numeroimg}.jpg`
    imgCarrusel.setAttribute("src",rutaimg)
}

document.addEventListener('DOMContentLoaded', () => {
    let cantidadimg=6
    let numero=1

    if (numero > cantidadimg){
        numero = 1
     }

    numero=numero+1

    setTimeout(
        cambiarimgcarrusel(numeroimg)
        , 1000)
    
});

