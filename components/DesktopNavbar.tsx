import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public/images";
import { navLinks } from "@/constant";
import CustomeButton from "./CustomeButton";

const DesktopNavbar = ({ classnames }: { classnames?: string }) => {
  return (
    <header className={`text-gray-600 body-font ${classnames}`}>
      <div className=" mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between ">
        <div className="gap-10 flex flex-wrap flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image
              src={logo}
              width={300}
              height={120}
              className="w-[100px] "
              alt="logo"
            />
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navLinks.map((item, idx) => (
              <Link className="mr-5 " key={idx} href={item.link}>
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <CustomeButton title="Download" />
      </div>
    </header>
  );
};

export default DesktopNavbar;
