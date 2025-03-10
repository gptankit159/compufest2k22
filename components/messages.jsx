import React from "react";
import getPhotoURL from "../utils/getPhotoUrl";

const HODMsg = () => {
  return (
    <div className="text-gray-700 bg-bg_custom body-font">
      <div className="container px-5 py-10 my-12 pb-0 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-gray-500 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed text-base">
            Technology is the essence of today's world. Being the Head of the
            Computer Technology Department, YCCE, Nagpur, I am glad to announce
            the 27th edition of an annual technical event of the department
            “COMPUFEST 2K22”. We as faculty members work with the sole objective
            of nurturing the students with multidimensional skill sets to make
            them perform impeccably. Amid this global pandemic, events like
            Compufest will keep the technical spark alive in students. Let’s
            embark together on this brilliant journey of Compufest2k22 at
            Computer Technology, YCCE. Good Luck!
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <div className="flex justify-center mb-4">
            <img
              loading="lazy"
              alt="HOD"
              className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0"
              src={getPhotoURL("prof1")}
            />
          </div>
          <h2 className="text-black font-medium title-font tracking-wider text-lg">
            Dr. Rakhi Wajgi
          </h2>
          <p className="text-gray-500">HOD, Computer Technology Department</p>
        </div>
      </div>
    </div>
  );
};

const CoordinatorMsg = ({ photo, msg, name, subtitle }) => {
  return (
    <div className="lg:w-1/4 lg:mb-0 p-4 mb-4 ">
      <div className="h-full text-center">
        <img
          loading="lazy"
          alt="prof"
          className="w-28 h-28 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
          src={photo ? photo : "https://dummyimage.com/302x302"}
        />
        <p className="leading-relaxed text-base">{msg}</p>
        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-4"></span>
        <h2 className="text-black font-medium title-font tracking-wider text-base">
          {name}
        </h2>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

const msgs = [
  {
    msg: "Compufest provides a platform for our students to grow more in technical as well as non-technical world. ",
    name: "Prof. Supriya Thombre",
    subtitle: "Incharge",
    photo: getPhotoURL("prof2"),
  },
  {
    msg: "Compufest provides students with technology traits to compete with the world and be the leaders.",
    name: "Prof. Ganesh Yenurkar",
    subtitle: "Co-Incharge",
    photo: getPhotoURL("prof3"),
  },
];

const Messages = () => {
  return (
    <section id="messages">
      <HODMsg />
      <section className="text-gray-700 bg-bg_custom body-font">
        <div className="container px-5 py-8 mt-0 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {msgs &&
              msgs.map((msg) => <CoordinatorMsg key={msg.name} {...msg} />)}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Messages;
