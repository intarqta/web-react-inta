import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../IMG/inov-int-agro.jpg'
import img2 from '../IMG/inovacao-no-agronegocio.jpg'
import img3 from '../IMG/telefono.png'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{width:'100vw'}} src={img1} text="Mapas de coberturas" />
                <Carousel.Caption>
                <h3>Mapas de coberturas de Santa Fe</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width:'100vw'}} src={img2} text="Second slide" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width:'100vw'}} src={img3} text="Third slide" />
                <Carousel.Caption>
                <h3>Red Pluviómetrica</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default ControlledCarousel;