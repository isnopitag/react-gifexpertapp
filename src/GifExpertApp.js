import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory.js";
import { GifGrid } from "./components/GifGrid.js";

export const GifExpertApp = ( {defaultCategories = []} ) => {
  // const [categories, setCategories] = useState(["evangelion"]);
  const [categories, setCategories] = useState(defaultCategories);

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


