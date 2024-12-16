import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircleIcon } from "lucide-react";
import React from "react";

const Services = (props) => {
  return (
    <div className="relative h-fit flex flex-col ">
      <div
        className="w-80 h-80 rounded-full absolute top-[50%] -left-20 bg-teal-700"
        style={{
          imageRendering: "pixelated", // Ensures sharp edges for pixelaton
          filter: "blur(100px)", // Adds a blur to simulate pixelation
        }}
      />
      <div
        className="w-80 h-80 rounded-full absolute top-[20%] -right-20 bg-[#5b21b6]"
        style={{
          imageRendering: "pixelated", // Ensures sharp edges for pixelation
          filter: "blur(120px)", // Adds a blur to simulate pixelation
        }}
      />
      <div
        className="w-80 h-80 rounded-full absolute top-[90%] -right-20 bg-[#5b21b6]"
        style={{
          imageRendering: "pixelated", // Ensures sharp edges for pixelation
          filter: "blur(200px)", // Adds a blur to simulate pixelation
        }}
      />
      <div
        className="w-24 h-1/2 absolute top-[0%] left-[40%] bg-[#5b21b6]"
        style={{
          imageRendering: "pixelated", // Ensures sharp edges for pixelation
          filter: "blur(120px)", // Adds a blur to simulate pixelation
        }}
      />
      {/* header */}
      <div className="flex justify-center mt-20 items-center">
        <h2 className="bruno-ace-sc-regular text-6xl">Our Services</h2>
      </div>
      <div className="w-full h-fit flex">
        {/* part 1 */}
        <div className=" w-1/2 h-full p-40  relative flex items-start flex-col">
          <h2 className="tracking-wider  bruno-ace-sc-regular">UI/UX Design</h2>
          <p className="tracking-wider text-lg w-5/5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ex
            dolores, assumenda nulla dolorum corrupti.
          </p>
          <ol className="flex gap-4 flex-col">
            <li className="flex ">
              <CheckCircleIcon size={28} color="#d96363" strokeWidth={1.25} />{" "}
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="flex ">
              <CheckCircleIcon size={28} color="#d96363" strokeWidth={1.25} />{" "}
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="flex ">
              <CheckCircleIcon size={28} color="#d96363" strokeWidth={1.25} />{" "}
              <span>Lorem ipsum dolor sit.</span>
            </li>
          </ol>
          <Button
            className="bg-transparent border border-white/70 flex md:mt-4 rounded-2xl  lg:w-32 text-base px-2 py-2"
            variant="outline"
          >
            Learn More
            <ArrowUpRight
              color="#f9e1e1"
              strokeWidth={1.25}
              absoluteStrokeWidth
            />
          </Button>
        </div>

        <div className="w-1/2 h-full ">
                  <motion.div
                      animate={{ opacity: 1, scale: [1.1, 1], }}
                      transition={{ duration: 1.5, repeat: Infinity,repeatType: "loop",ease: "ease"}}
                      className="w-4/5 p-2">
            <img
              src="/ai2-removebg-preview.png"
              alt="Service illustration"
              width={150}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
