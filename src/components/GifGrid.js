 
// import React, { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';


// export const GifGrid = ({ category }) => {

//     // const [count, setCount] = useState(0);
    
//     const [images, setImages] = useState([])

//     //este lo modeifique (importe) cuando pase todo para getGifs.js
//     // useEffect( ()=> {
//     //     getGifs();
//     // }, [])

//     useEffect( ()=> {
//         getGifs( category )
//             .then(setImages);
//     }, [category])
//     //como el getGifs retorna una promesa puedo usar el .then
//     //getGifs( category ).then(img => setImages(img)); es exactamente igual a esto: getGifs( category ).then(setImages);
//     //si pongo entre [category] es, si la category cambia me vuelve a disparar la peticion http
//     //si mando el array vacio el useEffect solo se dispara una unica vez

    
//     //los de aca abajo lo comente cuando lo pase para gitGif.js
//     // const getGifs = async() => {

//     //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=oSN5mJl71J1qIq1ezrCElSOPi41oPZfc`
//     //     const resp = await fetch( url );
//     //     const {data} = await resp.json();

//     //     const gifs = data.map( img => {
//     //         return {
//     //             id: img.id,
//     //             title: img.title,
//     //             url: img.images.downsized_medium.url
//     //         }
//     //     })

//     //     console.log(gifs);
//     //     setImages(gifs);

//     // }





//     // getGifs(); 
//     //el getGif() lo quito de aca para ponerlo en el useEffect y evitar que se renderice cada vez que se presiona el boton
    
// //     return (
// //         <>    
// //           <h3>{category}</h3>  
// //           {/* <h3>{count}</h3>
// //           <button onClick= { ()=> setCount(count + 1)}></button>  */}
// //           <ol>
// //               {
// //                   images.map(img => (
// //                       <li key={img.id}>{img.title}</li>
// //                   ))
// //               }
// //           </ol>
// //         </>
// //     )
// // }

// return (
//   <> 
//      <h3>{category}</h3>  

//      <div className="card-grid">    
     
//           {
//               images.map(img => (
//                   <GifGridItem 
//                      key= {img.id}
//                      {...img}
//                   />   
//               ))
//           }
      
//     </div>
//   </> 
// )
// }



// custom hook
 
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    //const state = useFetchGifs();
    const { data:images, loading } = useFetchGifs(category);
    //en una desestructuracion puedo renombrar una propiedad asi: data: images, y asi ya no se llama data sino images


return (
  <> 
     <h3 className= "animate__animated animate__fadeInDown">{category}</h3>  

     {loading && <p className="animate__animated animate__flash">loading</p>}

     <div className="card-grid">    
          {
              images.map(img => (
                  <GifGridItem 
                     key= {img.id}
                     {...img}
                  />   
              ))
          }
      
     </div>

  </> 
)
}