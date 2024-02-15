import React, {useState, useEffect} from "react"

import NavBar from './navigate';
import FooterBar from "./footer"
import { Pagination } from 'flowbite-react';

import news from './content/news.json'


const Index=() => {


  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/news.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px",
  }
  const [currentPage, setCurrentPage] = useState(1);

  const pubPerPage = 3; 
  const [submenuTop, setSubmenuTop] = useState("200px");
  
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
      const slowFactor = -0.1
      const newTop = `calc(200px - ${(scrollPosition * slowFactor / windowHeight) * 100}%)`;
      setSubmenuTop(newTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pub = news.news.filter((item) => item.type==="publication");

  const totalPages = Math.ceil(pub.length / pubPerPage);
  const indexOfLastPubs = currentPage * pubPerPage;
  const indexOfFirstPubs = indexOfLastPubs- pubPerPage;
  const currentPub = pub.slice(indexOfFirstPubs, indexOfLastPubs);
  const onPageChange = (page) => setCurrentPage(page); 

  return (
    <div style={{background: "#fff"}}>
      <NavBar manu="manuScience" fixed={true}/>


      {(smallWindow)?<div className="submenu" style={{top: submenuTop}}>
        <ul>
          <li className="p-2 active"><a href="#">Science</a></li>
          <li className="p-2"><a href="/status">Publications</a></li>
        </ul>
      </div>:null}

      <div className="mx-auto w-full" style={{maxWidth: "1440px", margin:"0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color:"#264256" }}>
        <div className="p-10 max-w-screen-lg mx-auto">
          <div className="justify-between mb-5"  style={{maxWidth: "1200px", margin: "0 auto"}}>
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular" style={{textAlign:"center"}}>
              Meet our works
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900" style={{textAlign:"center", fontWeight: "700", color:"var(--pickled-bluewood-900)"}}>
              <span style={{color:"var(--pickled-bluewood-600)"}}>Publications</span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center" style={{maxWidth: "1200px", margin: "0 auto", marginBottom:"5rem", textAlign:"center", color:"black"}}>
            {pub.map((p, index) => {
              index = index+1
              return(
                <div className="w-full flex flex-warp p-6 m-3" style={{boxShadow: "0px 15px 35px rgba(227, 252, 239, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07)"}} key={index}>
                  <div className="pr-5" style={{width:"70%"}}>
                    <p className="pb-3" style={{fontSize: "24px", lineHeight: "1.2", color:"var(--pickled-bluewood-600)", fontWeight:500}}><a href={p.webpage} target="_blank">{p.title}</a></p>
                    <p className="text-content" style={{fontSize:"12pt"}}>{p.abstract}</p>
                  </div>
                  <div style={{width:"30%", textAlign:"left"}}>
                    <p className="pb-3"><span className="text-bluewood-900" style={{fontWeight:700}}>Authors:</span> {p.author}</p>
                    <p className="pb-3"><span className="text-bluewood-900" style={{fontWeight:700}}>Journal:</span> {p.journal}</p>
                    <p className="pb-3"><span className="text-bluewood-900" style={{fontWeight:700}}>Date:</span> {p.date}</p>
                    <p className="pb-3"><span className="text-bluewood-900" style={{fontWeight:700}}>doi:</span> <a href={p.webpage} target="_blank">{p.doi}</a></p>
                    <p className="pb-3"><span className="text-bluewood-900" style={{fontWeight:700}}>preprint:</span> <a href={p.webpage2} target="_blank">{p.preprint}</a></p>
                  </div>
                </div>
            )})}
          <div className="flex justify-center mt-4">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
}


export default Index;