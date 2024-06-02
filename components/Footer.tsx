import { footerLinks } from "@/constant";
import { logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomeButton from "./CustomeButton";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0  md:text-left">
          <Image
            src={logo}
            width={300}
            height={120}
            className="w-[100px] max-sm:mx-auto"
            alt="logo"
          />{" "}
          <p className="mt-2 text-sm max-md:text-center text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-center">
          {footerLinks.map((item, idx) => (
            <div className="lg:w-1/5 md:w-1/3 w-full px-4" key={idx}>
              <h2 className="title-font  text-black tracking-widest text-lg font-bold mb-3">
                {item.title}
              </h2>
              <nav className="list-none mb-10">
                {item.links.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
          <CustomeButton title="Download" />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="">
          <p className="text-black text-center text-sm ">
            © 2024 UiFry —
            <a
              href="/"
              rel="noopener noreferrer"
              className="text-black ml-1"
              target="_blank"
            >
              @uiFry all right reserved
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
