import React from 'react'
import logo from '../../assets/Logo/Logo.jpg'
import Hamburguesa from './hamburguesa/Hamburguesa'
import instagram from '../../assets/instagram+foto/instagram.png'


const Navbar = () => {
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
                                <p className="navbar__lenguajes"> ENG </p>
                            </li>
                            <li className="navbar__li">
                                <p className="navbar__palito">|</p>
                                <p className="navbar__lenguajes"> ES </p>
                            </li>
                            <li className="navbar__li">
                                <p className="navbar__palito">|</p>
                                <p className="navbar__lenguajes"> FR </p>
                            </li>
                            <li className="navbar__li">
                                <p className="navbar__palito">|</p>
                                <p className="navbar__lenguajes"> IT </p>
                            </li>
                            <li className="navbar__li">
                                <p className="navbar__palito">|</p>
                                <p className="navbar__lenguajes"> DEU </p>
                                <p className="navbar__palito">|</p>
                            </li>
                        </ul>
                        <hr className="navbar__linea"></hr>
                    </div>
                    <div className="navbar__inferior">
                        
                        <img src={instagram} className="navbar__instagram" alt="instagram foto"></img>
                        <Hamburguesa/>
                        
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
