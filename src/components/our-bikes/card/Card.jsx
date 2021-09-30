import React from 'react'
import Carousel from 'react-gallery-carousel';
import flechaIzq from '../../../assets/carousel/flechaIzquierda.png'
import flechaDer from '../../../assets/carousel/flechaDerecha.png'

const Card = (props) => {

     /* const images = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => ({
        src: props.url

    }));  */


    return (
        <div className="card">
            <div className="card__contenedorFoto">
                 <div className="card__carousel">
                    <Carousel images={props.url}
                        leftIcon={<img class="carousel__flechas" src={flechaIzq}></img>}
                        rightIcon={<img class="carousel__flechas" src={flechaDer}></img>}
                        hasMediaButton={false}
                        hasIndexBoard={false}
                        hasSizeButton={false}
                        hasThumbnails={false}
                        className="card__background"
                        style={{ width: 600, height: 400  }} />
                </div> 
            </div>

            <div>
                <h3 className="card__titulo">{props.titulo}</h3>
            </div>
        </div>
    )
}

export default Card
