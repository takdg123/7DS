import React, {useState, useEffect} from "react"

import NavBar from './navigate';
import FooterBar from "./footer"

const Index=() => {


  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/spec.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px",
  }

  const [submenuTop, setSubmenuTop] = useState("750px");

  const [smallWindow, setSmallWindow] = useState(true);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const slowFactor = 0.2
      const newTop = `calc(750px - ${(scrollPosition * slowFactor / windowHeight) * 100}%)`;
      setSubmenuTop(newTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
 
  return (
    <div>
      <NavBar manu="manu7dt"/>
      
      <div style = {backgroundImage}>
        <div style={{height:"700px"}}></div>
      </div>

      {(smallWindow)?<div className="submenu" style={{top: submenuTop}}>
        <ul>
          <li className="p-2"><a href="/telescope">Overview</a></li>
          <li className="p-2"><a href="/location">Location</a></li>
          <li className="p-2 active"><a href="#">Instrument</a></li>
          <li className="p-2"><a href="/server">Computational<br/>Resorces</a></li>
        </ul>
      </div>:null}

      <div className="mx-auto w-full main-container">
        <div className="p-10 max-w-screen-lg mx-auto">
          <div className="justify-between"  style={{maxWidth: "1200px", margin: "0 auto"}}>
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular" style={{textAlign:"center"}}>
              The Biggest Ground-based Multi-telescope System
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight" style={{textAlign:"center", fontWeight: "700", color:"var(--pickled-bluewood-900)"}}>
              Specifcation of <span style={{color:"var(--pickled-bluewood-600)"}}>7DT</span>
            </h3>
          </div>
        </div>
      </div>
          
      <div className="mx-auto w-full" style={{height:"400px", maxWidth: "1440px", margin:"0 auto", padding: "0 10vw 0 10vw"}}>
        <div className="p-10 max-w-screen-lg mx-auto">
          <h3 className="text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight" style={{fontWeight: "700", color:"var(--pickled-bluewood-900)"}}>
            Optics
          </h3>
        </div>
      </div>

      <div style={{backgroundColor:"#f9f9f9"}}>
        <div className="mx-auto w-full" style={{height:"400px", maxWidth: "1440px", margin:"0 auto", padding: "0 10vw 0 10vw"}}>
          <div className="p-10 max-w-screen-lg mx-auto">
            <h3 className="text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight" style={{fontWeight: "700", color:"var(--pickled-bluewood-900)"}}>
              Mount
            </h3>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full" style={{maxWidth: "1440px", margin:"0 auto", padding: "0 10vw 0 10vw"}}>
        <div className="p-10 max-w-screen-lg mx-auto">
          <h3 className="mb-3 text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight" style={{fontWeight: "700", color:"var(--pickled-bluewood-900)"}}>
            Filter
          </h3>

          <p className="text-content">
          The utilization of 7DT filters allows for the sophisticated observation of an object, 
          enabling the exploration of its characteristics across a diverse spectrum of wavelengths.
          </p>

          <img className="p-6" src="/img/filter.png" />

          <p className="text-content">Here are two examples: NGC7293(left) and NGC0253(right)</p>
          
          <div className="flex flex-wrap justify-between p-10" style={{textAlign:"center"}}>
            <img src="/img/NGC7293.gif" width="40%"/>
            <img src="/img/NGC0253.gif" width="40%"/>
          </div>

        </div>
      </div>

      <FooterBar />
    </div>
  );
}


export default Index;