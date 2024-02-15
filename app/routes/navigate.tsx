import React, { useState, useEffect } from 'react';
import { Dropdown } from 'flowbite-react';

function buttonStyle(valid){
  return ({
    height:"130px", 
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

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const isTop = scrollPosition === 0;
    console.log(!props.fixed, isTop&&!props.fixed)
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
      <div className="container flex items-center justify-center mx-auto capitalize" style={{maxWidth: "1440px", color:"#fff", padding: (activeMenu === null)?"0rem":"0rem 1.5rem 0 1.5rem", margin:"0 auto"}}
        onMouseLeave={() => handleManu(props.manu,false)}
        >
        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium py-4 md:p-0 mt-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 mx-auto" style={{margin:"0 auto"}}>
            <li style={{width:"120px", textAlign:"center"}}>
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
            <li style={{width:"150px", textAlign:"center"}}>
              <div
                onMouseEnter={() => handleManu("manuAbout", true)}
              >
                <button
                  id="about"
                  data-dropdown-toggle="manuAbout"
                  className={menuClass(activeMenu === "manuAbout")}
                >
                  About Us
                </button>
                {(onMouse)?
                <div style={buttonStyle(activeMenu === "manuAbout")}>
                  <ul className="text-sm" style={{margin:"0 auto"}}>
                    <li>
                      <a href="/team" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Team</a>
                    </li>
                    <li>
                      <a href="/groups" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Working Group</a>
                    </li>
                </ul></div>:null}
              </div>
            </li>
            <li style={{width:"120px", textAlign:"center"}}>
              <div
                onMouseEnter={() => handleManu("manu7dt", true)}
              >
                <button
                  id="7dt"
                  data-dropdown-toggle="manu7dt"
                  className={menuClass(activeMenu === "manu7dt")}
                >
                  7DT
                </button>
                {(onMouse)?
                <div style={buttonStyle(activeMenu === "manu7dt")}>
                  <ul className="text-sm" style={{margin:"0 auto"}}>
                    <li>
                      <a href="/telescope" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Overview</a>
                    </li>
                    <li>
                      <a href="/location" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Location</a>
                    </li>
                    <li>
                      <a href="/specification" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Specification</a>
                    </li>
                  </ul>
                </div>:null}
              </div>
            </li>
            <li style={{width:"120px", textAlign:"center"}}>
              <div
                onMouseEnter={() => handleManu("manu7ds", true)}
              >
                <button
                  id="7ds"
                  data-dropdown-toggle="manu7ds"
                  className={menuClass(activeMenu === "manu7ds")}
                >
                  7DS
                </button>
                {(onMouse)?
                <div style={buttonStyle(activeMenu === "manu7ds")}>
                  <ul className="text-sm">
                    <li>
                      <a href="/survey" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Survey</a>
                    </li>
                    <li>
                      <a href="/status" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Status</a>
                    </li>
                    <li>
                      <a href="/data" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Data</a>
                    </li>
                  </ul>
                </div>:null}
              </div>
            </li>
            <li style={{width:"120px", textAlign:"center"}}>
              <div
                onMouseEnter={() => handleManu("manuScience", true)}
              >
                <button
                  id="science"
                  data-dropdown-toggle="manuScience"
                  className={menuClass(activeMenu === "manuScience")}
                >
                  Science
                </button>
                {(onMouse)?
                <div style={buttonStyle(activeMenu === "manuScience")}>
                  <ul className="text-sm">
                    <li>
                      <a href="/science" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Scientific Goals</a>
                    </li>
                    <li>
                      <a href="/publication" className="block py-2 hover:bg-oran-100" style={{padding:"0.5rem"}}>Publications</a>
                    </li>
                  </ul>
                </div>:null}
              </div>
            </li>
            <li style={{width:"120px", textAlign:"center"}}>
              <div
                onMouseEnter={() => handleManu("manuNews", true)}
              >
                <button
                  id="news"
                  data-dropdown-toggle="manuNews"
                  className={menuClass(false)}
                >
                  <a href="/news">News</a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default NavBar;


    

