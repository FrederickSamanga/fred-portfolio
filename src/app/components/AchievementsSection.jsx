"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const achievementsList = [
  {
    metric: "Experience",
    value: 3,
    postfix: "",
  },
  {
    metric: "Projects",
    value: 15,
    postfix: "+",
  },
  {
    metric: "Websites",
    value: 10,
    postfix: "",
  },
  {
    metric: "Designs",
    value: 500,
    postfix: "+",
  },
  {
    metric: "Clients",
    value: 10,
    postfix: "+",
  },
];

const AnimatedNumber = ({ number }) => {
  const { animatedValue } = useSpring({
    from: { animatedValue: 0 },
    animatedValue: number,
    reset: true, // Always reset animation on remount
    delay: 200,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return <animated.span>{animatedValue.to(n => n.toFixed(0))}</animated.span>;
};

const AchievementsSection = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // Set achievements immediately after component mounts
    setAchievements(achievementsList);
  }, []);

  return (
    <div className="mt-16 mb-24"> 
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-6 flex flex-col sm:flex-row items-center justify-between">
        {achievements.map((achievement, index) => (
          <div
            key={`${achievement.metric}-${index}`} // Unique key for React
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix || ""}
              <AnimatedNumber number={achievement.value} />
              {achievement.postfix || ""}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
