import React, {createContext, useState, useEffect} from 'react'
import es from '../../sample/espa.json'
import en from '../../sample/ingles.json'
import fr from '../../sample/frances.json'
import it from '../../sample/italiano.json'
import de from '../../sample/deuch.json'
import po from '../../sample/por.json'


export const DataContext = createContext();

export const Dataprovider = (props) => {


    const [idioma, setIdioma] = useState(es)

    const cambioEng = () =>{
       setIdioma(en)
    }

    const cambioEsp = () =>{
        setIdioma(es)
     }

    const cambioFra = () =>{
        setIdioma(fr)
     } 

    const cambioIta = () =>{
        setIdioma(it)
     }   

     const cambioDeu = () =>{
        setIdioma(de)
     }   
     
     const cambioPor = () =>{
        setIdioma(po)
     }  

    const value ={
        idioma: [idioma,setIdioma],
        cambioEng:cambioEng,
        cambioEsp:cambioEsp,
        cambioFra:cambioFra,
        cambioIta:cambioIta,
        cambioDeu:cambioDeu,
        cambioPor:cambioPor
        
    }

    

    return(
        <DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
    )
}

export default Dataprovider