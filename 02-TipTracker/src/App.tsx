import MenuItem from './components/MenuItem'
import { menuItems } from './data'

const App = () => {
  return (
    <>
      <header className="bg-primary py-5">
        <h1 className="text-center text-5xl font-bold font-title">Tip Tracker</h1>
      </header>
      <main className=" max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div className="p-5">

          <h2 className="font-bold text-4xl text-center text-secondary2">Menu</h2>

          <div className="mt-10 space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>

        </div>
        <div className="p-5">

          <h2 className="font-bold text-4xl text-center text-secondary2">Summary</h2>

        </div>
      </main>
    </>
  )
}

export default App
