import { describe, expect, test } from '@jest/globals';
import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas con async-await y Fetch', () => {
    test('debe de retornar el url de la imagen', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
        expect(typeof url).toBe('string');
    });
});
