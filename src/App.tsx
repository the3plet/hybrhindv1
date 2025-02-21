import AboutUs from "./components/AboutUs";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IconScroll from "./components/IconScroll";
import { Navbar } from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import TextScroll from "./components/TextScroll";

function App() {
  return (
    <>
      <Navbar />
      <div className="md:px-[35vh]">
        <div className="flex flex-col items-center justify-center h-[80vh] md:h-screen">
          <Hero />
        <IconScroll />
        </div>
        <Expertise />
<div className="py-4">

        <TextScroll />
        <TextScroll />
        <TextScroll />
</div>
        <Products />
        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
