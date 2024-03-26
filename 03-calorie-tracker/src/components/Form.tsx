import categories from '../data'

const Form = () => {
    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category">Category: </label>
                <select
                    name="category"
                    id="category"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white outline-none focus:border-primary"
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
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity">Activity: </label>
                <input
                    type="text"
                    id='activity'
                    className='border border-slate-300 p-2 rounded-lg focus-within:outline-primary'
                    placeholder='Eg. orange juice, weights, salad...'
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories">Calories (cal): </label>
                <input
                    type="number"
                    id='calories'
                    className='border border-slate-300 p-2 rounded-lg focus-within:outline-primary'
                    placeholder='Eg. 200, 500'
                />
            </div>
        </form>
    )
}

export default Form