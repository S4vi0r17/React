const LoadingMessage = () => {
    return (
        <section
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: '250px', // Ajusta este valor al tamaño esperado del contenido
                minWidth: '300px',  // Ajusta este valor al tamaño esperado del contenido
                backgroundColor: '#f8f9fa' // Opcional: para visualizar mejor el área de carga
            }}
        >
            <h2 className="text-muted">Loading...</h2>
        </section>
    )
}

export default LoadingMessage
