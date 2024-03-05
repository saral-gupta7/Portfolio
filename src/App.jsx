import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, AboutMe, Tech, Interest, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* #240090 */}
      <div className="relative z-0 bg-[#000000]">
        {/* prev bg-hero-pattern */}
        {/* some good darks: #1a1a1d 
        #101532*/}
        <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <AboutMe />
        <Tech />
        <Interest />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
