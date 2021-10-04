import React, {useRef, useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import { useScrollBy } from "react-use-window-scroll";



const Hamburguesa = () =>{



  const scrollBy = useScrollBy();

  const sobreNosotros = async () =>{
     
    scrollBy(600, 0) 
    
      setTimeout(function() {
      window.location.reload()
    }, 500); 
    
  }

  const handBikes = () =>{
    scrollBy(1800, 0) 
    setTimeout(function() {
      window.location.reload()
    }, 700); 
  }

  

  const contacto = () =>{
    scrollBy(2600, 0) 
    setTimeout(function() {
      window.location.reload()
    }, 800); 
  }



 
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right width={180}
            overlayClassName= {"fondo"}
             >
        <a className="menu-item" href="">Inicio </a>
        <a onClick={ () =>sobreNosotros()  }  className="menu-item">Sobre nosotros</a>
        <a onClick={ () =>handBikes() } className="menu-item" >Handbikes</a>
        <a onClick={ () =>contacto() } className="menu-item" >Contacto</a>
      </Menu>
    );
  }


export default Hamburguesa