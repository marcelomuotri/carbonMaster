import React from 'react'
import logo from '../../assets/Logo/Logo.jpg'
import instagram from '../../assets/instagram+foto/vector.svg'
import Hamburguesa from './hamburguesa/Hamburguesa'

import { DataContext } from '../context/DataProvider'
import { useState, useContext } from 'react'

const Navbar = () => {

    const value = useContext(DataContext);

    const cambioEng = value.cambioEng
    const cambioEsp = value.cambioEsp
    const cambioFra = value.cambioFra
    const cambioIta = value.cambioIta
    const cambioDeu = value.cambioDeu
    const cambioPor = value.cambioPor

    return (
        <div className="navbar">
            <nav className="navbar__row row">
                <div className="col-lg-2">
                    <img src={logo} className="navbar__logo" alt="Logo" />
                </div>
                <div className="col-lg-10 navbar__contenedor">
                    <div className="navbar__superior">
                        <ul className="navbar__lista">
                            <li className="navbar__li">
                                <p className="navbar__palito">|</p>
                                <p onClick={cambioEsp} className="navbar__lenguajes"> ESP </p>
                            </li>
                            <li className="navbar__li">
                                <p className="navbar__palito">|</p>
                                <p onClick={cambioEng} className="navbar__lenguajes"> ENG </p>
                            </li>
                            <li className="navbar__li">
                                <p className="navbar__palito">|</p>
                                <p onClick={cambioFra} className="navbar__lenguajes"> FRA </p>
                            </li>
                            <li className="navbar__li">
                                <p className="navbar__palito">|</p>
                                <p onClick={cambioIta} className="navbar__lenguajes"> ITA </p>
                            </li>
                            <li className="navbar__li">
                                <p className="navbar__palito">|</p>
                                <p onClick={cambioDeu} className="navbar__lenguajes"> DEU </p>
                            </li>
                            <li className="navbar__li">
                                <p className="navbar__palito">|</p>
                                <p onClick={cambioPor} className="navbar__lenguajes"> POR </p>
                                <p className="navbar__palito">|</p>
                            </li>
                        </ul>
                        <hr className="navbar__linea"></hr>
                    </div>
                    <div className="navbar__inferior">
                    <a href="https://www.instagram.com/carbon_master_handbikes/">   
                        <img src={instagram} className="navbar__instagram" alt="instagram foto"></img>
                         
                    </a>
                        <Hamburguesa/>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
