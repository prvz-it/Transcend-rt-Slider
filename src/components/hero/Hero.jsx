import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg';
import './Hero.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} ><FaChevronRight className="prevAry"/></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} ><FaChevronLeft className="nextAry"/></div>
  );
}

const Hero = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section id='hero'>
        <Slider {...settings}>
          <div className="heroImage">
            <img src={ hero1 } alt="hero-01" />
            <div className="heroText">
              <h4>Nature Beauty</h4>
              <h2>Miami Lake</h2>
            </div>
          </div>
          <div className="heroImage">
            <img src={ hero2 } alt="hero-02" />
            <div className="heroText">
              <h4>Travel Shot</h4>
              <h2>Kayaking on Lake</h2>
            </div>
          </div>
          <div className="heroImage">
            <img src={ hero3 } alt="hero-03" />
            <div className="heroText">
              <h4>Action Shot</h4>
              <h2>Electricity</h2>
            </div>
          </div>
        </Slider>
      </section>
    </>
  )
}

export default Hero