import React,{useContext} from 'react'
import lineaAzul from '../../assets/azul/Decore.png'
import Card from './card/Card'
import { DataContext } from '../context/DataProvider'


const OurBikes = () => {

    const value = useContext(DataContext);

    const [idioma, setIdioma] = value.idioma


    return (
        <div className="ourBikes">
            <h2 className="ourBikes__titulo" >{idioma[0].nuestrasBicis}</h2>
            <img src={lineaAzul} alt="imagen azul" className="ourBikes__azul"></img>
            <p className="ourBikes__subtitulo">{idioma[0].textoNuestras}</p>

            <div className="ourBikes__card">
                <Card titulo= {"HANDBIKE H5"}/>
                <Card titulo= {idioma[0].textoDescripcion}/>
            </div>
        </div>
    )
}

export default OurBikes
