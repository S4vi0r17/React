import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function Giphy() {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        // setCategories([...categories, 'HunterXHunter']);
        setCategories(cat => [newCategory, ...cat])
    }

    return (
        <>
            <h1>Giphy</h1>

            <AddCategory
                onAddCategory={onAddCategory}
            />


            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}


            <button onClick={onAddCategory}>Add</button>
        </>
    )
}

export default Giphy