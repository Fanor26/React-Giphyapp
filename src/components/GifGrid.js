import React from 'react';
import PropTypes from 'prop-types'
import { useFetch } from '../hooks/useFetch';
 export const GifGrid = ({category}) =>{
  
    const {data, loading} = useFetch(category);
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
 }
 GifGrid.propTypes = {
     category: PropTypes.string.isRequired
 }