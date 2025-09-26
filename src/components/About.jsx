import aboutImg from "../assets/about.jpg";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const scrollToExperience = () => {
    const section = document.getElementById("experience");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="about"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:14px_24px] z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-white font-Playfair mb-12">
          About{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-y-12 md:gap-x-12 items-center py-8">
          {/* Image */}
          <div className="flex justify-center md:justify-start w-full">
            {/* Gradient Border Container */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient max-w-[24rem] w-full">
              {/* Glow Effect Layer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-xl opacity-50 animate-gradient"></div>

              {/* Actual Image */}
              <img
                src={aboutImg}
                alt="Portrait of Vivek Kumar - Full Stack Developer"
                className="relative w-full h-auto rounded-2xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Text */}
          {/* Text */}
          <div className="text-white text-left px-2 sm:px-0">
            <p className="mb-6 text-[16px] sm:text-base md:text-lg leading-relaxed sm:leading-8 text-gray-400 font-Playfair max-w-xl mx-auto md:mx-0">
              I'm a full-stack developer passionate about building responsive
              and high-performance web applications. I enjoy turning ideas into
              clean, functional, and engaging digital experiences. With React on
              the frontend and{" "}
              <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-green-500 to-green-700">
                Node.js
              </span>{" "}
              with{" "}
              <span className="bg-clip-text text-transparent font-bold bg-gradient-to-tl from-[#ffe037] via-[#1dcd9f] to-[#088c6f]">
                MongoDB
              </span>{" "}
              on the backend, I ensure end-to-end quality in every project. I’m
              also deeply interested in{" "}
              <span className="bg-clip-text text-transparent font-bold bg-gradient-to-br from-[#ea047e] via-[#ff6d28] to-[#fce700]">
                UI/UX
              </span>{" "}
              design, performance optimization, and writing maintainable,
              accessible code using modern{" "}
              <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600">
                JavaScript
              </span>{" "}
              tools.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-start sm:items-center gap-4 sm:gap-6 w-full py-5">
              {/* Know More Button */}
              <button
                onClick={scrollToExperience}
                className="group cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 via-pink-500 to-slate-900 hover:brightness-110 text-white rounded-md transition-all shadow-md shadow-pink-600/30"
              >
                Know More
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>

              {/* Download CV Button */}
              <a
                href="/vivekkumar@resume.pdf"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-800 hover:brightness-110 text-white rounded-md transition-all shadow-md shadow-teal-600/30"
              >
                <FaDownload className="text-white" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
