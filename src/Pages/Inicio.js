import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../IMG/inov-int-agro.jpg'
import img2 from '../IMG/inovacao-no-agronegocio.jpg'
import img3 from '../IMG/telefono.png'

import Publish from '../components/Publish';
import { Link } from 'react-router-dom';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Link to={'/coberturas'}>
                <img style={{width:'100vw'}} src={img1} text="Mapas de coberturas" />
                </Link>
                <Carousel.Caption>
                <h3>Mapas de coberturas de Santa Fe</h3>
                <p>Visualización de las diferentes coberturas discriminadas por departamento</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width:'100vw'}} src={img2} text="Second slide" />
                <Carousel.Caption>
                <h3>Red de Ganadería provincial</h3>
                <p>Análisis de datos de las principales variables que afectan al sector ganadero</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width:'100vw'}} src={img3} text="Third slide" />
                <Carousel.Caption>
                <h3>Red Pluviómetrica</h3>
                <p>
                    Red de pluviómetros distribuida en toda la provincia
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Publish />
    </div>
  );
}

export default ControlledCarousel;