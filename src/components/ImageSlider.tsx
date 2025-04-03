"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function ImageSlider() {
    const settings = {
      dots: true,
    };
    return (
      <div className="image-slider-container bg-white w-fit p-10 mx-auto text-black">
        <Slider {...settings}>
          <div>
            <img src="https://images.unsplash.com/photo-1742593323531-c6c4dcd12351?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1741567348603-0bef4612bea2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1741866987680-5e3d7f052b87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </Slider>
      </div>
    );
  }