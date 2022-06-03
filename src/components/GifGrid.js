import React from "react";
import PropTypes from "prop-types";
import { useFetch } from "../hooks/useFetch";
import { GifGridItem } from "./GifGridItem";
export const GifGrid = ({ category }) => {
  const { data, loading } = useFetch(category);
  return (
    <ol>
      <div className="card-grid">
            {data.map(img => (
            <GifGridItem key={img.id} { ...img}/>
                ))}
            <div className="close">Close</div>
      </div>
    </ol>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};
