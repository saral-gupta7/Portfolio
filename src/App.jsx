import { BrowserRouter } from "react-router-dom";
import {
  Tech,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  AboutMe,
  Works,
  StarsCanvas,
  Interest,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* #240090 */}
      <div className="relative z-0 bg-[#000000]">
        {/* prev bg-hero-pattern */}
        {/* some good darks: #1a1a1d 
        #101532*/}
        <div className=" relative bg-hero-pattern  bg-cover bg-no-repeat bg-center opacity-100 shadow-lg shadow-slate-700">
          <Navbar />
          <Hero />
        </div>
        <AboutMe />
        <Tech />
        <Interest />
        {/* <Experience /> */}

        {/* <Works /> */}
        {/* <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
