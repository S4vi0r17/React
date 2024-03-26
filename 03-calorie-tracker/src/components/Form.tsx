import { ChangeEvent, useState } from 'react'
import { Activity } from '../interfaces'
import categories from '../data'

const Form = () => {

    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const isNumber = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumber ? +e.target.value : e.target.value
        })
    }

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
                    value={activity.category}
                    onChange={handleChange}
                // onChange={e => setActivity({ ...activity, category: +e.target.value })}
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
                <label htmlFor="name">Activity: </label>
                <input
                    type="text"
                    id='name'
                    className='border border-slate-300 p-2 rounded-lg focus-within:outline-primary'
                    placeholder='Eg. orange juice, weights, salad...'
                    value={activity.name}
                    onChange={handleChange}
                // onChange={e => setActivity({ ...activity, name: e.target.value })}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories">Calories (cal): </label>
                <input
                    type="number"
                    id='calories'
                    className='border border-slate-300 p-2 rounded-lg focus-within:outline-primary'
                    placeholder='Eg. 200, 500'
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>
            <input
                type="submit"
                className='bg-secondary-200 hover:bg-primary w-full p-2 font-bold uppercase text-white cursor-pointer transition-colors'
                value='Add Activity'
            />
        </form>
    )
}

export default Form