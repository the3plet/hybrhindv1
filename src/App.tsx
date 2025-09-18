import AboutUs from "./components/AboutUs";
import AiBot from "./components/AiBot";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Products from "./components/Products";
import Solutions from "./components/Solutions";
import Technology from "./components/Technology";
import { Toaster } from "./components/ui/sonner";
import WhatsAppChat from "./components/WhatsupChat";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className=" "> */}
        <div
          id="hero"
          className="flex flex-col items-center justify-center h-[80vh] md:h-screen md:px-[35vh] bg-white"
        >
          <Hero />
        </div>
        <Solutions/>
        {/* <Expertise /> */}
        {/* <div className="py-4 ">
          <TextScroll />
          <TextScroll />
          <TextScroll />
          </div> */}
          <Technology/>
        <Products />
        <AboutUs />
      {/* </div> */}
      <Footer />
      <Toaster richColors position="bottom-center"/>
      <WhatsAppChat/>
      <AiBot/>
    </>
  );
}

export default App;
