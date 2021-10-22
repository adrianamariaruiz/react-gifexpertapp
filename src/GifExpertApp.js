
import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


// export const GifExpertApp = () => {

//     const [categories, setCategories] = useState(['Dragon Ball', 'Sailor Moon', 'Ranma']);

//     const handleAdd = () => {
//         setCategories([...categories, 'Candy']); //con el ...categories mantengo el array existente y ahi si se le puede agregar otra cosa
//         //si quiero que Candy quede al inicio (de primera en la lista) lo pongo asi: ['Candy', ...categories]
//         //tambien se puede usando un callback asi: setCategories(cates => [...cates, 'Candy']);
//     }

//     return (
//       <>
//         <h2>GifExpertApp</h2>
//         <hr/>

//         <button onClick={handleAdd}>Agregar</button>

//         <ol>

//             {
//                 categories.map(category => {
//                     return <li key={ category }>{ category }</li>
//                 })
//             }

//         </ol>

//       </>
//     )
  
//   }




  // export const GifExpertApp = () => {

  //   const [categories, setCategories] = useState(['Dragon Ball', 'Sailor Moon', 'Ranma']);

    

  //   return (
  //     <>
  //       <h2>GifExpertApp</h2>
  //       <AddCategory setCategories={setCategories}/>
  //       <hr/>

  //       <ol>

  //           {
  //               categories.map(category => {
  //                   return <li key={ category }>{ category }</li>
  //               })
  //           }

  //       </ol>

  //     </>
  //   )
  
  // }





  export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Sailor Moon']);

    

    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        <ol>

            {
                categories.map(category => (
                   <GifGrid 
                     key={category}
                     category = {category}/>
                ))
            }
  

        </ol>

      </>
    )
}
