"use client";

import Image from "next/image";
import navLogo from "../../../public/logo.png";
import Button from "../component/Button";

const NavbarPage = () => {

    const today = new Date();
    const formattedDate = today.toLocaleDateString("bn-BD", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <header className="w-full py-3  bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        <div className="hidden md:block w-32"></div>

        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={navLogo}
              alt="Bangla News 24 Logo"
              className="object-cover"
              width={70}
              height={70}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-red-700 tracking-tight leading-tight">
              Bangla News 24
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              {formattedDate}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button></Button>
        </div>
    </div>
    </header>
  );
};

export default NavbarPage;