import { backgroundgradient, ellipse, home, movietrail, starblack, starwhite } from "@/public/images";
import { heros } from "@/types";
import Image from "next/image";
import React from "react";
import CustomeButton from "./CustomeButton";

const LandingSection = ({ data }: { data: heros }) => {
  return (
    <section className="">
      <div className="flex md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left pt-24     relative top-0">
          <h1 className="title-font font-bold md:text-6xl lg:text-8xl text-5xl mb-4 text-black">
            {data.headline}
          </h1>
          <p className="mb-8 leading-relaxed">{data.subheadline}</p>
          <div className="flex gap-5">
            <CustomeButton title="Get Started" classNames="p-3" />
            <CustomeButton
              title="Watch Video"
              classNames="p-3 bg-white text-black hover:bg-black hover:text-white"
            />
          </div>
          <Image
            src={backgroundgradient}
            width={300}
            height={300}
            alt="homesection"
            className="md:w-72 md:h-72 absolute md:top-0 -top-20 md:right-36 right-0 -z-10"
          />
          <Image
            src={movietrail}
            width={1000}
            height={800}
            alt="homesection"
            className="w-[600px] h-full  relative md:-top-16  right-0 z-10"
          />
          <Image
            src={starblack}
            width={300}
            height={300}
            alt="homesection"
            className="h-10 w-10 absolute top-0 right-0 "
          />
        </div>
        <div className="lg:max-w-lg md:w-1/2 w-full relative top-0 left-0 ">
          <Image
            src={home}
            width={500}
            height={500}
            alt="homesection"
            className="max-w-[500px] mx-auto w-full h-full relative z-40"
          />
          <Image
            src={ellipse}
            width={500}
            height={500}
            alt="homesection"
            className="max-w-[500px] mx-auto w-full h-full absolute top-0 z-10"
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
            src={starblack}
            width={300}
            height={300}
            alt="homesection"
            className="h-10 w-10 absolute top-0 right-0 "
          />
          <Image
            src={starblack}
            width={300}
            height={300}
            alt="homesection"
            className="h-10 w-10 absolute bottom-0 left-0 "
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
