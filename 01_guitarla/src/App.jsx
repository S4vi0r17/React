import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Guitar from './components/Guitar'
import db from './data'

function App() {

  const [guitars,] = useState(db)
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    let itemIndex = cart.findIndex(i => i.id === item.id)

    if (itemIndex >= 0) {
      let updatedCart = [...cart]
      updatedCart[itemIndex].quantity++
      setCart(updatedCart)
    } else {
      let newItem = { ...item, quantity: 1 }
      setCart([...cart, newItem])
    }
  }

  return (
    <>
      <Header cart={cart} />

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
