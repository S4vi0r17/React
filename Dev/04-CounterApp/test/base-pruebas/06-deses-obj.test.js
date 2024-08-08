import { describe, test, expect } from '@jest/globals';
import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en el archivo 06-deses-obj.js', () => {

    test('debe retornar un string y un numero', () => {

        const testUser = {
            nombreClave: "Ironman",
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232,
            },
        }

        const user = usContext({
            nombre: "Tony Stark",
            edad: 45,
            clave: "Ironman",
        });

        expect(testUser).toEqual(user);
    });

});