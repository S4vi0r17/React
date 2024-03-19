import PropTypes from 'prop-types'
import { useMemo } from 'react'

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }) => {

    const cartIsEmpty = useMemo(() => cart.length === 0, [cart])
    // useMemo: It is a hook that allows you to memorize the result of a function and only re-execute it if one of its dependencies changes. It is useful when you have a function that is computationally expensive and you only want to execute it when necessary. In VUE, this is similar to a computed property.

    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

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
    clearCart: PropTypes.func.isRequired
}

export default Cart