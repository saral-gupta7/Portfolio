import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  AboutMe,
  Tech,
  Interest,
  Contacts,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#000000]">
        <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <AboutMe />
        <Tech />
        {/* <Interest /> */}
        <Contacts />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
