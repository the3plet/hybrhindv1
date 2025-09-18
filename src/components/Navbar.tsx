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
    <Menubar className="flex justify-between rounded-none border-x-0 border-t-0 py-7 md:py-10 px-2 lg:px-4 sticky z-50 bg-white top-0 border-b ">
      <div className="flex space-x-1 ">
        <img
          src="/hybrhindLogo.jpg"
          alt="logo"
          width={"190px"}
        />
        
      </div>
      <div className="flex md:hidden font-light">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">
            <Menu />
          </MenubarTrigger>
          <MenubarContent className="z-40 bg-white rounded-xl mt-4 mr-1">
            <a href="#solution">
              <MenubarItem className="text-lg gap-1">
                <Settings size={20} />
                Solutions
              </MenubarItem>
            </a>
            <a href="#product">
              <MenubarItem className="text-lg gap-1">
                <StretchHorizontal size={20} />
                Products
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
        <div className="flex gap-4 ">
          <MenubarMenu>
            <a href="#solution">
              <MenubarTrigger className="cursor-pointer text-md">Solutions</MenubarTrigger>
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <a href="#product">
              <MenubarTrigger className="cursor-pointer text-md">Products
                
              </MenubarTrigger>
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <a href="#about">
              <MenubarTrigger className="cursor-pointer text-md">About us</MenubarTrigger>
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <a href="#contact">
              <MenubarTrigger className="cursor-pointer text-md">Contact us</MenubarTrigger>
            </a>
          </MenubarMenu>
        </div>
      </div>
    </Menubar>
  );
}
