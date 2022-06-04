import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid' ;
export const GifMainApp = () => {
  const [categories, setCategories] = useState(['The Simpsons', 'Rick y Morty']);
  const removeCategory = (id) => {
    const newCategories = categories.filter(item => item != id);
    setCategories(newCategories);
  };
  return (
    <>
      <h2>Memes</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
         
          <GifGrid category={category} removeCategory={removeCategory}/>
  ))}
      </ol>
      
    </>
  );
};
