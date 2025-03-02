import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {
    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        (num) => {
            setValor(prev => prev + num);
        },
        []
    );

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">Padre</h1>
            <p className="fs-4">Total: <span className="fw-bold">{valor}</span></p>

            <hr className="mb-4" />

            <div className="d-flex justify-content-center gap-3">
                {numeros.map(n => (
                    <Hijo
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))}
            </div>
        </div>
    )
}
