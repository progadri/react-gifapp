import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
  
    //? Aqui se define el valor por defecto que tendra el value del input;
    const [inputValue, setInputValue] = useState('');
  

    //? Esto sirve para capturar el valor que trae el input a través de la funcion onChange
    // const onInputChange = (e) => {
    //     console.log(e.target.value);
    //     setInputValue(e.target.value);
    // }

    //? aqui desestructuramos el event.target.value anterior para no tener que poner el event
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };


    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories( [...categories,+InputValue ] );
        onNewCategory( inputValue.trim() );
        // setCategories( categories =>  [...categories,inputValue ] );
        setInputValue('');
    }
  
    return (
        <form onSubmit = {onSubmit} >
                <input 
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    // onChange={ (e) => onInputChange(e)}
                    
                    //? Como el argumento que mandabamos a través de la función es el mismo se puede eliminar
                    onChange={onInputChange}
                />
        </form>

  )
}
