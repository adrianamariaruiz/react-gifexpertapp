import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'


// export const useFetchGifs = ( category ) => {
//     const [state, setState] = useState({
//         data: [],
//         loading: true

//     });

//     useEffect(() => {

//         getGifs(category)
//             .then(imgs => {

//                setTimeout(() => {
                   
//                    setState({
//                       data: imgs,
//                       loading: false
//                    })
              
//                 }, 3000); 
            
//     })
    
//     }, [category]);


//     return state;

// }




//sin el setTimeout para no demorar la carga, pero se pierde el loading y data cargada con los efectos que le puse:
export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true

    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                   setState({
                      data: imgs,
                      loading: false
                   })

    })
    
    }, [category]);


    return state;

}