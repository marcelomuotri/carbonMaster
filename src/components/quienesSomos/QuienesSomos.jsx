import lineaAzul from '../../assets/azul/Decore.png'
import Calesita from './carrousel/Carrousel'
import { DataContext } from '../context/DataProvider'
import React, { useState, useContext } from 'react'

const QuienesSomos = () => {

    const value = useContext(DataContext);

    const [idioma, setIdioma] = value.idioma

    return (
        <div>
            <h2 className="sobreNosotros" >{idioma[0].sobreNosotros}</h2>

            <img src={lineaAzul} alt="imagen azul" className="sobreNosotros__azul"></img>

            <div className="sobreNosotros__texto">
                <p className="sobreNosotros__cuerpo"> {idioma[0].textoSobre1}


                </p>
                <p className="sobreNosotros__cuerpo">  {idioma[0].textoSobre2}</p>
            </div>
            <div className="sobreNosotros__contenedor" >
                <Calesita />
            </div>
        </div>
    )
}

export default QuienesSomos
