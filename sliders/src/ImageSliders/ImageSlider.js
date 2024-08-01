import React, { useRef } from "react";
import logo from "../Images/2Logo.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ImageSliders/ImageSlider.css";
import img1 from "../Images/sliderr1.jpg";
import img2 from "../Images/slider2.webp"
import img3 from "../Images/slider3.jpg"
import img4 from "../Images/slider4.jpg"
import img5 from "../Images/slider5.jpg"

function ImageSlider() {
  const images = [
    {
      src:img1,
      alt: "Agriculture Product",
      title: "Agriculture Product",
      description:
        "Continue indulged speaking technical out horrible domestic position.",
    },
    {
      src:img2,
      alt: "Vegetables Product",
      title: "Vegetables Product",
      description:
        "Continue indulged speaking technical out horrible domestic position.",
    },
    {
      src: img3,
      alt: "Fresh Vegetables",
      title: "Fresh Vegetables",
      description:
        "Continue indulged speaking technical out horrible domestic position.",
    },
    {
      src: img4,
      alt: "Organic Product",
      title: "Organic Product",
      description:
        "Continue indulged speaking technical out horrible domestic position.",
    },
    {
        src: img5,
        alt: "Fruits",
        title: "Fresh Fruits",
        description:
          "Continue indulged speaking technical out horrible domestic position.",
      }
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:3,
          slidesToScroll:2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
          slidesToScroll:1
        }
      },
      
      {
        breakpoint: 640,
        settings: {
          slidesToShow:2,
          slidesToScroll:1
        }
      },
      {
        breakpoint:476,
        settings: {
          slidesToShow:1,
          slidesToScroll:1
        }
      }
    ]
  };
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <div>
      <div className="header-section">
        <div className="header-outer-section">
          <div className="container">
            <div className="header-inner-section d-flex align-items-center justify-content-between">
              <div className="header-logo-section d-flex align-items-center gap-2">
                <div className="logo-img">
                  <img src={logo} alt="Logo"></img>
                </div>
                <div className="logo-heading">
                  <h2>Green Harvest</h2>
                </div>
              </div>
              <div className="header-right-section">
                <ul
                  className="header-right-inner-section d-flex align-items-center justify-content-start gap-5"
                  style={{ margin: "0px" }}
                >
                  <li>
                    <h5>Home</h5>
                  </li>
                  <li>
                    <h5>Pages</h5>
                  </li>
                  <li>
                    <h5>Projects</h5>
                  </li>
                  <li>
                    <h5>Blog</h5>
                  </li>
                  <li>
                    <h5>Shop</h5>
                  </li>
                  {/* <li>
                    <h5>Services</h5>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="farm-background-section">
        <div className="overlay"></div>
        <div className="heading-tagline">
          <h1>Green Harvest</h1>
          <p>Cultivating a Sustainable Future</p>
        </div>
      </div>
      <div className="home-section">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {images.map((image, index) => {
            return (
              <div key={index} className="slider-item">
                <img src={image.src} alt={image.alt} />
                <h5>{image.title}</h5>
                <p>{image.description}</p>
              </div>
            );
          })}
        </Slider>
        <div className="previous-next-btns">
          <div style={{ textAlign: "center" }} className="btn-prev-nxt">
            <button className="button" onClick={previous}>
              Previous
            </button>
            <button className="button" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-background-section">
          <div className="overlay-2"></div>
          <div className="footer-content-section">
            <div className="footer-content-inner-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="links-outer-section">
                    <div className="quickLinks">
                      <h1>Quick Links</h1>
                    </div>
                    <ul className="links">
                      <li>Home</li>
                      <li>Pages</li>
                      <li>Projects</li>
                      <li>Blog</li>
                      <li>Shop</li>
                      <li>Services</li>
                    </ul>
                    </div>
                    
                  </div>
                  <div className="col-md-4">
                    <div className="social-media-outer-section">
                    <div className="quickLinks">
                      <h1>Social Media</h1>
                    </div>
                    <div class="icons-section d-flex align-items-center gap-4 py-4">
                      <div class="facebook">
                        <i class="fa-brands fa-facebook"></i>
                      </div>
                      <div class="insta">
                        <i class="fa-brands fa-instagram"></i>
                      </div>
                      <div class="twitter">
                        <i class="fa-brands fa-twitter"></i>
                      </div>
                      <div class="youtube">
                        <i class="fa-brands fa-youtube"></i>
                      </div>
                    </div>
                    <div className="social-content-section">
                      <p>Copy &commat; 2022 Green Harverst Co.Ltd.PVT.Ltd</p>
                    </div>
                    </div>
                    
                  </div>
                  <div className="col-md-4">
                    <div className="info-outer-section">
                    <div className="quickLinks">
                      <h1>For More Info</h1>
                    </div>
                    <div class="contact-content-section">
                      <div class="mail-section d-flex align-items-center gap-4">
                        <i class="fa-solid fa-envelope"></i>
                        <p>green@gmail.com</p>
                      </div>
                      <div class="number-section d-flex align-items-center gap-4">
                        <i class="fa-solid fa-phone"></i>
                        <p>123-456-7890</p>
                      </div>
                      <div class="address-section d-flex align-items-center gap-4">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>
                          121 Einstein Loop N, Bronx, NY 10475, United States
                        </p>
                      </div>
                    </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
