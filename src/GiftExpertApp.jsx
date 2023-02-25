import { useState } from "react";
import { AddCategory,GifGrid } from "./components";




export const GiftExpertApp = () => {

const [categories, setCategories] = useState([ 'One punch' ]);


const onAddCategory = (newCategory) => {
  //! Comprueba si ya existe el valor que estamos introduciendo y si la condición devuelve true no hace nada.
  if (categories.includes(newCategory) ) {return;
  }
  
  //!Como añadir contenidos al arreglo
  setCategories( [newCategory ,...categories] );
  // setCategories( categories => [ ...categories, 'Valorant']);

}

  return (
    <>
  
          {/* Titulo */}
          <h1>GiftExpertApp</h1>

          {/* Input */}
          <AddCategory 
            // setCategories={setCategories}
            //! el onNewCategory es una props que le pasamos al componente AddCategory
            onNewCategory={ (newCategory) => onAddCategory (newCategory) }
          />


          {/* <button onClick={onAddCategory}>AGREGAR</button> */}

          {/* Listado de gifts */}
          <ol>
            { categories.map( (category) => 
                    (
                      <GifGrid 
                      key={category} 
                      category={category} 
                      title={category} />
                    
                    )
            )  
            }

          </ol>

    </>
  )
}
