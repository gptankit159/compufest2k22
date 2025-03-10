import React from "react";

const ScheEvent1 = ({ date, time, name }) => {
  return (
    <div className="py-6 flex flex-col flex-wrap md:flex-nowrap md:flex-row lg:items-center bg-bg_custom">
      <div className="md:w-64 md:mb-0 mb-1 flex-shrink-0 flex flex-col">
        <span className="font-bold title-font text-grey-600 lg:text-lg">
          {date}
        </span>
        <span className="mt-0 text-gray-700 lg:text-base">{time}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-lg lg:text-xl font-medium text-grey-900 title-font mb-2">
          {name}
        </h2>
      </div>
    </div>
  );
};
// const ScheEvent = ({ date, time, name }) => {
//   return (
//     <tr>
//       <td className="p-1 pl-5">{date}</td>
//       <td className="p-1 pl-5">{time}</td>
//       <td className="p-1 pl-5">{name}</td>
//     </tr>
//   );
// };


const allEvents = [
  {
    date: "1st September",
    time: "10 am",
    name: "Inauguration",
  },
    {
    date: "1st September",
    time: "11 am to 2 pm",
    name: "Binary Search",
  },
    {
    date: "1st September",
    time: "11 am to 2 pm",
    name: "Gamathon",
  },
    {
    date: "1st September",
    time: "11 am to 2 pm",
    name: "SPARQ Game",
  },
    {
    date: "1st September",
    time: "11 am to 2 pm",
    name: "Reverse Coding",
  },
    {
    date: "3rd September",
    time: "11 am to 1 pm",
    name: "Code Breakers",
  },
    {
    date: "1st September",
    time: "12 pm to 3 pm",
    name: "Table Topics",
  },
    {
    date: "1st September",
    time: "2 pm Onwards",
    name: "Game Valorant",
  },
    {
    date: "1st September",
    time: "2 pm to 5 pm",
    name: "Chronowar",
  },
  {
    date: "1st September",
    time: "3 pm to 5 pm",
    name: "Computing Technologies",
  },
  {
    date: "1nd September",
    time: "10 am to 1 pm",
    name: "Codigo",
  },
  {
    date: "2nd September",
    time: "10 am to 1 pm",
    name: "Articka",
  },
  {
    date: "2nd September",
    time: "10 am to 2 pm",
    name: "Izzhar",
  },
  {
    date: "2nd & 3rd September",
    time: "10 am Onwards",
    name: "Hackathon",
  },
  {
    date: "2nd & 3rd September",
    time: "10 am Onwards",
    name: "Burn-a-Word",
  },
  {
    date: "2nd & 3rd September",
    time: "10 am Onwards",
    name: "Creative Crisp",
  },
  {
    date: "2nd & 3rd September",
    time: "10 am Onwards",
    name: "Snapzia ",
  }, 
];

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="text-gray-700 bg-bg_custom body-font overflow-hidden"
    >
      <div className="container px-8 lg:px-20 py-24 mx-auto lg:w-2/3">
        <h2 className="text-indigo-400 text-3xl lg:text-4xl mb-8 font-semibold">
          Schedule
        </h2>
        <div className="-my-8 divide-y-2 divide-gray-800">
          {allEvents &&
            allEvents.map((event) => <ScheEvent1 key={event.name} {...event} />)}
        </div>


      {/* <table className="table-auto w-full ">
        <thead>
          <tr>
            <th >Date</th>
            <th >Time</th>
            <th >Event</th>
          </tr>
          <hr />
        </thead>
        <tbody>
        
        {allEvents &&
            allEvents.map((event) => <ScheEvent key={event.name} {...event} />)}
        </tbody>
      </table> */}

      </div>
    </section>
  );
};

export default Schedule;
