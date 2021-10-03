import React, { useContext, useRef } from 'react'
import adorno from '../../../assets/contacto/masymas.png'
import { DataContext } from '../../context/DataProvider'
import emailjs from 'emailjs-com'


const Formulario = () => {

    const value = useContext(DataContext);

    const [idioma, setIdioma] = value.idioma

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0xc0i3j', 'template_rdtq80f', form.current, 'user_kbmMIKi1bEhnhQ6tjwqI2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        form.current.reset()

    };

    return (
        <div className="formulario">

            <form ref={form} onSubmit={sendEmail} className="formulario__contenedor">
                <div className="formulario__cuerpo">
                    <button type="submit" className="formulario__boton" >
                    </button>
                    <div className="formulario__form">
                        <input name="name" className="formulario__input" placeholder={idioma[0].nombre} required />
                        <input name="email" type="email" className="formulario__input" placeholder={idioma[0].mail} required />
                    </div>
                    <div className="formulario__contMsg">
                        <textarea name="text" className="formulario__mensaje" placeholder={idioma[0].consulta} required />
                    </div>
                </div>

                <img type="submit" src={adorno} className="formulario__adorno" />
            </form>

            


        </div>
    )
}

export default Formulario
