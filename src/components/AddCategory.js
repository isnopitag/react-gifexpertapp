import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handeInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Handle Submit', inputValue);
    if (inputValue.trim() === "conejinga") {
      setCategories((c) => ["bunny", ...c]);
      alert("Te quiero mucho mi conejita 🐇");
      setInputValue("");
    } else {
      if (inputValue.trim().length > 2) {
        setCategories((c) => [inputValue, ...c]);
        setInputValue("");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>

      <p>{inputValue}</p>
      <input type="text" value={inputValue} onChange={handeInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
