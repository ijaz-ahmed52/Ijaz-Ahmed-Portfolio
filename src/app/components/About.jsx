"use client"
import { motion } from "framer-motion";
const About = () => {
  const contentAnimation = {
    hidden: {
      x: -40,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div id="about" className="w-full bg-[#0F172A] text-white px-6 md:px-16 py-16 flex flex-col items-center  md:text-start space-y-3">
      <h2 className="text-3xl md:text-5xl font-bold text-[#38BDF8] mb-6">
        About Me
      </h2>
      <motion.div
        variants={contentAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="flex flex-col gap-4 max-w-3xl text-center"
      >
        <p className="text-gray-300 text-base  md:text-lg leading-6  mx-auto">
          I'm a Frontend Developer from Peshawar, Pakistan, passionate about
          creating responsive and interactive web applications. I enjoy turning
          ideas into modern user interfaces using React.js, Next.js, and
          Tailwind CSS.
        </p>
        <p className="text-gray-300 text-base md:text-lg leading-6  mx-auto">
          I'm currently learning backend development with Node.js, Express.js, and MongoDB to become a Full Stack Developer.
        </p>
        
      </motion.div>
    </motion.div>
  );
};
export default About;
