import PropTypes from 'prop-types';

// const api_key = '9xveTwzZOCootujPmn74B948KA68KUo6';

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

const {  images, isLoading } = useFetchGifs( category );

  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && ( <h2>Cargando...</h2> )
            
        }
       
  
        <div className="card-grid">
            {
                images.map( ( image ) => (
                     <GifItem 
                     key={image.id}
                     //! el operador spreed pasa todas las properties
                     { ...image }

                     />
                ))
            }
           
        </div>
    </>
  )
};


GifGrid.propTypes = {
  category: PropTypes.string.isRequired,

}
