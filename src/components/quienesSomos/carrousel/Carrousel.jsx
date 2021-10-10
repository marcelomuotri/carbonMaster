import React from 'react';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import flechaizq from '../../../assets/carousel/flechaIzquierda.png'
import flechader from '../../../assets/carousel/flechaDerecha.png'


const Calesita = () => {
    const images = [10,9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => ({
        src: `https://raw.githubusercontent.com/marcelomuotri/carbonMaster/main/src/assets/Fotos/${number}.jpg`

    }));

    return (
        <div className="carousel">
            <Carousel images={images}
                leftIcon={<img class="carousel__flechas" src={flechaizq}></img>}
                rightIcon={<img class="carousel__flechas" src={flechader}></img>}
                hasMediaButton={false}
                hasIndexBoard={false}
                />
        </div>
    );
};

export default Calesita;