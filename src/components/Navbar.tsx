import { ListCheckIcon, Menu, PhoneIncoming, Settings, StretchHorizontal } from "lucide-react";
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
        <h1 className="text-lg font-extrabold flex items-center font-Karla">Hybrhind</h1>
      </div>
      <div className="flex md:hidden font-light" >
        <MenubarMenu>
          <MenubarTrigger className="font-bold">
            <Menu />
          </MenubarTrigger>
          <MenubarContent className="z-40 bg-white rounded-xl ">
            <MenubarItem className="text-lg gap-1"><Settings size={20}/>Services</MenubarItem>
            <MenubarItem className="text-lg gap-1"><StretchHorizontal size={20}/>Product</MenubarItem>
            <MenubarItem className="text-lg gap-1"><ListCheckIcon size={20}/> About us</MenubarItem>
            <MenubarItem className="text-lg gap-1"><PhoneIncoming size={20}/> Contact us</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <div className="hidden md:block ">
        <div className="flex ">
          <MenubarMenu>
            <MenubarTrigger>Services</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger >Product</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>About us</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Contact us</MenubarTrigger>
          </MenubarMenu>
        </div>
      </div>
    </Menubar>
  );
}
