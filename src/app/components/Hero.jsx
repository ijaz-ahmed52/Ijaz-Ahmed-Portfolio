"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  const imageAnimation = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex-col flex justify-center items-center md:flex-row px-6 md:px-16 py-12 gap-12">
      <motion.div
        variants={textAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
        }}
        className="flex-1 flex flex-col text-center md:text-left space-y-6 order-2 md:order-1"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-[#38BDF8] text-xl md:text-2xl block">
            Hi , I am
          </span>{" "}
          Ijaz Ahmed
        </h1>
        <h3 className="text-[#38BDF8] text-2xl md:text-3xl">
          Frontend Developer | React.js & Next.js
        </h3>
        <p className="text-gray-300 text-base md:text-lg leading-8 max-w-2xl">
          Passionate Frontend Developer specializing in React.js and Next.js
          with experience building responsive, user-friendly web applications.
          Currently expanding my expertise in Node.js, Express.js, and MongoDB
          while working toward becoming a Full Stack MERN Developer.
        </p>
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          <Link href={"#projects"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#38BDF8] text-black px-6 py-4 rounded-xl font-semibold hover:bg-[#0EA5E9] transition hover:scale-105"
          >
            View Projects
          </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#38BDF8] text-[#38BDF8] px-6 py-3 rounded-xl hover:bg-[#38BDF8] hover:text-black transition hover:scale-105"
          >
            Download Resume
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        variants={imageAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
        }}
        className="flex-1 flex justify-center order-1 md:order-2"
      >
       <Image
  src="/images/my-pic.jpeg" 
  alt="My picture"
  width={420} 
  height={430} 
  priority // 
  className="w-80 md:w-[420px] h-80 md:h-[430px] object-cover rounded-full border-4 border-[#38BDF8] shadow-2xl hover:scale-105 transition duration-300"
/>
      </motion.div>
    </div>
  );
};
export default Hero;
