import React from 'react';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import flechaizq from '../../../assets/carousel/flechaIzquierda.png'
import flechader from '../../../assets/carousel/flechaDerecha.png'


const Calesita = () => {
    const images = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((number) => ({
        src: ``
    }));

    return (
        <div className="carousel">
            <Carousel images={images}
                leftIcon={<img class="carousel__flechas" src={flechaizq}></img>}
                rightIcon={<img class="carousel__flechas" src={flechader}></img>}
                hasMediaButton={false}
                style={{ height: 635, width: 1100 }} />
        </div>
    );
};

export default Calesita;