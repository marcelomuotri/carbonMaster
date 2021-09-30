import React,{useContext} from 'react'
import lineaAzul from '../../assets/azul/Decore.png'
import Card from './card/Card'
import { DataContext } from '../context/DataProvider'


const OurBikes = () => {

    const value = useContext(DataContext);

    const [idioma, setIdioma] = value.idioma

    const images = [1, 2, 3, 4, 5].map((number) => ({
        src: `https://raw.githubusercontent.com/marcelomuotri/carbonMaster/main/src/assets/Fotos/tumbado${number}.jpg`
    }));

    const images2 = [1, 2, 3, 4, 5].map((number) => ({
        src: `https://raw.githubusercontent.com/marcelomuotri/carbonMaster/main/src/assets/Fotos/h5${number}.jpg`
    }));

   
    return (
        <div className="ourBikes">
            <h2 className="ourBikes__titulo" >{idioma[0].nuestrasBicis}</h2>
            <img src={lineaAzul} alt="imagen azul" className="ourBikes__azul"></img>
            <p className="ourBikes__subtitulo">{idioma[0].textoNuestras}</p>

            <div className="ourBikes__card">
                <Card titulo= {"HANDBIKE H5"} url={images}/>
                <Card titulo= {idioma[0].textoDescripcion} url={images2}/>
            </div>
        </div>
    )
}

export default OurBikes
