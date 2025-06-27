import Slider from 'react-slick';
import img2 from '../asserts/2.jpeg';
import img3 from '../asserts/3.jpeg';
import img4 from '../asserts/4.jpeg';
import img5 from '../asserts/5.jpeg';
import img6 from '../asserts/6.jpeg';
import img7 from '../asserts/7.jpeg';
import img8 from '../asserts/8.jpeg';
import img9 from '../asserts/9.jpeg';
import img10 from '../asserts/10.jpeg';
import img11 from '../asserts/11.jpeg';
import '../App.css'; 

const babyImages = [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

function BabyGallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <Slider {...settings}>
        {babyImages.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`baby-${idx}`}
              className="w-64 h-64 mx-auto object-cover rounded-2xl shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BabyGallery;
