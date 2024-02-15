import React, {useState, useEffect} from "react"

import NavBar from './navigate';
import FooterBar from "./footer"
import { Carousel } from 'react-bootstrap';
import { locationText } from './content/text'

const Index=() => {


  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/location.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px",
  }

  const [index, setIndex] = useState(0);
  
  const [submenuTop, setSubmenuTop] = useState("750px");

  const [smallWindow, setSmallWindow] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const slowFactor = 0.5
      const newTop = `calc(750px - ${(scrollPosition * slowFactor / windowHeight) * 100}%)`;
      setSubmenuTop(newTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  useEffect(() => {

    const updateWindow = () => {
      if (window.innerWidth < 1500){
        setSmallWindow(false)
      } else {
        setSmallWindow(true)
      }
 
    };
    updateWindow();

    window.addEventListener('resize', updateWindow);

    return () => {
      window.removeEventListener('resize', updateWindow);
    };
  }, []);
 
  const images = ['c1.jpeg', 'c2.jpg', 'c3.png', 'c4.png', 'c5.jpg', 'c6.jpg', 'c7.png'];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{background: "#fff"}}>
      <NavBar manu="manu7dt"/>

      {(smallWindow)?<div className="submenu" style={{top: submenuTop}}>
        <ul>
          <li className="p-2"><a href="/telescope">Overview</a></li>
          <li className="p-2 active"><a href="#">Location</a></li>
          <li className="p-2"><a href="/specification">Specification</a></li>
        </ul>
      </div>:null}

      <div style = {backgroundImage}>
        <div style={{height:"700px"}}></div>
      </div>
      <div className="mx-auto w-full" style={{maxWidth: "1440px", margin:"0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color:"#264256" }}>
        <div className="p-10 max-w-screen-lg mx-auto">
          <div className="justify-between mb-5"  style={{maxWidth: "1200px", margin: "0 auto"}}>
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular" style={{textAlign:"center"}}>
              Build the Telescope
            </p>
            <h3 className="mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900" style={{textAlign:"center", fontWeight: "700", color:"var(--pickled-bluewood-900)"}}>
              7DT in <span style={{color:"var(--pickled-bluewood-600)"}}>Chile</span>
            </h3>
          </div>
          <p className="text-content">{locationText}</p>
        </div>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} style={{zIndex:100}}>
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url(./img/carousel/${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "700px",
                overflow: "hidden",

              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <FooterBar />
    </div>
  );
}


export default Index;