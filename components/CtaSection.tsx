import React from "react";
import CustomeButton from "./CustomeButton";
import Image from "next/image";
import {
  backgroundgradient,
  banner,
  halfellipse,
  starwhite,
} from "@/public/images";

const CtaSection = () => {
  return (
    <div id="cta" className=" py-10">
      <div className="h-full bg-black py-36 px-10 rounded-xl flex  w-full  flex-col relative top-0 overflow-hidden">
        <div className="relative z-50">
          <h3 className="text-white text-4xl font-semibold">
            Ready To Get Started?
          </h3>
          <p className="text-gray-300 max-w-[450px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            iste?
          </p>
          <CustomeButton
            title="Download"
            classNames="mt-5 text-black bg-white hover:bg-black hover:text-white"
          />
        </div>
        <div className="absolute md:flex hidden right-0 top-0  items-center justify-center order-2">
          <Image
            src={banner}
            width={500}
            height={500}
            alt="banner"
            className="relative z-30"
          />
          <Image
            src={backgroundgradient}
            width={300}
            height={300}
            alt="homesection"
            className="md:w-96 w-52 h-52 md:h-96 absolute md:bottom-0 bottom-10"
          />
          <Image
            src={backgroundgradient}
            width={300}
            height={300}
            alt="homesection"
            className="md:w-96 w-52 h-52 md:h-96 absolute bottom-52 right-0 "
          />
          <Image
            src={starwhite}
            width={300}
            height={300}
            alt="homesection"
            className="h-14 w-14 absolute  top-5 left-0 "
          />
        </div>

        <Image
          src={halfellipse}
          width={500}
          height={500}
          alt="banner"
          className="absolute left-0 -bottom-10"
        />
      </div>
    </div>
  );
};

export default CtaSection;
