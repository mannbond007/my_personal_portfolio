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
          <div className="flex justify-center md:justify-start">
            <img
              src={aboutImg}
              alt="Portrait of Vivek Kumar - Full Stack Developer"
              className="rounded-2xl shadow-lg w-64 sm:w-80 md:w-[22rem] lg:w-[24rem] max-w-full transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="text-white text-center md:text-left">
            <p className="mb-6 text-base sm:text-lg leading-8 text-gray-400 font-Playfair">
              I'm a full-stack developer passionate about crafting responsive,
              high-performance web applications. My goal is to combine clean
              code with engaging designs to build seamless digital experiences.
              I love turning ideas into reality through modern technologies and
              thoughtful development. From building intuitive user interfaces
              with React to designing scalable APIs with Node.js and MongoDB, I
              ensure end-to-end quality in every project. I'm also deeply
              interested in UI/UX design, performance optimization, and staying
              ahead with emerging tools in the JavaScript ecosystem. I believe
              in writing maintainable code, focusing on accessibility, and
              delivering solutions that make an impact.
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
