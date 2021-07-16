import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handeInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if( inputValue.trim().length > 2 ){
          setCategories( c => [inputValue,...c])
          setInputValue('');
      }
  };
  return (
    <form onSubmit={ handleSubmit}>
      <input 
        type="text"
        value={inputValue} 
        onChange={handeInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func,
}

export default AddCategory;
