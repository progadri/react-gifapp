import {render, screen} from '@testing-library/react';

import { GifItem } from "../../components/GifItem";
import { getGifs } from '../../helpers/getGifs';

describe('1. Pruebas en el helpers getGifs', () => {
    
test('1.1 Debe de retornar un arreglo de gifs', async() => { 
    
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBeGreaterThan( 0 );

    expect(gifs[0]).toEqual({
        id: expect.any(String),
        title:expect.any(String),
        url:expect.any(String)
    });

 });

});