import { useState } from 'react'
import {AddCategory, GifGrid} from './components';

function Giphy() {

    const [categories, setCategories] = useState(['Bleach']);

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

            {categories.map((category) => 
                    (
                        <GifGrid key={category} category={category} />
                    )
                )
            }
        </>
    )
}

export default Giphy