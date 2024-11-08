/**
 * @jest-environment jsdom
*/

const { mostrarAlerta, crearBoton } = require('../index');

describe('Pruebas en index.js', () => {
    beforeAll(() => {
        jest.spyOn(window, 'alert').mockImplementation(() => { });
        jest.spyOn(console, 'error').mockImplementation(() => { });
    });
    test('debe mostrar un alerta', () => {
        expect(window.alert).not.toHaveBeenCalled();
        mostrarAlerta();
        expect(window.alert).toHaveBeenCalledWith('Hola Mundo');
    });
    test('debe crear un botón', () => {
        crearBoton();
        expect(console.error).toHaveBeenCalled();
        expect(document.querySelector('#contenedor')).toBeNull();

        document.body.innerHTML = '<div id="contenedor"></div>';
        crearBoton();
        expect(document.querySelector('#contenedor').innerHTML).toContain('<button id="btn-click"></button');
    });
});