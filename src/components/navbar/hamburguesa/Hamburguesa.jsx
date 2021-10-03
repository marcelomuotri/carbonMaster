import React, {useRef, useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import { useScrollBy } from "react-use-window-scroll";



const Hamburguesa = () =>{

  const [menuOpen, setMenuOpen] = useState(false)
  const [state, setState] = useState(false)

  const scrollBy = useScrollBy();

  const prueba = () =>{
   
    setState({menuOpen: false})
   /*  scrollBy(600, 0) */
    /* setTimeout(function() {
      window.location.reload()
    }, 1000); */
  }

  const handleStateChange = (state) => {
    setState({menuOpen: state.isClosed})  
  }
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right width={180}
            overlayClassName= {"fondo"}
            onStateChange={(state) => handleStateChange(state)}
             >
        <a className="menu-item" href="">Inicio </a>
        <p onClick={ () =>prueba()  }  className="menu-item">Sobre nosotros</p>
        <a onClick={ () =>scrollBy(600, 0)} className="menu-item" >Handbikes</a>
        <a className="menu-item" href="">Contacto</a>
      </Menu>
    );
  }


export default Hamburguesa