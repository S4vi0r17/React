import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRef, useState } from 'react';

function AddCategory({ onAddCategory }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onInputChange = ({ target }) => {
    // console.log(evt);
    setInputValue(target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (inputValue.length < 1) return;
    // console.log(inputValue);
    onAddCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};

export default AddCategory;
