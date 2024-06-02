import { data } from "@/constant";
import {
  advantage,
  backgroundgradient,
  customizable,
  ellipse,
  home,
  starblack,
} from "@/public/images";
import { Bell, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Customization = () => {
  return (
    <div
      id="customization"
      className="min-h-screen  w-full grid md:grid-cols-2 grid-cols-1 grid-cols-reverse "
    >
      <div className="relative top-0 left-0 flex items-center justify-center max-md:order-2">
        <Image
          src={customizable}
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
          className="h-10 w-10 absolute bottom-0 right-0 "
        />
        <Image
          src={starblack}
          width={300}
          height={300}
          alt="homesection"
          className="h-10 w-10 absolute left-0 top-0 "
        />
      </div>
      <div className="max-md:order-1 flex items-center relative top-0">
        <div className=" py-12 space-y-4">
          <div className=" flex gap-2 flex-col">
            <div className="flex items-center gap-5 h-full ">
              <div className="bg-theme h-10 w-10 p-1 flex items-center justify-center rounded-full">
                <Bell className="text-white " />
              </div>
              <h4 className="font-semibold  text-black text-xl md:text-3xl flex items-center">
                Fully Customizable
              </h4>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis provident voluptate perferendis tempora porro quaerat
                dignissimos perspiciatis, doloribus blanditiis repellat. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, libero?
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Customization;
