import React, {useEffect, useState, useRef} from 'react';
import news from './content/news.json'
import { mainText1, mainText2, mainText3, mainText4 } from './content/text'

const MainPage = () => {


  const [smallWindow, setSmallWindow] = useState(true);
  const [backgroudImageSet, setBackgroudImageSet] = useState("fixed");
  const [scrollPos, setScrollPos] = useState(0);
  const rulerImageRef = useRef(false);
  const rulerImageRefFixed = useRef(false);

  useEffect(() => {

    const updateWindow = () => {
      if (window.innerWidth < 1200){
        setSmallWindow(false)
      } else {
        setSmallWindow(true)
      }
 
    };
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPos(scrollY);
    };

    updateWindow();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateWindow);


    return () => {
      window.removeEventListener('resize', updateWindow);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      
      if (rulerImageRef.current) {
        const scrollX = window.scrollY || window.pageYOffset;
        rulerImageRef.current.style.backgroundPositionX = `-${scrollX}px`;
      }

      if (rulerImageRefFixed.current) {
        const scrollX = window.scrollY || window.pageYOffset;
        rulerImageRefFixed.current.style.backgroundPositionX = `-${scrollX}px`;
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundImage = {
    backgroundSize: "cover",
    backgroundImage: 'url("./img/main.jpg")',
    backgroundAttachment: backgroudImageSet,
    backgroundPosition: "50% 0px",
  }
  
  const rulerImage = {
    backgroundSize: 'cover',
    backgroundImage: 'url("./img/ruler.jpg")',
    backgroundRepeat: "none repeat-x",
    backgroundPosition: '50% 0px',
    width: '100%',
    height: '40px',
    zIndex: 200,
  };

  useEffect(() => {

    if (window.innerWidth < 768) {
      setBackgroudImageSet("scroll")
    }
  }, []);

  console.log(backgroundImage)
  return (
    <div>
      <div style = {backgroundImage}>
        <div className="w-full" style={{ height: "60rem" }}>
          <img src="./img/title.png" style={{ width: "max(1000px, 70%)", paddingTop: "120px", paddingLeft: "15%" }} alt="7DT telescope" />
        </div>
      </div>

      <div className="mx-auto w-full main-container">
        <div className="flex items-center justify-center" style={{maxWidth: "1200px", margin: "0 auto"}}>
        
          <div className="tilesWrap">
            
            <div>
              <h2>Intro</h2>
              <h3>Featured Media</h3>
              
              <iframe width="100%"
                src="https://www.youtube.com/embed/7Ks4JOwkKe0?si=nHESaCB0GMYHHbea" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="iframe-container">
              </iframe>
            
              <p style={{paddingTop:"0px"}}>
                {mainText1}
              </p>
            </div>

            <div>
              <h2>Science</h2>
              <h3>7 Scientific Goals</h3>
              <tile>
                <img src="/img/science.jpg"/>
                <p>
                  {mainText2}
                </p>
              </tile>
              <button><a href="/science">Read more</a></button>
            </div>

            <div>
              <h2>Survey</h2>
              <h3>7 Dimensional Sky Survey</h3>
              <tile>
                <img src="/img/overview.png"/>
                <p>
                  Leveraging both wide-area and high-cadence observation strategies, the 7 Dimensional Survey (7DS) delves into previously unexplored cosmic realms by dedicated working groups.
                </p>
              </tile>
              <button><a href="/survey">Read more</a></button>
            </div>

            <div>
              <h2>Facilities</h2>
              <h3>7 Dimensional Telescope</h3>
              <tile>
                <img src="/img/7dt.jpg"/>
                <p>
                  The 7-Dimensional Telescope (7DT), a pioneering multi-telescope system, comprises 20 individual telescopes, each with a 50cm diameter, strategically positioned at Chile.
                </p>
              </tile>
              <button><a href="/telescope">Read more</a></button>
            </div>
          </div>
        </div>
      </div>

      <div style={{backgroundColor:"#fff"}}>
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
      <div ref={rulerImageRef} style={{...rulerImage, position:"fixed", bottom: "0"}}></div>
    </div>
  );
}


export default MainPage;



/*

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
  <button><a href="/science">Read more</a></button>
</li>
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

<div className="mx-auto w-full" style={{maxWidth: "1440px", margin:"0 auto", padding: "50px 10vw 50px 10vw", background: "#fff"}}>
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