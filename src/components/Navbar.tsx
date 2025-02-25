import {
  ListCheckIcon,
  Menu,
  PhoneIncoming,
  Settings,
  StretchHorizontal,
} from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export function Navbar() {
  return (
    <Menubar className="flex justify-between rounded-none border-b border-none py-6 px-2 lg:px-4 sticky bg-white top-0">
      <div className="flex space-x-1 ">
        <img
          src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
          alt="logo"
          width={"35px"}
        />
        <h1 className="text-lg font-extrabold flex items-center font-Karla">
          Hybrhind
        </h1>
      </div>
      <div className="flex md:hidden font-light">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">
            <Menu />
          </MenubarTrigger>
          <MenubarContent className="z-40 bg-white rounded-xl ">
            <a href="#service">
              <MenubarItem className="text-lg gap-1">
                <Settings size={20} />
                Services
              </MenubarItem>
            </a>
            <a href="#product">
              <MenubarItem className="text-lg gap-1">
                <StretchHorizontal size={20} />
                Product
              </MenubarItem>
            </a>
            <a href="#about">
              <MenubarItem className="text-lg gap-1">
                <ListCheckIcon size={20} /> About us
              </MenubarItem>
            </a>
            <a href="#contact">
              <MenubarItem className="text-lg gap-1">
                <PhoneIncoming size={20} /> Contact us
              </MenubarItem>
            </a>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <div className="hidden md:block bg-white z-50">
        <div className="flex">
          <MenubarMenu>
            <a href="#service">
              <MenubarTrigger className="cursor-pointer">Services</MenubarTrigger>
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <a href="#product">
              <MenubarTrigger className="cursor-pointer">Product</MenubarTrigger>
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <a href="#about">
              <MenubarTrigger className="cursor-pointer">About us</MenubarTrigger>
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <a href="#contact">
              <MenubarTrigger className="cursor-pointer">Contact us</MenubarTrigger>
            </a>
          </MenubarMenu>
        </div>
      </div>
    </Menubar>
  );
}
