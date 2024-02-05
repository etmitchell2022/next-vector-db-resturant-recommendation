import React, { useEffect, useState } from 'react';
import { CountdownItem } from './countdownItem';

type CountdownTypes = {
  targetDate: string;
};

type timeTypes = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const Countdown: React.FC<CountdownTypes> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: timeTypes = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div className='flex flex-row h-full w-full gap-2 justify-evenly items-center'>
      <CountdownItem value={timeLeft.days} unit='days' />
      <CountdownItem value={timeLeft.hours} unit='hours' />
      <CountdownItem value={timeLeft.minutes} unit='minutes' />
      <CountdownItem value={timeLeft.seconds} unit='seconds' />
    </div>
  );
};
