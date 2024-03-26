import categories from "../data"

const Form = () => {
    return (
        <>
            <section className="py-20 px-5 max-w-4xl mx-auto">
                <form className="space-y-5 bg-white shadow p-10 rounded-lg">
                    <div className="grid grid-cols-1 gap-3">
                        <label htmlFor="category">Categories: </label>
                        <select
                            name="category"
                            id="category"
                            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                        >
                            {
                                categories.map(category => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))
                            }
                        </select>
                        <div className="grid grid-cols-1 gap-3">
                            <label htmlFor="activity">Activity: </label>
                            <input
                                type="text"
                                id="activity"
                                className="border border-slate-300 p-2 rounded-lg"
                                placeholder="Eg. chicken, salad, soda..."
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            <label htmlFor="calories">Catories (cal): </label>
                            <input
                                type="number"
                                id="calories"
                                className="border border-slate-300 p-2 rounded-lg"
                                placeholder="Eg. 300, 500..."
                            />
                        </div>
                        <input
                            type="submit"
                            className="bg-gray-500 hover:bg-gray-600 w-full p-2 font-medium uppercase text-white cursor-pointer"
                            value='Add activity'
                        />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form
