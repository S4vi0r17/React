import PropTypes from 'prop-types'

const Cart = ({ cart }) => {

    const cartIsEmpty = () => cart.length === 0

    const cartTotal = () => cart.reduce((total, item) => total + (item.quantity * item.price), 0)

    return (
        <div id="carrito" className="bg-white p-3">

            {
                cartIsEmpty() ?
                    (
                        <p className="text-center">El carrito esta vacio</p>
                    ) : (
                        <>
                            <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map(guitar => (
                                            <tr key={guitar.id} >
                                                <td>
                                                    <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt={`${guitar.name} Guitar`} />
                                                </td>
                                                <td>{guitar.name}</td>
                                                <td className="fw-bold">
                                                    ${guitar.price}
                                                </td>
                                                <td className="flex align-items-start gap-4">
                                                    <button
                                                        type="button"
                                                        className="btn btn-dark"
                                                    >
                                                        -
                                                    </button>
                                                    {guitar.quantity}
                                                    <button
                                                        type="button"
                                                        className="btn btn-dark"
                                                    >
                                                        +
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger"
                                                        type="button"
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal()}</span></p>
                        </>
                    )
            }




            <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart