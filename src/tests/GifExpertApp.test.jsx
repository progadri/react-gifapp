import {fireEvent,render, screen} from '@testing-library/react';
import { AddCategory } from '../components';
import { GiftExpertApp } from '../GiftExpertApp';

describe('Pruebas en <GifExpertApp', () => {
  
    const category = 'Adrian';
    
    test('1.1 ', () => { 
        
        render( <GiftExpertApp onAddCategory={category}/>);
        
        //- extraemos el valor del input
        const input = screen.getByRole('textbox');
        
        //- Disparamos el evento del input, seleccionando el input y eviando el valor del evento target.value del input
        fireEvent.input( input, { target: {value:'Adrian'} }  );
        
        //- Comparamos los valores
        expect(input.value).toBe('Adrian');
        
        

     });

     test('1.2. Pruebas sin terminar en el componente para ver el envio del formulario', () => { 
        
        const inputValue = 'Adrian';
        const onNewCategory = jest.fn();
    

        // render( <GiftExpertApp onAddCategory={category}/>);

        render( <AddCategory onNewCategory={ onNewCategory }/>);
    
        const input = screen.getByRole('textbox');
    
        //- Para encontrar el formulario se le añade un aria-label con nombre de form
        const form = screen.getByRole('form');
    
        //- Se añade el valor en el input
        fireEvent.input( input, { target: {value: inputValue} } );
        //- Se envia el formulario
        fireEvent.submit( form );
        expect( input.value ).toBe('');
        expect(onNewCategory).toHaveBeenCalledWith( inputValue );
        
        
        //- Para debuggear,  screen.debug();
    
    
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);


      });


})