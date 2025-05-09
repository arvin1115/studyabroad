import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const stats = [
  { title: "Free Advice", percentage: 100, color: "#4ade80" },
  { title: "Satisfied Clients", percentage: 100, color: "#60a5fa" },
  { title: "Visa Success", percentage: 90, color: "#facc15" },
];

const AnimatedCircle = ({ title, percentage, color }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId;
    let startTime;

    const duration = 2000; // animation duration ms

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const next = Math.min((elapsed / duration) * percentage, percentage);
      setProgress(next);
      if (elapsed < duration) {
        frameId = requestAnimationFrame(animate);
      }
    };

    if (inView) {
      frameId = requestAnimationFrame(animate);
    } else {
      setProgress(0);
      startTime = null;
      cancelAnimationFrame(frameId);
    }

    return () => cancelAnimationFrame(frameId);
  }, [inView, percentage]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="w-32 h-32">
        <CircularProgressbar
          value={progress}
          text={`${Math.round(progress)}%`}
          styles={buildStyles({
            pathColor: color,
            trailColor: "#e5e7eb",        // light grey track
            textColor: "#333",
            textSize: "18px",
            pathTransitionDuration: 0,    // disable built-in CSS transition
          })}
        />
      </div>
      <div className="mt-3 text-lg font-semibold text-gray-800 text-center">
        {title}
      </div>
    </div>
  );
};

const WhyWeAreDifferentPremium = () => (
  <section className="py-16 bg-white px-4 max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why we are different?
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        What makes us different makes us better. We are distinctive in the
        quality of our services and stand out from the crowd. Unlike other
        consultancy firms in Bangladesh, we really care for our students. We
        always strive to give the best possible guidelines and solutions that
        a student may require. Our experienced consultants and in-house lawyer
        are always at hand to prepare your visa application documents in a
        perfect way.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {stats.map((stat, idx) => (
        <AnimatedCircle
          key={idx}
          title={stat.title}
          percentage={stat.percentage}
          color={stat.color}
        />
      ))}
    </div>
  </section>
);

export default WhyWeAreDifferentPremium;
