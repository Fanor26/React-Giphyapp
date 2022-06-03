import {useState, useEffect} from 'react';
import {serviceGifs} from '../helpers/serviceGifs'
export const useFetch = ( category ) =>{
    const [state, setState] = useState({data:[], loading: true});
    
    useEffect(() => {
        serviceGifs(category).then(data => {
            console.log(data);
            setState({
                data,
                loading: false,
            })
        });

    },[category]);
    return state;
}