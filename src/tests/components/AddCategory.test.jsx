import {fireEvent, render, screen} from '@testing-library/react'
import { AddCategory } from '../../components/AddCategory'

describe('1. Pruebas en AddCategory', () => {
    


test('1.1. Debe de cambiar el valor de la caja de texto', () => { 

render( <AddCategory onNewCategory={ ()=> {} }/>);

// # extraemos el valor del input
const input = screen.getByRole('textbox');

// # Disparamos el evento del input, seleccionando el input y eviando el valor del evento target.value del input
fireEvent.input( input, { target: {value:'Adrian'} }  );

// # Comparamos los valores
expect(input.value).toBe('Adrian');


 });

 // * TEST 2
test('1.2 Debe de llamar onNewCategory si el input tiene un valor', () => { 
    
    const inputValue = 'Adrian';
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory }/>);

    const input = screen.getByRole('textbox');

    //# Para encontrar el formulario se le añade un aria-label con nombre de form
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: {value: inputValue} } );
    fireEvent.submit( form );

    expect( input.value ).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith( inputValue );
    // expect(onNewCategory).toHaveBeenCalledWith( inputValue + '!' );
 });

//* TEST 3
//- en esta prueba no definimos el input para que se llame a la funcion sin valor en el formulario
test('1.3 No debe de llamar el onNewCategory si el input esta vacio ', () => { 
    
    
    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={ onNewCategory }/>);

    const form = screen.getByRole('form');
    fireEvent.submit( form );

    // expect(onNewCategory).toHaveBeenCalledWith( inputValue );
    
    expect(onNewCategory).not.toHaveBeenCalled( );
    expect(onNewCategory).toHaveBeenCalledTimes(0);


    screen.debug();

 })



})