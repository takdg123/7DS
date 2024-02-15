import React, {useEffect, useState} from 'react';
import news from './content/news.json'
import { mainText } from './content/text'

const MainPage = () => {

  const [mainSectionHeight, setMainSectionHeight] = useState(900);
  const [smallWindow, setSmallWindow] = useState(true);

  useEffect(() => {
    const updateHeight = () => {
      const newHeight = window.innerHeight - 0; 
      setMainSectionHeight(newHeight);
    };

    const updateWindow = () => {
      if (window.innerWidth < 1200){
        setSmallWindow(false)
      } else {
        setSmallWindow(true)
      }
 
    };
    
    updateHeight();
    updateWindow();

    window.addEventListener('resize', updateHeight);
    window.addEventListener('resize', updateWindow);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('resize', updateWindow);
    };
  }, []);

  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/main.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px",
  }

  return (
    <div>
      <div style = {backgroundImage}>
        <div className="w-full" style={{ height: `${mainSectionHeight}px` }}>
          <img src="./img/title.png" style={{ width: "max(1000px, 70%)", paddingTop: "120px", paddingLeft: "15%" }} alt="7DT telescope" />
        </div>
      </div>
      
      <div className="mx-auto w-full" style={{maxWidth: "1440px", margin:"0 auto", padding: "50px 10vw 50px 10vw", background: "#fff"}}>
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular" style={{textAlign:"center"}}>
          Welcome to
        </p>
        <h3 className="mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900" style={{textAlign:"center", fontWeight: "700", color:"var(--pickled-bluewood-600)"}}>
          7-Dimensional Telescope
        </h3>
        <div className={smallWindow ? "flex justify-between  items-center" : "text-center"} style={{maxWidth: "1200px",  margin: "0 auto"}}>
          <div style={smallWindow ? { width: "50%", marginRight: "50px" } : {}}>
            <hr style={{ border: "2px solid --pickled-bluewood-900", margin: "15px 0", opacity: 0.8}} />
            <p className="text-content">{mainText}</p>
            <hr style={{ border: "2px solid --pickled-bluewood-900", margin: "15px 0", opacity: 0.8}} />
          </div>
          <div style={smallWindow ? { width: "500px", marginRight: "50px" } : { display: "flex", justifyContent: "space-between", width: "36vw"}}>
            <img src="/img/main_sub1.jpg" className="hover:scale-105 transition duration-1000" style={{boxShadow: "5px 5px 5px #000", margin:"2vw"}} />
            <img src="/img/main_sub2.jpg" className="hover:scale-105 transition duration-1000" style={{boxShadow: "5px 5px 5px #000", margin:"2vw"}} />
          </div>
        </div>
      </div>

      <div style={{backgroundColor:"#f9f9f9"}}>
        <div className="mx-auto w-full" style={{maxWidth: "1440px", margin:"0 auto", padding: "30px 10vw 0px 10vw"}}>
          <div className="justify-center mb-5"  style={{maxWidth: "1200px", margin: "0 auto", color:"--pickled-bluewood-900"}}>
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular" style={{textAlign:"center"}}>
              Meet our
            </p>
            <h3 className="mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900" style={{textAlign:"center", fontWeight: "700", color:"var(--pickled-bluewood-900)"}}>
              Latest <span style={{color:"var(--pickled-bluewood-600)"}}>News</span>
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center" style={{maxWidth: "1200px", margin: "0 auto", marginBottom:"5rem", textAlign:"center"}}>
            {news.news.map((news, index) => {
              index = index+1
              if (index<=3){
              return(
                <div className={`card card-${index}`} key={`card-${index}`}>
                  <img src={`./img/news/${news.imgName}`}></img>
                  <a href={news.webpage} target='_blank'>
                    <div className="card-img-hovered" style={{backgroundImage: `var(--card-img-hovered-overlay), url(./img/news/${news.imgName})`}}></div>
                  </a>
                  <div className="card-info">
                    <div className="card-about">
                      <a className={`card-tag ${news.type === "meeting" ? "tag-news" : news.type==="publication"? "tag-publication":news.type==="press"? "tag-press":null}`}>{news.type}</a>
                    <div className="card-time">{news.date}</div>
                    </div>
                    <h1 className="card-title">{news.title}</h1>
                    {news.type === "meeting" ?
                      <div className="card-creator">in <a href="">{news.place}</a></div> :
                    news.type === "publication" ?
                      <div className="card-creator">by <a href="">{news.shortAuthor}</a></div>:
                      <div className="card-creator">by <a href="">{news.source}</a></div>
                    }
                  </div>
                </div>
            )}})}
          </div>
        </div>
      </div>
      
      <div className="mx-auto w-full" style={{maxWidth: "1440px", margin:"0 auto", padding: "0px 10vw 0px 10vw"}}>
        <div className="justify-between"  style={{maxWidth: "1200px", margin: "0 auto"}}>
          <div className="justify-between mb-5"  style={{maxWidth: "1200px", margin: "0 auto"}}>
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular" style={{textAlign:"center"}}>
              Additional details
            </p>
            <h3 className="mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900" style={{textAlign:"center", fontWeight: "700", color:"var(--pickled-bluewood-900)"}}>
              More about <span style={{color:"var(--pickled-bluewood-600)"}}>7DT</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center" style={{maxWidth: "1200px", margin: "0 auto", marginBottom:"5rem"}}>
        
          <ul className="tilesWrap">
            <li>
              <h2>01</h2>
              <h3>Team</h3>
              <p>
                The 7DT team, hosted at Seoul National University, is making vigorous efforts to build and develop the next-generation telescope, 7DT.
              </p>
              <button><a href="/team">Read more</a></button>
            </li>
            <li>
              <h2>02</h2>
              <h3>Design</h3>
              <p>
                The 7DT consists of twenty 0.5m wide-field telescopes in Chile, enabling spectral mapping over a wide field of view.
              </p>
              <button><a href="/telescope">Read more</a></button>
            </li>
            <li>
              <h2>03</h2>
              <h3>Survey program</h3>
              <p>
                With wide-area and high-cadence survey, the 7 Dimensional Survey (7DS) will explore a deeper Universe
              </p>
              <button><a href="/survey">Read more</a></button>
            </li>
            <li>
              <h2>04</h2>
              <h3>Science</h3>
              <p>
                The core of 7DT science includes the new-born multi-messenger astronomy and the seamless survy study.
              </p>
              <button>Read more</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default MainPage;



/*<div className="mx-auto w-full" style={{maxWidth: "1440px", margin:"0 auto", padding: "50px 10vw 50px 10vw", background: "#fff"}}>
  <div className={smallWindow ? "flex items-center justify-between" : ""} style={{ maxWidth: "1200px", margin: "0 auto", padding:"5rem 0 5rem 0"}}>
    <div style={smallWindow ? { width: "50%", flexBasis: "50%", paddingRight: "30px", verticalAlign: "top", height: "50vh"} : { flex: 1 }}>
      <h2 style={{ fontFamily: "Fira Sans", textAlign: "left", color: "#264256", fontWeight: "700",  textAlign: (smallWindow)?"left":"center"}}>Latest News</h2>
      {news.news.map((news, index) => {
        if ((news.type=="meeting")&&(index<=2)){
          return (
            <div className="news mb-3" key={index}>
              <div className="p-2 bg-white borderrounded-lg shadow">
                <h5 className="mb-3 font-bold tracking-tight test" style={{ color: "#fff", backgroundColor: "#264256", textAlign: "left", paddingLeft: "10px", margin: "0 auto" }}>Meeting</h5>
                <h3 className="font-normal text-gray-700 dark:text-gray-400" style={{margin:"0"}}>
                  {news.title}
                </h3>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                  {news.date} / {news.place}
                </div>
                <div className="text-sm" style={{ color: "#264256", textAlign: "right", paddingRight: "10px", margin: "0 auto" }}>
                  Learn more
                </div>
              </div>
            </div>
        )} else if ((news.type == "publication")&&(index<=2)){
          return(
            <div className="news mb-3" key={index}>
              <div className="p-2 bg-white borderrounded-lg shadow">
              <h5 className="mb-3 font-bold tracking-tight test" style={{ color: "#fff", backgroundColor: "#264256", textAlign: "left", paddingLeft: "10px", margin: "0 auto" }}>Publication</h5>
              <h3 className="font-normal text-gray-700 dark:text-gray-400" style={{margin:"0"}}>
                {news.title}
              </h3>
              <div className="font-normal text-gray-700 dark:text-gray-400">
                {news.shortAuthor}, {news.ref}
              </div>
              <div className="text-sm" style={{ color: "#264256", textAlign: "right", paddingRight: "10px", margin: "0 auto" }}>
                Learn more
              </div>
            </div>
          </div>
      )}})}
    </div>
    <div style={smallWindow ? {width: "50%", borderLeft: "3px solid rgba(38, 66, 86, 0.8)", paddingLeft: "30px", verticalAlign: "top", height: "50vh"}:{width: "100%", paddingTop:"30px"}}>
      <h2 style={{ fontFamily: "Fira Sans", textAlign:"left", color:"#264256", fontWeight: "700", textAlign: (smallWindow)?"left":"center"}}>Latest Images</h2>
      <div className="mt-6">
        <CorouselImage />
      </div>
    </div>
  </div>
</div>*/