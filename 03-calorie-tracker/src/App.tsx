import Form from "./components/Form"

const App = () => {
    return (
        <>
            <header className="bg-secondary-200 py-3">
                <div className="max-w-4xl mx-auto flex justify-between">
                    {/* <h1 className="text-center text-lg font-bold text-white uppercase">
                        Calorie Counter
                    </h1> */}
                    <img src='/favicon.svg' alt="logo image" className="size-16" />
                    <button>
                        a
                    </button>
                </div>
            </header>

            <section className="bg-secondary-100 py-20 px-5">
                <div className="max-w-4xl mx-auto">
                    <Form />
                </div>
            </section>
        </>
    )
}

export default App