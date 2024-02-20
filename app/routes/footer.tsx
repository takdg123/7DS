import { Footer } from 'flowbite-react';

const FooterBar = () => {
  return (
  <footer style={{backgroundColor:"black", zIndex:1000, position: "relative"}}>
    <div className="mx-auto w-full main-container" style={{maxWidth: "1440px", margin:"0 auto", padding: "0 10vw 0 10vw"}}>
      <div className="grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-900 uppercase text-white">Contact</h2>
          <hr className="mb-2"/>
            <p className="text-gray-500"> Myungshin Im </p>
            <p className="text-gray-500"> Professor, Dept. of Physics & Astronomy, Seoul National University,</p>
            <p className="text-gray-500"> 56-1 San, Shillim-dong, Kwanak-gu, Seoul, KOREA </p>
            <p className="text-gray-500"> +82-2-880-6585/6761 </p>
            <p className="text-gray-500 mb-2"> <a href="mailto:mim@astro.snu.ac.kr">mim@astro.snu.ac.kr</a></p>
          <hr/>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-900 uppercase text-white">About Us</h2>
          <hr className="mb-2"/>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                  <a href="/team" className="hover:color-org">Team</a>
              </li>
              <li className="mb-2">
                  <a href="/groups" className="hover:color-org">Working Group</a>
              </li>
            </ul>
          <hr className="mb-6"/>
          <h2 className="text-sm font-semibold text-gray-900 uppercase text-white">7DT</h2>
          <hr className="mb-2"/>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-2">
                <a href="/telescope" className="hover:color-org">Overview</a>
            </li>
            <li className="mb-2">
                <a href="/location" className="hover:color-org">Location</a>
            </li>
            <li className="mb-2">
                <a href="/specification" className="hover:color-org">Specification</a>
            </li>
          </ul>
          <hr/>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-900 uppercase text-white">7DS</h2>
          <hr className="mb-2"/>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-2">
                <a href="#" className="hover:color-org">Survey</a>
            </li>
            <li className="mb-2">
                <a href="#" className="hover:color-org">Status</a>
            </li>
            <li className="mb-2">
                <a href="#" className="hover:color-org">Data</a>
            </li>
          </ul>
          <hr/>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-900 uppercase text-white">Science</h2>
          <hr className="mb-2"/>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-2">
                <a href="/science" className="hover:color-org">Scientific Goals</a>
            </li>
            <li className="mb-2">
                <a href="/publication" className="hover:color-org">Publications</a>
            </li>
          </ul>
          <hr className="mb-6"/>
          <h2 className="text-sm font-semibold text-gray-900 uppercase text-white">
          <a href="/news">News</a></h2>
          
        </div>
      </div>
    </div>
  </footer>
  );
}


export default FooterBar;
