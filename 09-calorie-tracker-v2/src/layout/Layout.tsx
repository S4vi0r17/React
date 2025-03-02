import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main>
            <header className="bg-gray-500 text-white px-10 py-3">
                <nav className="w-4/5 mx-auto flex justify-between items-center">

                    <h1 className="text-center text-lg font-medium uppercase"><Link to={'/'}>Calorie Tracker</Link></h1>

                    <div className="flex justify-between gap-5">
                        <Link to={'form'}>Add</Link>
                        <button>Restart</button>
                    </div>
                </nav>
            </header>
            <Outlet />
        </main>
    )
}

export default Layout
