import { data } from "@/constant";
import {
  advantage,
  backgroundgradient,
  ellipse,
  home,
  starblack,
} from "@/public/images";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const FeatureSection = () => {
  return (
    <div
      id="features"
      className="min-h-screen w-full grid md:grid-cols-2 grid-cols-1 grid-cols-reverse "
    >
      <div className="relative top-0 left-0 flex items-center justify-center max-md:order-2">
        <Image
          src={advantage}
          width={500}
          height={500}
          alt="homesection"
          className="max-w-[450px] w-full  relative z-40"
        />
        <Image
          src={ellipse}
          width={500}
          height={500}
          alt="homesection"
          className=" max-w-[450px] w-full  absolute top-0 z-10"
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
          className="h-10 w-10 absolute bottom-0 left-0 "
        />
        <Image
          src={starblack}
          width={300}
          height={300}
          alt="homesection"
          className="h-10 w-10 absolute right-0 top-0 "
        />
      </div>
      <div className="max-md:order-1 pt-10 relative top-0">
        <h3 className="uppercase md:text-2xl text-xl text-theme ">Features</h3>
        <h2 className="font-bold text-4xl text-black">Try Premium</h2>

        <div className=" py-12 space-y-4">
          {data.features.map((item, idx) => (
            <div className=" flex gap-2 " key={idx}>
              {/* <Image
                src={item.icon}
                width={50}
                height={50}
                className="h-10 w-10"
                alt="icons"
              /> */}

              <div className="bg-theme h-5 w-5 p-1 flex items-center justify-center rounded-full">
                <StarIcon className="text-white " />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold  text-black">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Image
          src={starblack}
          width={300}
          height={300}
          alt="homesection"
          className="h-10 w-10 absolute right-0 bottom-0 "
        />
      </div>
    </div>
  );
};

export default FeatureSection;
