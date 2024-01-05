import PropTypes from 'prop-types';
import { useState } from 'react';

function AddCategory({ onAddCategory }) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // console.log(evt);
        setInputValue(target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (inputValue.length < 1) return;
        // console.log(inputValue);
        onAddCategory(inputValue.trim());
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}

export default AddCategory