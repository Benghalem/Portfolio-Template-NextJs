"use client";

import React, {useState} from "react";

// about Data
import {AboutData} from "./aboutData";

// components
import Avatar from "../components/Avatar";
import Circles from "../components/Circles";

// counters
import CountUp from "react-countup";

// framer motion
import {motion} from "framer-motion";
import {fadeIn} from "@/types/variants";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(setIndex);
  return (
    <div className=" h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />
      <div className=" container mx-auto h-full flex flex-col items-center  xl:flex-row gap-y-20 pt-8 ">
        {/* text */}
        <div className=" flex-1 flex flex-col justify-center">
          <h2 className="h2">
            Captivng
            <span className=" text-accent"> Lorem ipsum</span> consectetur
            adipisicing
          </h2>
          <p className=" max-w-[500] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Id incidunt aperiam, perspiciatis non praesentium autem neque, enim
            quaerat vero fuga quae error molestias qui iure odio. Voluptatibus
            necessitatibus fuga est.
          </p>
          {/* counters */}
          <div className=" hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0">
            <div className=" flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div
                className=" relative flex-1 after:w-[1px] after:h-full
             after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2 max-w-[100px]">
                  <CountUp start={0} end={9} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div
                className=" relative flex-1 after:w-[1px] after:h-full
             after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2 max-w-[100px]">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* test  */}
              <div
                className=" relative flex-1 after:w-[1px] after:h-full
             after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2 max-w-[100px]">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* test02 */}
              <div className=" relative flex-1 after:w-[1px] ">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2 max-w-[100px]">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* info */}
        <div className=" flex flex-col w-full xl:max-w-[48%] -h-[480px]">
          <div className=" flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {AboutData.map((item, itemInex) => {
              return (
                <div
                  key={itemInex}
                  className={`${
                    index === itemInex &&
                    " text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                  after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemInex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
