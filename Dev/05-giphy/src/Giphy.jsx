import { useState } from 'react'
import AddCategory from './components/AddCategory';

function Giphy() {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        // setCategories([...categories, 'HunterXHunter']);
        setCategories(cat => [...cat, newCategory])
    }

    return (
        <>
            <h1>Giphy</h1>

            <AddCategory onAddCategory={onAddCategory} />

            <ol>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ol>

            <button onClick={onAddCategory}>Add</button>
        </>
    )
}

export default Giphy