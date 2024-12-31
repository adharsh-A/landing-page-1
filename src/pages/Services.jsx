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
        <h2 className="bruno-ace-sc-regular md:text-6xl text-3xl">Our Services</h2>
      </div>
      <div className="w-full h-fit flex flex-col md:flex-row">
        {/* part 1 */}
        <div className=" md:w-1/2 w-full h-full md:p-40 p-10  relative flex items-start flex-col">
          <h2 className="tracking-wider text-2xl md:text-4xl  bruno-ace-sc-regular">UI/UX Design</h2>
          <p className="tracking-wider md:text-lg text-sm w-5/5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ex
            dolores, assumenda nulla dolorum corrupti.
          </p>
          <ol className="flex gap-2 md:gap-4 flex-col">
            <li className="flex ">
              <CheckCircleIcon size={28} color="#d96363" strokeWidth={1.25} className="mr-2" />{" "}
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="flex ">
              <CheckCircleIcon size={28} color="#d96363" strokeWidth={1.25} className="mr-2"/>{" "}
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="flex ">
              <CheckCircleIcon size={28} color="#d96363" strokeWidth={1.25} className="mr-2"/>{" "}
              <span>Lorem ipsum dolor sit.</span>
            </li>
          </ol>
          <Button
            className="bg-transparent border border-white/70 flex md:mt-4 mt-6 rounded-2xl  lg:w-32 text-base px-2 py-2"
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

        <div className="md:w-1/2 w-full h-full ">
                  <motion.div
  animate={{ opacity: 1, y: [0, -20, 0] }} // Loop up and down on the y-axis
  transition={{
    duration: 5, // Control the speed of the up and down motion
    repeat: Infinity,
    repeatType: "loop", // Infinite loop
    ease: "easeInOut", // Smooth easing for smooth animation
  }}                      className="md:w-4/5 w-full p-2">
            <img
              src="/ai2-removebg-preview.webp"
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
