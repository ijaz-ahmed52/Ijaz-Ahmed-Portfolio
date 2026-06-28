import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div id="footer" className="bg-[#0F172A] text-white px-6 md:px-16 py-16 ">
      <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Ijaz Ahmed</h3>
          <p className="text-gray-400">MERN Stack Developer</p>
          <p className="text-gray-500 text-sm">
            Building modern web applications with React & Node.js
          </p>
        </div>
        <div className="flex gap-7">
          <a href="https://github.com/ijaz-ahmed52" target="_blank">
            <FaGithub className="text-2xl text-gray-300 hover:text-[#38BDF8] cursor-pointer transition"/>
          </a>
          <a href="https://www.linkedin.com/in/ijaz-ahmed-web989/" target="_blank">
            <FaLinkedin className="text-2xl text-gray-300 hover:text-[#38BDF8] cursor-pointer transition"/>
          </a>
          <a href="mailto:ijaz.builds@gmail.com">
            <FaEnvelope className="text-2xl text-gray-300 hover:text-[#38BDF8] cursor-pointer transition"/>
          </a>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-5">
        © 2026 Ijaz Ahmed. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
