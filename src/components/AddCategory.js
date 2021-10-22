import React, {useState} from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');
    
    //e de evento
    const handleInputChange= ( e ) => {
        setinputValue( e.target.value );
    } 

    const handleSubmit = (e) => {
        e.preventDefault(); //para prevenir el comportamiento por dfecto del form
        
        //el if es para poner la condicion de que tienen que escribir algo en recuadro del input, que si esta vacio no permita ingresar el vacio a la lista
        if(inputValue.trim().length > 2){
         setCategories(cates => [ inputValue, ...cates ]);  
         setinputValue(''); 
        }

        // console.log('submit hecho')
        
    }


    return (
        //el form es un agrupador por lo que no necesito meterlo en fragmentos <></>
        //el form tiene un comportamiento por defecto que es que cuando uno unde enter es como si refrescara la pagina y eso ya no se usa, para prevenir este comportamiento le pongo: form onSubmit={handleSubmit}
        //el primer argumento del onSubmit es el e 
        <form onSubmit={handleSubmit}>
             <input 
               type="text"
               value={inputValue}
               onChange={handleInputChange}
            />
        </form>
           
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
