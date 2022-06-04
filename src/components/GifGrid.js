import React from "react";
import PropTypes from "prop-types";
import { useFetch } from "../hooks/useFetch";
import { GifGridItem } from "./GifGridItem";
export const GifGrid = ({ category, removeCategory }) => {
  const { data, loading } = useFetch(category);
  return (
    <ol>
      <div className="cardContainer">
      <div className="card-grid">
      
            {data.map(img => (
            <GifGridItem key={img.id} { ...img}/>
                ))}
                
            <div className="close" onClick={() => {removeCategory(category)}}>Close</div>
            </div>
      </div>
    </ol>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};
