import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { CheckCircleIcon } from "lucide-react";

const Services2 = (props) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ threshold: 0.5 }}
      className="w-full h-fit flex flex-row-reverse">
        {/* part 1 */}
        <div className=" w-1/2 h-full p-40  relative flex items-start flex-col">
          <h2 className="tracking-wider  bruno-ace-sc-regular">UI/UX Design</h2>
          <p className="tracking-wider text-lg w-5/5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ex
            dolores, assumenda nulla dolorum corrupti.
          </p>
          <ol className="flex gap-4 flex-col">
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

        <div className="w-1/2 h-full pl-32">
                  <motion.div
  animate={{ opacity: 1, y: [0, -20, 0] }} // Loop up and down on the y-axis
  transition={{
    duration: 5, // Control the speed of the up and down motion
    repeat: Infinity,
    repeatType: "loop", // Infinite loop
    ease: "easeInOut", // Smooth easing for smooth animation
  }}                      className="w-4/5 p-2">
            <img
              src="/ai2-removebg-preview.png"
              alt="Service illustration"
              width={150}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
  )
};

export default Services2;
