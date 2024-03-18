import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Guitar from './components/Guitar'
import db from './data'

function App() {

  const [guitars,] = useState(db)

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {
            guitars.map((guitar) => (
              <Guitar
                key={guitar.id}
                name={guitar.name}
                image={guitar.image}
                description={guitar.description}
                price={guitar.price}
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
