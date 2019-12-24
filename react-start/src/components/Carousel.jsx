import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const MyCarousel = () => {
    return ( <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src="/slider.jpg" style={{ width: '90rem' }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{color:'black'}}>election</h3>
            <p style={{color:'black'}}>Commencement of Biometric information transmission more promptly to system</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-200"
            src="/download(1).jpg"style={{ width: '90rem' }}
            alt="second slide"
          />
      
          <Carousel.Caption>
            <h3 style={{color:'black'}}>voting Day</h3>
            <p style={{color:'black'}}>people waiting on voting day</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-200"
            src="/danish.jpg"style={{ width: '90rem' }}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3 style={{color:"black"}}>Sarwar Danish سرور دانش</h3>
            <h style={{color:'black'}}>نجیب‌الله احمدزی، رییس کمیسیون مستقل انتخابات افغانستان شد</h>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
       );
}
 
export default MyCarousel;