import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en el archivo 02-template-string.test.js', () => {

    test('getSaludo debe retornar Hola Eder', () => {

        const nombre = 'Eder';

        const message = getSaludo(nombre);

        expect(message).toBe('Hola ' + nombre);

    });

});