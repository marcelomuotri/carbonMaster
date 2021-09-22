import React from 'react'
import { slide as Menu } from 'react-burger-menu'


class Hamburguesa extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right width={180} >
        <a className="menu-item" href="/">Sobre nosotros </a>
        <a className="menu-item" href="/about">Handbikes</a>
        <a className="menu-item" href="/contact">Contacto</a>
        <a className="menu-item" href="">Ubicacion</a>
      </Menu>
    );
  }
}

export default Hamburguesa