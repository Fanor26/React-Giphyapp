import React from 'react'
import useForm from '../hooks/useForm'
import PropTypes from 'prop-types'
export const AddCategory = ({setCategories}) => {
    const [form, handlerChangeform, handlerResetform] = useForm({search:''});
    const { search } = form;
    const handlerSubmit = (event) =>{
        event.preventDefault();
        if(search.trim().length > 2){
            alert(search);
        }

    }
    return (

        <form onSubmit={handlerSubmit}>
            <input  
            type='text' 
            name='search'
            value= {search}
            onChange={handlerChangeform}
             />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
} 
