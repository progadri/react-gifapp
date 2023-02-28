import {render, screen} from '@testing-library/react';
import { GifItem } from "../../components/GifItem"

describe('1.Pruebas en el componente GifItem', () => {

const title='Adrian';
const url= 'https://adrianrivera.es/'
    
test('1.1. Pruebas contra el snapshop', () => { 
    const {container} = render( <GifItem title={title} url={url}/> );
    expect ( container ).toMatchSnapshot();
 });

test('1.2. Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
    
    render( <GifItem title={title} url={url}/> );
    // screen.debug();
    // expect ( screen.getByRole('img').src).toBe( url );
    // expect ( screen.getByRole('img').alt).toBe( title );
    const {src, alt} = screen.getByRole('img');
    expect ( src ).toBe( url );
    expect ( alt ).toBe( alt );

 });


 test('1.3. Debe de mostrar el titulo en el componente', () => { 
    
    render( <GifItem title={title} url={url}/> );

    expect(screen.getByText( title) ).toBeTruthy();


  })


})