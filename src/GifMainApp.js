import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory"; 
export const GifMainApp = () => {
  const [categories, setCategories] = useState(['The Simpsons', 'Rick y Morty']);
  return (
    <>
      <h2>Memes</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map(category => (
          <li>{category}</li>
        ))}
      </ol>
      
    </>
  );
};
