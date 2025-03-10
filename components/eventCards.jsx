import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Organizer = ({ photo, name, number }) => {
  let num = "tel:"+number;
  return (
    <div className="flex items-center">
      <img
        loading="lazy"
        alt="photo"
        src={photo ? photo : "/assets/imgs/portraits/defaultAvatar.jpg"}
        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
      />
      <span className="flex-grow flex flex-col pl-4">
        <span className="title-font font-medium text-black">{name}</span>
        <a href={num} className="text-gray-500 text-xs tracking-widest mt-0.5">
          {number}
        </a>
      </span>
    </div>
  );
};

const EventCards = ({
  title,
  img,
  desc,
  category,
  cta,
  ctaLink,
  ctaMore,
  isCTAClosed,
  CTAClosedMsg,
  organizers,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0%",
  });
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: inView ? 0 : null }}
      transition={{ delay: 0.2 }}
      ref={ref}
      className="container px-5 lg:px-12 py-24 mx-auto flex flex-wrap justify-center"
    >
      <div className="lg:mr-8 mb-2 lg:mb-0 rounded-lg lg:text-right overflow-hidden">
        <Image
          src={img}
          alt="Event Poster"
          placeholder={"blur"}
          className="object-cover object-center"
          width={600}
          height={400}
          // width={348}
          // height={492}
        />
      </div>
      <div className="p-4 lg:p-8 md:pl-0 lg:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-gray-400 text-black text-opacity-75 text-sm font-medium tracking-widest">
          {category}
        </span>
        <h2 className="sm:text-3xl text-2xl title-font font-mono font-medium text-black mt-4 mb-4">
          {title}
        </h2>
        <p className="leading-relaxed mb-8 text-gray-700 text-justify">{desc}</p>
        <div className="flex flex-col justify-center items-left gap-4 xl:flex-row xl:justify-start xl:items-end xl:gap-0 flex-wrap pr-20 pb-4 mb-4 md:pb-6 md:mb-6 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
          {ctaMore ? (
            <div className="text-gray-500 xl:mr-3 inline-flex items-center leading-none text-lg lg:pr-3 py-1">
              {ctaMore}
            </div>
          ) : null}
          <a
            href={ctaLink && !isCTAClosed ? ctaLink : "#"}
            target="_blank"
            rel="noopener noreferrer" 
            className={`group inline-flex items-center mr-auto xl:mr-0 xl:ml-auto py-2 px-3 rounded-lg ring-2 hover:bg-indigo-400 focus:bg-indigo-400 hover:text-gray-900 focus:text-gray-900 transition-colors ${
              isCTAClosed
                ? `pointer-events-none text-gray-500 ring-gray-500`
                : `text-indigo-400 ring-indigo-400`
            }`}
          >
            {!isCTAClosed ? cta : CTAClosedMsg}
            <svg
              className="w-4 h-4 ml-1 mr-1 transform group-hover:translate-x-2 transition-transform"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="inline-flex items-center flex-wrap gap-2 md:gap-8">
          {organizers
            ? organizers.map((organizer) => (
                <Organizer key={organizer.number} {...organizer} />
              ))
            : null}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCards;
