import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/heroImage.jpeg";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen bg-slate-950 relative overflow-hidden py-24 px-4 flex items-center justify-center"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-12">
        {/* Text Section */}
        <div className="text-white text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-Playfair leading-tight">
            I'm A Full Stack{" "}
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="mb-6 text-[15px] sm:text-base md:text-lg leading-relaxed sm:leading-7 text-gray-400 font-Playfair max-w-full md:max-w-xl">
            Crafting elegant and scalable{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-purple-700 font-bold">
              web solutions
            </span>{" "}
            with modern technologies. Passionate about clean code, great design,
            and seamless user experiences.
            <br /> I specialize in building responsive{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-bold">
              frontends
            </span>{" "}
            and robust{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#6b7280] via-[#22c55e] to-[#4ade80] font-bold">
              backends
            </span>
            , ensuring performance, security, and accessibility. Always
            exploring new tools and{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-tl
from-[#84cc16]
via-[#16a34a]
to-[#0f766e] font-bold"
            >
              frameworks
            </span>{" "}
            to stay ahead in the ever-evolving tech landscape.
          </p>

          {/* Scroll to Projects Section */}
          <a
            href="#projects"
            className="group w-fit flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 via-pink-500 to-slate-900 hover:brightness-110 text-white rounded-md transition-all shadow cursor-pointer shadow-pink-600/30 mx-auto sm:mx-0 mt-4"
          >
            Portfolio
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              <MdOutlineKeyboardArrowRight size={22} />
            </span>
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end w-full mt-8 md:mt-0">
          {/* Gradient Border Container */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 max-w-[24rem] w-full animate-gradient">
            {/* Glow Effect Layer */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-xl opacity-50 animate-gradient"></div>

            {/* Actual Image */}
            <img
              src={heroImage}
              alt="Hero"
              className="relative w-full h-auto rounded-2xl object-cover shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
