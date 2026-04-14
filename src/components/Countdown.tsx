import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 3 days from now for demo purposes
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 px-8 bg-primary text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest opacity-80">Enrollment closes in:</h2>
        <div className="flex justify-center gap-4 sm:gap-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-xl flex items-center justify-center text-3xl sm:text-5xl font-black mb-2 border border-white/20">
                {String(item.value).padStart(2, '0')}
              </div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
