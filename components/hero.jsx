import React, { useState, useEffect, Suspense, lazy } from 'react';
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
// import SplineComponent from "./SplineComponent";
// const SplineComponent = lazy(() => import('./SplineComponent'));

const heroLogoVariants = {
  hidden: {
    x: "calc(100vw - 85vw)",
    opacity: 0,
    rotate: -360,
    originX: 0.5,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
  },
};


const heroTextVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const imgsVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    yoyo: Infinity,
    delay: 2,
    duration: 1,
    type: "Inertia",
  },
};

const Hero = () => {
  const [animateStart, setAnimateStart] = useState(true);
  React.useState(() => {
    setTimeout(() => setAnimateStart(true), 1000);
  }, []);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <div className='relative flex flex-row justify-center items-center '>
        <div className="absolute top-0 max-w-xl">
              <video  src="./assets/robo.mp4" autoPlay={true} loop={true} muted={true}></video>   
        </div>
      </div>
    <div className="min-h-screen pt-48 flex flex-col justify-center relative">       
      
      <div className="absolute z-10 w-full">
      {/* <div><SplineComponent /></div> */}
      <div className="flex flex-col items-center py-4 mt-10 xl:mt-0">
        <div className="flex justify-center items-center">
          <motion.img
            alt="main logo"
            src="/assets/logo.svg"
            initial="hidden"
            animate="visible"
            variants={heroLogoVariants}
            transition={{ type: "spring", stiffness: 20 }}
            className="h-12 md:h-24"
            color="black"
          />
          <AnimatePresence>
            {animateStart ? (
              <motion.div
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.8,
                  duration: 0.1,
                  type: "spring",
                  stiffness: 20,
                }}
                className="font-head text-4xl md:text-7xl text-gray-900 ml-1 relative"
              >
                {" "}
                OMPUFEST
                <span className="block absolute -bottom-10 right-4 text-3xl font-bold">
                  2K22
                </span>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
        <div>    
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="text-center z-40"
          > 
            <p className="mt-12 font-medium text-lg">
              <span className="text-gray-800"> 1<sup>st</sup> International Level Technical Fest</span> 
              <span className="block mt-2 text-gray-900 text-lg md:text-2xl font-medium">
                Department of Computer Technology
              </span>
              <span className="block text-gray-900 text-lg md:text-3xl font-bold">
                Yeshwantrao Chavan College of Engineering
              </span>
              <span className="block text-gray-800 text-xl font-bold pt-2">
                1<sup>st</sup> Sept. to 3<sup>rd</sup> Sept.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
