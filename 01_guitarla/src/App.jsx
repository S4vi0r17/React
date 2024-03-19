import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Guitar from './components/Guitar'
import db from './data'

function App() {

  const [guitars,] = useState(db)
  const [cart, setCart] = useState([])

  const MAX_ITEMS = 5
  const MIN_ITEMS = 1

  const addToCart = (item) => {
    let itemIndex = cart.findIndex(i => i.id === item.id)

    if (itemIndex >= 0) {
      if (cart[itemIndex].quantity >= MAX_ITEMS) return
      let updatedCart = [...cart]
      updatedCart[itemIndex].quantity++
      setCart(updatedCart)
    } else {
      let newItem = { ...item, quantity: 1 }
      setCart([...cart, newItem])
    }
  }

  const removeFromCart = (id) => {
    setCart(prevCart => (
      prevCart.filter(item => item.id != id)
    ))
  }

  const increaseQuantity = (id) => {
    let newQuantity = cart.map((guitar) => {
      // if(guitar.id === id && guitar.quantity < 5)
      if (guitar.id !== id || guitar.quantity >= MAX_ITEMS) return guitar
      guitar.quantity++
      return guitar
    })
    setCart(newQuantity)
  }

  const decreaseQuantity = (id) => {
    let newQuantity = cart.map((guitar) => {
      // if (guitar.id === id && guitar.quantity > 1)
      if (guitar.id !== id || guitar.quantity <= MIN_ITEMS) return guitar
      guitar.quantity--
      return guitar
    })
    setCart(newQuantity)
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {
            guitars.map((guitar) => (
              <Guitar
                key={guitar.id}
                guitar={guitar}
                addToCart={addToCart}
              />
            )
            )
          }

        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
