import PropTypes from 'prop-types'
import Cart from "./Cart"

const Header = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, cartIsEmpty, cartTotal }) => {
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="carrito"
                        >
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                            <Cart
                                cart={cart}
                                removeFromCart={removeFromCart}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                clearCart={clearCart}
                                cartIsEmpty={cartIsEmpty}
                                cartTotal={cartTotal}
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    cartIsEmpty: PropTypes.bool.isRequired,
    cartTotal: PropTypes.number.isRequired
}

export default Header