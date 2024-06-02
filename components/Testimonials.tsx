import { data } from "@/constant";
import {
  advantage,
  backgroundgradient,
  ellipse,
  home,
  starblack,
  users,
} from "@/public/images";
import { Bell, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div id="testinomials">
      <h3 className="text-black text-center uppercase tracking-widest">
        Testimonials
      </h3>
      <h4 className="text-center font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-black capitalize">
        What Out User Says <br className="md:block hidden"/> about Us?
      </h4>
      <div
        
        className="min-h-screen w-full grid md:grid-cols-2 grid-cols-1 grid-cols-reverse max-md:order-1 "
      >
        <div className="relative top-0 left-0 flex items-center justify-center max-md:order-2">
          <Image
            src={users}
            width={500}
            height={500}
            alt="homesection"
            className="max-w-[500px] w-full  relative z-40"
          />
          <Image
            src={ellipse}
            width={500}
            height={500}
            alt="homesection"
            className=" max-w-[500px] w-full  absolute top-0 z-10"
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
        <div className="max-md:order-1 flex items-center relative z-30">
          <div className=" py-12 space-y-4">
            <div className=" flex gap-2 flex-col">
              <div className="flex items-center gap-5 h-full ">
                <h4 className="font-semibold  text-black md:text-4xl text-2xl lg:text-4xl flex items-center max-w-[550px]">
                  The Best Financial Accounting Ever
                </h4>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 max-w-[550px] text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  quasi quae quam sequi esse explicabo fugiat. Illum distinctio
                  expedita, dignissimos repellat ea dolorum fugiat officiis
                  sapiente magni nulla dolore ipsa debitis, repellendus sint
                  cupiditate corporis possimus, esse veritatis cum at itaque
                  obcaecati. Et magnam mollitia ipsam itaque cupiditate quo
                  quae!
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  neque possimus quaerat sapiente quasi deserunt a incidunt
                  similique esse autem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
