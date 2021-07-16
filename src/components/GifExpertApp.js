import React, { useState } from "react";
import AddCategory from "./AddCategory.js";
import { GifGrid } from "./GifGrid.js";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["evangelion"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid 
            category={category}
            key={category}
            />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
