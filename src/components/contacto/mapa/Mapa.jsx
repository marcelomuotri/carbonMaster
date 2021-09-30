import React,{useContext} from 'react'
import map from '../../../assets/contacto/mapa.jpg'
import { DataContext } from '../../context/DataProvider'

const Mapa = () => {

    const value = useContext(DataContext);

    const [idioma, setIdioma] = value.idioma


    return (
        <div className="mapa row">
             <h2 className="mapa__titulo col-lg-6">{idioma[0].contacto}</h2>
            <p className="mapa__direccion col-lg-6">St Beurko viejo N° 27, Barakaldo(48092), Spain</p>
            <img src={map} alt="mapa" className="mapa__imagen col-lg-6"></img>
        </div>
    )
}

export default Mapa
