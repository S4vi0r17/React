import { describe, test, expect } from '@jest/globals';
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en el archivo 05-funciones.js', () => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: "ABC123",
            username: "El_Papi1502",
        }

        const user = getUser();

        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Eder';

        const testUser = {
            uid: "ABC567",
            username: nombre,
        }

        const user = getUsuarioActivo(nombre);

        expect(testUser).toEqual(user);
    });

});