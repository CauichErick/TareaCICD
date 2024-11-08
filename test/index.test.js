/**
 * @jest-environment jsdom
*/

const { mostrarAlerta } = require('../index');

describe('Pruebas en index.js', () => {
    beforeAll(() => {
        jest.spyOn(window, 'alert').mockImplementation(() => { });
    });
    test('debe mostrar un alerta', () => {
        expect(window.alert).not.toHaveBeenCalled();
        mostrarAlerta();
        expect(window.alert).toHaveBeenCalledWith('Hola Mundo');
    });
});