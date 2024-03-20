import MenuItem from './components/MenuItem'
import { menuItems } from './data'
import useOrder from './hooks/useOrder'
import OrderContent from './components/OrderContent';

const App = () => {

    const { order, addItem, removeItem } = useOrder()

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
                            <MenuItem
                                key={item.id}
                                item={item}
                                addItem={addItem}
                            />
                        ))}
                    </div>

                </div>
                <div className="p-5">

                    <h2 className=" font-bold text-4xl text-center text-secondary2">Summary</h2>
                    <div className='mt-10 p-5 border border-dashed border-secondary2 rounded-lg space-y-10'>
                        <OrderContent
                            order={order}
                            removeItem={removeItem}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
