
function mostrarAlerta() {
    alert("Hola Mundo");
}

function crearBoton() {
    const contenedor = document.querySelector('#contenedor');

    if(!contenedor) {
        console.error('No existe el contenedor');
        return;
    }

    const boton = document.createElement('button');
    boton.innerText = 'Click';
    boton.id = 'btn-click';
    boton.textContent = 'Click';
    contenedor.appendChild(boton);
}

module.exports = {
    mostrarAlerta,
    crearBoton
};