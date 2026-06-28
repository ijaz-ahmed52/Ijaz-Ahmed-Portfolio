"use client"
import { motion } from "framer-motion";
import { skills } from "../data/data";
const Skills = () => {
  const containerAnimation = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
    
  };

  return (
    <div id="skills" className="bg-[#0F172A] text-white px-6 md:px-16 py-12">
      <h3 className="text-3xl md:text-5xl font-bold text-[#38BDF8] mb-12 text-center">
       Technical Skills
      </h3>
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8"
      >
        {Object.entries(skills).map(([category, skillsList]) => (
          <motion.div
            variants={cardAnimation}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{
              y: -8,
            }}
            key={category}
            className="bg-[#1E293B] p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill) => (
                <motion.span
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="bg-[#0F172A] text-gray-300 px-4 py-2 rounded-full border border-[#38BDF8]/20 hover:border-[#38BDF8] hover:text-white transition"
                  key={skill}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default Skills;
