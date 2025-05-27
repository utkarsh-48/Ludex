import Image from "next/image";
import React from "react";
import Logo from "../Public/logo.webp";
import { Search } from "lucide-react";
import { ThemeToggle } from "./components/ui/theme-toggle";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3 items-center">
      <div className="flex items-center gap-2">
        <Image
          src={Logo}
          alt="logo"
          width={40}
          height={40}
          className="rounded"
        />
      </div>
      <div className="relative flex-1 mx-6 max-w-md">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search games..."
          className="w-full bg-white text-black rounded-full py-2 pl-10 pr-4 outline-none focus:outline-none focus:ring-2 focus:ring-black transition duration-200 ease-in-out"
        />
      </div>{" "}
      <div className="ml-3 mr-3">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
