import { Menu } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export function Navbar() {
  return (
    <Menubar className="flex justify-between rounded-none border-b border-none px-2 lg:px-4">
      <div>
        <h1 className="text-4xl font-extrabold">Hybrhind</h1>
      </div>
      <div className="flex md:hidden">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">
            <Menu />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Services</MenubarItem>
            <MenubarItem>Product</MenubarItem>
            <MenubarItem>About us</MenubarItem>
            <MenubarItem>Contact us</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <div className="hidden md:block">
        <div className="flex">
          <MenubarMenu>
            <MenubarTrigger className="font-bold">Services</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="relative">Product</MenubarTrigger>
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
