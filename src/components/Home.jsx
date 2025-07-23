import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/heroImage.jpeg";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen bg-slate-950 relative overflow-hidden py-32 px-4 md:py-24 flex items-center justify-center"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="text-white text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-Playfair leading-tight">
            I'm A Full Stack{" "}
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="mb-6 text-[16px] sm:text-base md:text-lg leading-relaxed sm:leading-8 text-gray-400 font-Playfair max-w-xl mx-auto md:mx-0 pb-6">
            Crafting elegant and scalable <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-purple-700 font-bold">web solutions</span> with modern
            technologies. Passionate about clean code, great design, and
            seamless user experiences. I specialize in building responsive
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-bold" > {" "}frontends</span> and robust <span className="bg-clip-text text-transparent bg-gradient-to-bl from-red-200 via-rose-400 to-pink-600 font-bold">backends</span>, ensuring performance, security, and
            accessibility. Always exploring new tools and <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold">frameworks</span> to stay
            ahead in the ever-evolving tech landscape.
          </p>

          {/* Scroll to Projects Section */}
          <a
            href="#projects"
            className="group w-fit mx-auto md:mx-0 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 via-pink-500 to-slate-900 hover:brightness-110 text-white rounded-md transition-all shadow cursor-pointer shadow-pink-600/30 "
          >
            Portfolio
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              <MdOutlineKeyboardArrowRight size={22} />
            </span>
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="rounded-2xl shadow-lg w-80 sm:w-80 md:w-96 lg:w-[22rem] xl:w-[24rem] max-w-full transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
