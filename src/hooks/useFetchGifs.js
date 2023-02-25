import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    //? crea un array vacio que se llama images
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getImages = async () => {
        const newImages = await getGifs(category);

        //? le introducimos al array la información filtrada en el helper de getGifs.
        setImages(newImages);
        setIsLoading(false);
    
    }
    useEffect( () => {
        getImages();

 },[] );

  return {
//! otra manera de devolver.
// images: images,
images,

// isLoading: true,
isLoading,

  }
}
