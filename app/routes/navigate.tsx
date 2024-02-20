import React, { useState, useEffect } from 'react';
import { Dropdown } from 'flowbite-react';

function buttonStyle(valid){
  return ({
    height:"170px", 
    backgroundColor: valid ? "#fff" : null, 
    color: valid ? "#000" : null,
    borderTop: valid?"2px solid var(--pickled-bluewood-900)":null,
    transition: "all 0.3s ease",
  })
}

function menuClass(valid){
  if (valid){
    return `text-xl font-bold border-b-2 border-transparent mx-1.5 sm:mx-6 transition duration-300 ease-in-out transform border-default-500 scale-110 text-orange`
  } else {
    return `text-xl font-bold border-b-2 border-transparent mx-1.5 sm:mx-6 transition duration-300 ease-in-out transform hover:border-default-500 hover:scale-110 hover:text-white`
  }
}

function NavBar(props) {
  const [onMouse, setOnMouse] = useState(false);
  const [isTop, setIsTop] = useState(!props.fixed);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const isTop = scrollPosition === 0;
    setIsTop(isTop&&!props.fixed);
  };

  const handleManu = (manu, onMouse) => {
    setActiveMenu(manu);
    setOnMouse(onMouse);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveMenu(props.manu)
  }, []);

  const navbarClass = "justify-center mx-auto shadow fixed w-full top-0 z-1000 text-white";

  const navbarStyle = {
    backgroundColor:`rgba(7, 28, 48, ${isTop ? 0.5 : 1})`,
    margin: "0 auto",
  };

  return (

    <nav className={navbarClass} style={navbarStyle}>
      
        
      <div className="container flex justify-between mx-auto capitalize" style={{maxWidth: "1440px", color:"#fff", padding: (activeMenu === null)?"0rem":"0rem 1.5rem 0 1.5rem", margin:"0 auto"}}
        onMouseLeave={() => handleManu(props.manu,false)}
        >

        <button onClick={() => setShowMenu(!showMenu)} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        <div className={`w-full md:block md:w-auto ${showMenu ? 'block pt-5 justify-start' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium py-4 md:p-0 mt-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 mx-auto" style={{margin:"0 auto"}}>
            <li className={`$(showMenu) ? pb-2 : ''`} style={{textAlign: showMenu?"left":"center"}}>
              <div
                onMouseEnter={() => handleManu("manuHome", true)}
              >
                <button
                  id="home"
                  data-dropdown-toggle="manuHome"
                  className={menuClass((activeMenu === "manuHome"))}
                >
                  <a href="/">Home</a>
                </button>
              </div>
            </li>
            <li className={`$(showMenu) ? pb-2 : ''`}style={{textAlign: showMenu?"left":"center"}}>
              <div
                onMouseEnter={() => handleManu("manuTeam", true)}
              >
                <button
                  id="team"
                  data-dropdown-toggle="manuTeam"
                  className={menuClass(activeMenu === "manuTeam")}
                >
                  <a href="/team">Team</a>
                </button>
                
              </div>
            </li>
            <li className={`$(showMenu) ? pb-2 : ''`}style={{textAlign: showMenu?"left":"center"}}>
              <div
                onMouseEnter={() => handleManu("manuScience", true)}
              >
                <button
                  id="home"
                  data-dropdown-toggle="manuScience"
                  className={menuClass((activeMenu === "manuScience"))}
                >
                  <a href="/science">Science</a>
                </button>
              </div>
            </li>
            
            <li className={`$(showMenu) ? pb-2 : ''`}style={{textAlign: showMenu?"left":"center"}}>
              <div
                onMouseEnter={() => handleManu("manu7ds", true)}
              >
                <button
                  id="7ds"
                  data-dropdown-toggle="manu7ds"
                  className={menuClass(activeMenu === "manu7ds")}
                >
                  <a href="/survey">Survey</a>
                </button>
                {(onMouse&&!showMenu)?
                <div style={buttonStyle(activeMenu === "manu7ds")}>
                  <ul className="text-sm">
                    <li>
                      <a href="/survey" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Design</a>
                    </li>
                    <li>
                      <a href="/status" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Status</a>
                    </li>
                    <li>
                      <a href="/group" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Working Group</a>
                    </li>
                  </ul>
                </div>:(showMenu)?
                <ul className="text-sm">
                    <li>
                      <a href="/survey" className="block py-0 ml-5 hover:scale-110 hover:text-orange" style={{padding:"0.5rem"}}>- Design</a>
                    </li>
                    <li>
                      <a href="/status" className="block py-0 ml-5 hover:scale-110 hover:text-orange" style={{padding:"0.5rem"}}>- Status</a>
                    </li>
                    <li>
                      <a href="/group" className="block py-0 ml-5 hover:scale-110 hover:text-orange" style={{padding:"0.5rem"}}>- Working Group</a>
                    </li>
                </ul>:null}
              </div>
            </li>
            <li className={`$(showMenu) ? pb-2 : ''`}style={{textAlign: showMenu?"left":"center"}}>
              <div
                onMouseEnter={() => handleManu("manu7dt", true)}
              >
                <button
                  id="7dt"
                  data-dropdown-toggle="manu7dt"
                  className={menuClass(activeMenu === "manu7dt")}
                >
                  <a href="/telescope">Facilities</a>
                </button>
                {(onMouse&&!showMenu)?
                <div style={buttonStyle(activeMenu === "manu7dt")}>
                  <ul className="text-sm" style={{margin:"0 auto"}}>
                    <li>
                      <a href="/telescope" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Overview</a>
                    </li>
                    <li>
                      <a href="/location" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Location</a>
                    </li>
                    <li>
                      <a href="/instrument" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Instrument</a>
                    </li>
                    <li>
                      <a href="/server" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Computational<br/>Resources</a>
                    </li>
                  </ul>
                </div>:(showMenu)?
                <ul className="text-sm" style={{margin:"0 auto"}}>
                    <li>
                      <a href="/telescope" className="block py-0 ml-5 hover:scale-110 hover:text-orange" style={{padding:"0.5rem"}}>- Overview</a>
                    </li>
                    <li>
                      <a href="/location" className="block py-0 ml-5 hover:scale-110 hover:text-orange" style={{padding:"0.5rem"}}>- Location</a>
                    </li>
                    <li>
                      <a href="/instrument" className="block py-0 ml-5 hover:scale-110 hover:text-orange" style={{padding:"0.5rem"}}>- Instrument</a>
                    </li>
                    <li>
                      <a href="/server" className="block py-0 ml-5 hover:scale-110 hover:text-orange" style={{padding:"0.5rem"}}>- Computational Resources</a>
                    </li>
                  </ul>:null}
              </div>
            </li>
            <li className={`$(showMenu) ? pb-2 : ''`} style={{textAlign: showMenu?"left":"center"}}>
              <div
                onMouseEnter={() => handleManu("manuData", true)}
              >
                <button
                  id="data"
                  data-dropdown-toggle="manuData"
                  className={menuClass(activeMenu === "manuData")}
                >
                  <a href="/data">Data</a>
                </button>
                {(onMouse&&!showMenu)?
                <div style={buttonStyle(activeMenu === "manuData")}>
                  <ul className="text-sm">
                    <li>
                      <a href="/data" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Survey Data</a>
                    </li>
                    <li>
                      <a href="/nonsurvey" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Non-survey</a>
                    </li>
                    <li>
                      <a href="/images" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Images</a>
                    </li>
                  </ul>
                </div>:(showMenu)?
                  <ul className="text-sm">
                    <li>
                      <a href="/data" className="block py-0 ml-5 hover:scale-110 hover:text-orange" style={{padding:"0.5rem"}}>- Survey Data</a>
                    </li>
                    <li>
                      <a href="/nonsurvey" className="block py-0 ml-5 hover:scale-110 hover:text-orange" style={{padding:"0.5rem"}}>- Non-survey</a>
                    </li>
                    <li>
                      <a href="/images" className="block py-0 ml-5 hover:scale-110 hover:text-orange" style={{padding:"0.5rem"}}>- Images</a>
                    </li>
                  </ul>:null}
              </div>
            </li>
            <li className={`$(showMenu) ? pb-2 : ''`} style={{textAlign: showMenu?"left":"center"}}>
              <div
                onMouseEnter={() => handleManu("manuPaper", true)}
              >
                <button
                  id="publication"
                  data-dropdown-toggle="manuPaper"
                  className={menuClass(activeMenu === "manuPaper")}
                >
                  <a href="/publication">Publications</a>
                </button>
              </div>
            </li>
            <li className={`$(showMenu) ? pb-2 : ''`} style={{textAlign: showMenu?"left":"center"}}>
              <div
                onMouseEnter={() => handleManu("manuNews", true)}
              >
                <button
                  id="news"
                  data-dropdown-toggle="manuNews"
                  className={menuClass(activeMenu === "manuNews")}
                >
                  <a href="/news">News</a>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <a className="logo-container" href="/">
            <img src="/img/logoWname.png" alt="Logo" className="logo-image" />
        </a>
        
      </div>
    </nav>

  );
}

export default NavBar;


    

