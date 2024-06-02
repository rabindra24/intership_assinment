import { frequentlyAskedQue } from "@/constant";
import React from "react";

const Faqsection = async () => {
  const generatePinkArray = async (size: any) => {
    // Define the pattern indices
    const pattern = [0, 3, 4, 7, 10, 11];
    const patternLength = 12;

    // Generate the array with the pattern
    return Array.from({ length: size }, (_, i) => {
      // Calculate the index within the repeating pattern
      let patternIndex = i % patternLength;
      // Return "pink" or an empty string based on the pattern
      return pattern.includes(patternIndex) ? "pink" : "";
    });
  };

  const data = await generatePinkArray(frequentlyAskedQue.length);

  return (
    <div id="faq" className="space-y-5">
      <div>
        <h3 className="uppercase tracking-widest">Faq</h3>
        <h4 className="font-bold  text-black md:text-4xl text-2xl lg:text-5xl flex items-center max-w-[550px]">
          Frequently Asked Questions
        </h4>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
        {frequentlyAskedQue.map((item, idx) => (
          <div
            key={idx}
            className={`${
              data[idx] === "pink" ? "bg-theme text-white" : ""
            } px-6 py-10 rounded-lg`}
          >
            <h3
              className={`${
                data[idx] === "pink" ? " text-white" : " text-black"
              }  text-2xl font-semibold`}
            >
              {item.title}
            </h3>
            <p
              className={`${
                data[idx] === "pink" ? "text-gray-200" : "text-gray-500"
              }`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqsection;
