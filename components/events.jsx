import React from "react";
import EventCards from "./eventCards";
import {eventsNational,eventsInterational} from "../data/eventsData";
import { AnimatePresence, motion } from "framer-motion";
const Events = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col text-center w-full mb-20 ">
          {/* <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 mt-5 text-white font-head">
            COMPUFEST 2k22
          </h1> */}
          <p className="px-4 lg:w-2/5 mx-auto text-gray-600 leading-relaxed text-base text-center z-40">
            <span className="block text-indigo-500 text-xl mb-4 font-semibold">
              Celebrating 27 years of excellence!
            </span>
            An International level Technical Symposium of the Dept. of Computer
            Technology, YCCE Nagpur. Many workshops are organized in which
            students learn about new technologies and then take part in a
            competition that follows.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center px-3 mb-10 py-3">
        <div className="w-full mx-auto max-w-2xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
          <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
            
            <a href="#events" className="block relative">
              <img alt="profil" src="assets/imgs/rocket.png" className="mx-auto object-cover rounded-full h-20 w-20 " />
              {/* <a href="#events" className="block relative">
            <motion.img
            alt="main logo"
            src="assets/imgs/rocket.png"
            variants={heroLogoVariants}
            initial="hidden"
            animate="visible"
            transition={{ type: "spring", stiffness: 20 }}
            className="mx-auto object-cover rounded-full h-20 w-20"
            color="black"
          /> */}
            </a>
          </div>
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <p className="text-3xl text-gray-600 dark:text-gray-100 text-center px-5">
            Exciting prizes to all winners and certificates to all winners &amp; participants.
            </p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
        </div>
      </div>
      <hr id="events" className="bg-gray-900 mx-auto w-1/5" style={{ height:"3px"}}/>
      <p className="pt-8 text-3xl mx-auto text-gray-700 text-center z-50 font-semibold">International Events</p>
      <div
        className="text-gray-900 body-font overflow-hidden"
        id="events"
        style={{backgroundColor: "#c9c9c9"}}
      >
        {eventsInterational
          ? eventsInterational.map((event) => <EventCards key={event.title} {...event} />)
          : null}

        {eventsNational
          ? eventsNational.map((event) => <EventCards key={event.title} {...event} />)
          : null}
      </div>
    </section>
  );
};

export default Events;
