import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {

test('1.1. Debe devolver el estado inicial de nuestro hook', () => { 


    const { result } = renderHook( () => useFetchGifs('One Punch') );
    // const {images, isLoading} =useFetchGifs();

    const {images, isLoading} = result.current;

    console.log(result);
    
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();

 });


test('1.2. Debe de retornar un arreglo de imagenes y el isLoading en false', async() => { 
    
    const { result } = renderHook( () => useFetchGifs('One Punch') );

    //- waitFor importado de testing library que devuelve una promesa
    //- 
    await waitFor(
        () => expect(result.current.images.length).toBeGreaterThan(0),
        {timeout: 3000}
    );

    const {images, isLoading} = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();


 });


})