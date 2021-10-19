import React, { useRef, useState, useContext } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { useScrollBy } from "react-use-window-scroll";
import { DataContext } from '../../context/DataProvider';



const Hamburguesa = () => {


  const value = useContext(DataContext);

  const [idioma, setIdioma] = value.idioma

  const scrollBy = useScrollBy();

  const sobreNosotros = async () => {

    scrollBy(600, 0)

    setTimeout(function () {
      window.location.reload()
    }, 500);

  }

  const handBikes = () => {
    scrollBy(1800, 0)
    setTimeout(function () {
      window.location.reload()
    }, 700);
  }



  const contacto = () => {
    scrollBy(2600, 0)
    setTimeout(function () {
      window.location.reload()
    }, 800);
  }




  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu right width={180}
      overlayClassName={"fondo"}
    >
      <a className="menu-item" href="">{idioma[0].inicio} </a>
      <a onClick={() => sobreNosotros()} className="menu-item">{idioma[0].sobreNosotros} </a>
      <a onClick={() => handBikes()} className="menu-item" >Handbikes</a>
      <a onClick={() => contacto()} className="menu-item" >{idioma[0].contacto}</a>
    </Menu>
  );
}


export default Hamburguesa