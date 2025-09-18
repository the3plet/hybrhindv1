import {  Facebook, Instagram, Linkedin } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="md:px-24 px-0 text-white bg-[#1C398E]" id="contact">
      <Separator className="my-4 bg-gray-300" />
      <div className="flex px-8 justify-between">
        <div className="m-4 ">
          <span className="flex gap-1 items-center">
            <img src="/logo2.png" alt="logo" className="w-40" />
          </span>
          <p className="text-sm font-Karla font-light">
            Alhind Academy Office <br />
            Near Comtrust Hospital Puthiyara
            <br /> Kozhikode
          </p>
          <Separator className=" bg-gray-300 opacity-45" />
          <p>
            info@hybrhind.com
            <br />
            8089 905 333
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h1>Sections</h1>
          <div className="flex flex-col md:flex-row items-left md:text-center justify-center text-sm font-light md:gap-3  ">
            <a href="#solution">
              <p className="hover:underline">Solutions</p>
            </a>
            <a href="#product">
              <p className="hover:underline">Products</p>
            </a>
            <a href="#about">
              <p className="hover:underline">About Us</p>
            </a>
            <a href="#conatct">
              <p className="hover:underline">Contact Us</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-between py-10 items-center px-10">
        <div className="flex font-Karla text-right text-xs justify-center tracking-widest gap-4 ">
          <a href="https://www.facebook.com/hybrhind">
            <h2 className="flex items-center gap-1 hover:underline cursor-pointer text-sm md:text-lg font-light">
              <Facebook size={20} />
              Facebook
            </h2>
          </a>
          <a href="https://www.linkedin.com/company/hybrhind">
            <h2 className="flex items-center gap-1 hover:underline cursor-pointer text-sm md:text-lg font-light">
              <Linkedin size={20} />
              Linkedin
            </h2>
          </a>
          <a href="https://www.instagram.com/hybrhind/">
            <h2 className="flex items-center gap-1 hover:underline cursor-pointer text-sm md:text-lg font-light">
              <Instagram size={20} />
              Instagram
            </h2>
          </a>
        </div>
        <h1 className="font-Karla text-[#00000] text-xs justify-center items-end pb-1 hidden md:flex">
          ©2025 Hybrhind All Right Reserved
        </h1>
      </div>
      <h1 className="font-Karla text-xs flex justify-center items-end pb-1 md:hidden">
        ©2025 Hybrhind All Right Reserved
      </h1>
    </div>
  );
};

export default Footer;
