import { data } from "@/constant";
import { advantage, backgroundgradient, ellipse, home, starblack } from "@/public/images";
import { Bell, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const AdvantageSection = () => {
  return (
    <div id="advantages" className=" w-full grid md:grid-cols-2 grid-cols-1 ">
      <div className="relative top-0 left-0 flex items-center justify-center order-2">
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
          className="h-10 w-10 absolute bottom-0 right-0 "
        />
       
      </div>
      <div className="order-1   flex items-center ">
        <div>
          <h3 className="uppercase md:text-2xl text-xl text-theme ">
            Advantages
          </h3>
          <h2 className="font-bold text-4xl text-black">Why Choose UiFry?</h2>
          <div className=" py-12 space-y-4">
            <div className=" flex gap-2 flex-col">
              <div className="flex items-center gap-5 h-full ">
                <div className="bg-theme h-10 w-10 p-1 flex items-center justify-center rounded-full">
                  <Bell className="text-white " />
                </div>
                <h4 className="font-semibold  text-black md:text-3xl text-2xl flex items-center">
                  Clever Notification
                </h4>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis provident voluptate perferendis tempora porro
                  quaerat dignissimos perspiciatis, doloribus blanditiis
                  repellat. <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, libero?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;
