import React from 'react'
import useForm from '../hooks/useForm'
export const AddCategory = () => {
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
