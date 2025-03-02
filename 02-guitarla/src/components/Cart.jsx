import PropTypes from 'prop-types'

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, cartIsEmpty, cartTotal }) => {

    return (
        <div id="carrito" className="bg-white p-3">

            {
                cartIsEmpty ?
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
                                                        onClick={() => decreaseQuantity(guitar.id)}
                                                    >
                                                        -
                                                    </button>
                                                    {guitar.quantity}
                                                    <button
                                                        type="button"
                                                        className="btn btn-dark"
                                                        onClick={() => increaseQuantity(guitar.id)}
                                                    >
                                                        +
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger"
                                                        type="button"
                                                        onClick={() => removeFromCart(guitar.id)}
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                            <button
                                className="btn btn-dark w-100 mt-3 p-2"
                                onClick={clearCart}
                            >
                                Vaciar Carrito
                            </button>
                        </>
                    )
            }

        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    cartIsEmpty: PropTypes.bool.isRequired,
    cartTotal: PropTypes.number.isRequired
}

export default Cart