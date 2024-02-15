import React, {useState, useEffect} from "react"

import NavBar from './navigate';
import FooterBar from "./footer"
import members from './content/team'

const Index=() => {


  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/team.jpeg")',
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
      const slowFactor = 0.3
      const newTop = `calc(750px - ${(scrollPosition * slowFactor / windowHeight) * 100}%)`;
      setSubmenuTop(newTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <div style={{background: "#fff"}}>
      <NavBar manu="manuAbout" />
      
      <div style = {backgroundImage}>
        <div style={{height:"700px"}}></div>
      </div>

      {(smallWindow)?<div className="submenu" style={{top: submenuTop}}>
        <ul>
          <li className="p-2 active"><a href="#">Team</a></li>
          <li className="p-2"><a href="/groups">Working Groups</a></li>
        </ul>
      </div>:null}


      <div className="mx-auto w-full" style={{maxWidth: "1440px", margin:"0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color:"#264256" }}>
        <div className="p-10 max-w-screen-lg mx-auto">
          <div className="justify-between mb-5"  style={{maxWidth: "1200px", margin: "0 auto"}}>
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular" style={{textAlign:"center"}}>
              Introducing
            </p>
            <h3 className="mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900" style={{textAlign:"center", fontWeight: "700", color:"var(--pickled-bluewood-900)"}}>
              Our <span style={{color:"var(--pickled-bluewood-600)"}}>Team</span>
            </h3>
          </div>
          <div className="sm:grid grid-cols-2 gap-6 my-10">
            {members.members.map((member, index) => {
              return(
                <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10" key={index}>
              <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{backgroundImage: `url(./img/team/${member.imgName})`, backgroundPosition: "center"}}>
              </div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                <div>
                  <a href={"mailto:" + member.email}
                    className="text-gray-900 font-bold text-xl mb-2 hover:text-bluewood-600 transition duration-500 ease-in-out">
                    {member.name}</a>
                  <p className="text-sm text-gray-600">
                    {member.title}
                  </p>
                  <p className="text-gray-900 font-bold text-base mt-4">
                    Major
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.major}
                  </p>
                  <p className="text-gray-900 font-bold text-base mt-4">
                    Affiliation
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.affiliation}
                  </p>
                  <div className="my-4 flex">
                    {
                      (member.webpage)&&<a className="mr-3" href={member.webpage}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd"/>
                        </svg>
                      </a>
                    }
                    <a className="mr-3" href={"mailto:" + member.email}>
                      <i className="fa fa-envelope"></i>
                    </a>
                    {
                      (member.orcid)&&<a className="mr-3 flex items-center" href={member.orcid}>
                        <img alt="ORCID logo" src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" width="16px" height="16px"/>
                      </a>
                    }
                  </div>
                </div>  
              </div>
            </div>
            )})}
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
}


export default Index;