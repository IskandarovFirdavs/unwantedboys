"use client";

import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-01-04T19:00:00"); // Next match date

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div className="text-center">
        <span className="text-4xl font-bold text-[#DC143C]">
          {timeLeft.days.toString().padStart(2, "0")}
        </span>
        <p className="text-xs font-semibold text-muted-foreground">DAYS</p>
      </div>
      <span className="text-4xl font-bold text-[#DC143C]">:</span>
      <div className="text-center">
        <span className="text-4xl font-bold text-[#DC143C]">
          {timeLeft.hours.toString().padStart(2, "0")}
        </span>
        <p className="text-xs font-semibold text-muted-foreground">HOURS</p>
      </div>
      <span className="text-4xl font-bold text-[#DC143C]">:</span>
      <div className="text-center">
        <span className="text-4xl font-bold text-[#DC143C]">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </span>
        <p className="text-xs font-semibold text-muted-foreground">MINS</p>
      </div>
      <span className="text-4xl font-bold text-[#DC143C]">:</span>
      <div className="text-center">
        <span className="text-4xl font-bold text-[#DC143C]">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </span>
        <p className="text-xs font-semibold text-muted-foreground">SECS</p>
      </div>
    </div>
  );
}
