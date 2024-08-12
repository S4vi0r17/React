import React from 'react';

export const Hijo = React.memo(({ numero, incrementar }) => {
    console.log('  Me volví a generar :(  ');

    return (
        <button
            className='btn btn-outline-primary'
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    )
});

Hijo.displayName = 'Hijo';
