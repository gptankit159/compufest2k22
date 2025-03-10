import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ClockBlock = ({ value, title }) => {
  return (
    <div className="flex flex-col items-center font-mono">
      <div className="text-3xl text-grey-600">
        {value < 10 ? "0" + value : value}
      </div>
      <div className="text-xs text-gray-800">{title}</div>
    </div>
  );
};

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    expired: true,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    let isMounted = true;

    // Set the date we're counting down to
    var countDownDate = new Date("Sept 1, 2022 10:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // update the state
      if (isMounted) {
        setTimeLeft((prev) => ({ ...prev, days, hours, minutes, seconds }));
      }
      // If the count down is finished
      if (distance < 0) {
        clearInterval(x);
        if (isMounted) setTimeLeft((prev) => ({ ...prev, expired: true }));
      } else setTimeLeft((prev) => ({ ...prev, expired: false }));
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(x);
    };
  }, []);
  if (timeLeft.expired === true) {
    return (
      <div className="text-xl text-gray-900">1st Sept. - 3rd Sept., 2022</div>
    );
  } else {
    return (
      <motion.div
        className="flex flex-row gap-6 mt-4 md:mt-0"
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ClockBlock value={timeLeft.days} title={"Days"} />
        <ClockBlock value={timeLeft.hours} title={"Hours"} />
        <ClockBlock value={timeLeft.minutes} title={"Minutes"} />
        <ClockBlock value={timeLeft.seconds} title={"Secs"} />
      </motion.div>
    );
  }
};

export default CountDown;
