import {render, screen} from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

//- mock de un custom hook 
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente GifGrid', () => {
    
const category = 'One Punch';

    test('1.1. Debe de mostrar el loading inicialmente ', () => { 


        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true

        });

        render( <GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

     });

     test('1.2. Debe de mostrar items cuando se cargan las imagenes', () => { 

        //-Inicializamos un array con objetos para poder hacer las comprobaciones con el useFetchs
        const gifs = [
            {
                id:'ACB',
                title:'Adrian',
                url: ' https::/adrianrivera.es/adrian.jpg'
            },
            {
                id:'ACB2',
                title:'Adrian2',
                url: ' https::/adrianrivera.es/adrian.jpg2'
            },

        ]

        //- Inicializamos el hook con los valores definidos
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false

        });

        //- Comprobaciones
             render( <GifGrid category={category}/>);
             expect(screen.getAllByRole('img').length ).toBe(2);
            screen.debug();


      })

});