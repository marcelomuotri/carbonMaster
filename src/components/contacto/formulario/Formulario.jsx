import React, {useContext} from 'react'
import enviar from '../../../assets/contacto/enviar.png'
import adorno from '../../../assets/contacto/masymas.png'
import { DataContext } from '../../context/DataProvider'

const Formulario = () => {

    const value = useContext(DataContext);

    const [idioma, setIdioma] = value.idioma

   

    const hola = () =>{
        alert("hola")
    }
    return (
        <div className="formulario">
           
            <form action="./enviar.php" method="post" className="formulario__contenedor">
                <div className="formulario__cuerpo">
                    <img  src={enviar} className="formulario__enviar"/>
                    <button type="submit">Hola</button> 
                    <div className="formulario__form">
                        <input className="formulario__input" placeholder={idioma[0].nombre}/> 
                        <input className="formulario__input" placeholder={idioma[0].mail}/> 
                    </div>
                    <div className="formulario__contMsg">
                        <textarea className="formulario__mensaje" placeholder={idioma[0].consulta}/>
                    </div>
                </div>
                <img src={adorno} className="formulario__adorno"/> 
            </form>
        </div>
    )
}

export default Formulario
