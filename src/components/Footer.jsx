import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative px-4 py-16 bg-slate-950 border-t border-neutral-800 overflow-hidden text-slate-400">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f22_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f22_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
        {/* Branding */}
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400 bg-clip-text text-transparent font-Playfair">
          Vivek Kumar
        </h2>

        <p className="max-w-xl text-gray-400 mb-8 text-[16px] sm:text-center sm:text-lg md:text-xl leading-relaxed font-Playfair text-left px-2 sm:px-0">
          Passionate Full Stack Developer crafting seamless digital experiences.
          I turn complex problems into elegant solutions through clean code and
          modern design.
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
          <a
            href="https://github.com/vivek-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition transform hover:scale-110 duration-300 text-slate-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/vivek-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 duration-300 text-slate-400 hover:text-[#0077b5]"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:vivek@example.com"
            className="transition transform hover:scale-110 duration-300 text-slate-400 hover:text-[#ea4335]"
          >
            <FaEnvelope />
          </a>
          <a
            href=" https://www.instagram.com/vivek_kumar_gzp61?igsh=aGppNGdheHhwY3N1&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 duration-300 text-slate-400 hover:text-[#e1306c]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/vivek-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 duration-300 text-slate-400 hover:text-[#1877f2]"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Divider Line */}
        <hr className="w-full border-t border-neutral-800 my-4" />

        {/* Bottom Info Row */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-sm sm:text-base px-2 sm:px-4 text-center sm:text-left">
          {/* Left */}
          <p className="w-full sm:w-1/3 text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1]">
              Vivek Kumar ❤️
            </span>
            . All rights reserved.
          </p>

          {/* Center (Contact Me Button Centered) */}
          <div className="w-full sm:w-1/3 flex justify-center text-teal-400 hover:underline underline-offset-4 transition">
            <a href="#contact">Contact Me</a>
          </div>

          {/* Right */}
          <div className="w-full sm:w-1/3 flex justify-end text-pink-400 hover:underline underline-offset-4 transition">
            <a href="#home">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
