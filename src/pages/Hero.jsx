import React, { useEffect, useState } from "react";
import "./Home.css";
import {motion} from "framer-motion";

const Hero = (props) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div className="relative flex md:mt-28 justify-center h-fit backdrop-blur-lg">
<div 
  className="absolute flex flex-col gap-6 top-[40%] left-[15%]">
 <div className="relative flex items-center justify-center w-50 h-24 rounded-xl bg-gradient-to-br from-[#3c1b3b] to-[#1a1a1f] shadow-lg p-4">
  {/* Border effect */}
  <div className="absolute inset-0 rounded-xl border border-white/20"></div>
  
  {/* Content */}
  <div className="z-10 flex flex-col items-center text-center">
    <span className="text-xl md:text-2xl font-bold text-white">240+</span>
    <span className="mt-2 text-sm text-gray-300 tracking-widest">Partners</span>
  </div>
</div>

        <div className="relative flex items-center justify-center w-50 h-24 rounded-xl bg-gradient-to-br from-[#3c1b3b] to-[#1a1a1f] shadow-lg p-4">
  {/* Border effect */}
  <div className="absolute inset-0 rounded-xl border border-white/20"></div>
  
  {/* Content */}
  <div className="z-10 flex flex-col items-center text-center">
    <span className="text-xl md:text-2xl font-bold text-white">92%</span>
    <span className="mt-2 text-sm text-gray-300 tracking-widest">FASTER TECHNOLOGY</span>
  </div>
        </div>


</div>
      <div className="z-100 absolute top-[50%] right-[10%]  w-80 h-fit flex flex-col gap-5 justify-center items-end ">
        <h6 className="tracking-widest text-base text-yellow-50/70 text-end">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, distinctio?</h6>
        <div className="w-36 ">
          <button className="text-base bg-white px-2  py-2 w-full cursor-pointer text-black rounded-full hover:bg-white/80="><span>Get Started</span></button>
        </div>
        </div>
        <motion.div
  animate={{
    x: [0, 100, 300, 500, 0], // Animates horizontally
  }}
  transition={{
    duration: 15.5,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut", // Applies smooth easing
  }}
  className="w-80 h-80 rounded-full absolute top-[50%] -left-20 bg-orange-600"
  style={{
    imageRendering: "pixelated",
    filter: "blur(100px) contrast(150%) brightness(90%)", // Combined filter effects
  }}
/>

        <motion.div
            animate={{
              y: [0,-10,-40,-100,-200,-300,-400,-500,-400,-300,-200,-100,-50,0],
            }}
            transition={{
              duration: 10.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut", // Smooth easing for the motion
            }}
        className="w-60 h-60 rounded-full absolute top-[20%] -right-20 bg-fuchsia-600"
        style={{
          imageRendering: "pixelated", // Ensures sharp edges for pixelation
          filter: "blur(110px)", // Adds a blur to simulate pixelation
        }}
      />
      <div className="h-fit flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="  bruno-ace-sc-regular text-[6rem]">
          <span className="bg-gradient-to-r from-slate-100 to-slate-600 bg-clip-text text-transparent">
            WEB3
          </span>{" "}
          <span className="bg-gradient-to-r from-slate-100 to-slate-600 bg-clip-text text-transparent">
            DESIGN
          </span>
        </motion.h1>
        <div className="-mt-16 absolute top-40">
            <motion.h1
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.5, delay: 1.5 }}
              className="bruno-ace-sc-regular text-[6rem] bg-gradient-to-r from-fuchsia-600 to-rose-400 bg-clip-text text-transparent text-center ">
            Agency
          </motion.h1>
        </div>
        <div className=" md:w-[500px] flex justify-center z-10 h-full">
          <motion.img
            src="/ai1.png"
            alt="Description"
              className="w-96 h-auto rounded-lg shadow-lg z-10"
              animate={{ y: scrollY * 0.1 }} // Adjust speed of the parallax effect
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero
