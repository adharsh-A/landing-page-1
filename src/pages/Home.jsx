import React from "react"
import Hero from "./Hero";
import ParallaxText from "./ParallaxText";
import "./Home.css"
import { motion, useScroll, useSpring } from "framer-motion";
import Services from "./Services";
import Statistics from "./Statistics";
import Customers from "./Customers";


const Home = (props) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.1,
    });
    return (
        <>

                  <motion.div className="progress-bar" style={{ scaleX }} />
        <Hero />
        <div className="mt-[4rem]">
      <ParallaxText baseVelocity={-3}>FrontEnd Development</ParallaxText>
            <ParallaxText baseVelocity={3}>Web Development</ParallaxText>
        </div>
            <Services />
            <Statistics />
            <Customers />
            
          </>
  )
};

export default Home;
