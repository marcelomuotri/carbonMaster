import React, { useContext } from 'react'
import map from '../../../assets/contacto/mapa.jpg'
import { DataContext } from '../../context/DataProvider'
import lineaAzul2 from '../../../assets/azul/Decore.png'

const Mapa = () => {

    const value = useContext(DataContext);

    const [idioma, setIdioma] = value.idioma


    return (
        <div className="mapa">
            <h2 className="mapa__titulo ">{idioma[0].contacto}</h2>
            <img src={lineaAzul2} alt="imagen azul" className="mapa__lineaAzul"></img>
            <div className="row">
                <div className="col-lg-6 mapa__centro">
                    <div className="mapa__contenedorDirecc">
                        <p className="mapa__direccion ">St Beurko viejo N° 27, Barakaldo(48092), Spain</p>
                    </div>
                </div>
                <div class="mapouter col-lg-6">
                    <div class="gmap_canvas">
                        <iframe width="618" height="578" id="gmap_canvas" src="https://maps.google.com/maps?q=st%20beurko%20viejo%2027&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        
                        <br />
                         <style>.mapouter position: relative; text-align: right; height: 578px; width: 618px;</style> 
                        
                         <style>.gmap_canvas overflow: hidden; background: none!important; height: 578px; width: 618px </style>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Mapa
