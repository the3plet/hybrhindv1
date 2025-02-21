import { Chrome, Facebook, Instagram, Linkedin } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="md:px-24 px-4">
      <Separator className="my-4 bg-gray-300" />
      <div className="flex px-8 justify-between">
        <div className="m-4 ">
          <span className="flex gap-1 items-center">
            <Chrome className="font-light" />
            <h1 className="text-sm font-medium font-Karla">Hybrhind</h1>
          </span>
          <p className="text-sm font-Karla font-light">
            Alhind Academy Office <br></br>
            Puthiyara Calicut-673004<br></br>
            Kerala India
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h1>Sections</h1>
          <div className="flex flex-col md:flex-row items-left md:text-center justify-center text-sm font-light md:gap-3  ">
            <p>Service</p>
            <p>Product</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10 items-center px-10">
        <div className="flex font-Karla text-right text-xs justify-center tracking-widest gap-4 ">
          <h2 className="flex items-center gap-1 hover:underline cursor-pointer text-sm md:text-xl font-light">
            <Facebook size={20} />
            Facebook
          </h2>
          <h2 className="flex items-center gap-1 hover:underline cursor-pointer text-sm md:text-xl font-light">
            <Linkedin size={20} />
            Linkedin
          </h2>
          <h2 className="flex items-center gap-1 hover:underline cursor-pointer text-sm md:text-xl font-light">
            <Instagram size={20} />
            Instagram
          </h2>
        </div>
        <h1 className="font-Karla text-[#707070] text-xs justify-center items-end pb-1 hidden md:flex">
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
