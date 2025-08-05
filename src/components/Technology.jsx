import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiFigma,
  SiFramer,
  SiGit,
} from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';

const techStack = [
  { icon: <RiReactjsLine size={48} className="text-cyan-400" />, label: 'React' },
  { icon: <TbBrandNextjs size={48} className="text-white" />, label: 'Next.js' },
  { icon: <SiMongodb size={48} className="text-green-500" />, label: 'MongoDB' },
  { icon: <DiRedis size={48} className="text-red-600" />, label: 'Redis' },
  { icon: <FaNodeJs size={48} className="text-green-500" />, label: 'Node.js' },
  { icon: <BiLogoPostgresql size={48} className="text-sky-700" />, label: 'PostgreSQL' },
  { icon: <SiTailwindcss size={48} className="text-sky-400" />, label: 'Tailwind' },
  { icon: <SiTypescript size={48} className="text-blue-500" />, label: 'TypeScript' },
  { icon: <SiFramer size={48} className="text-white" />, label: 'F-Motion' },
  { icon: <SiGit size={48} className="text-orange-500" />, label: 'Git' },
  { icon: <SiVite size={48} className="text-purple-400" />, label: 'Vite' },
  { icon: <SiFigma size={48} className="text-pink-500" />, label: 'Figma' },
];

const pulseAnimation = {
  animate: {
    scale: [1, 1.08, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Technology = () => {
  return (
    <div
      id="technology"
      className="relative py-12 sm:py-20  px-4 bg-slate-950 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [&>div]:bg-[size:14px_24px]">
          <div></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Heading */}
        <h1 className="mb-12">
          <span className="inline-block border border-purple-700 rounded px-6 py-2 text-2xl sm:text-5xl font-bold tracking-wide bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 text-transparent bg-clip-text">
            Technology
          </span>
        </h1>

        {/* Animated Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-16 sm:gap-12 max-w-6xl w-full justify-items-center py-10">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              {...pulseAnimation}
              className="w-28 h-28 flex flex-col items-center justify-center rounded-2xl border-2 border-neutral-800 bg-neutral-900/40  hover:bg-neutral-800/50 transition text-center"
            >
              {tech.icon}
              <span className="mt-2 px-3 py-1 text-xs sm:text-sm font-medium text-purple-300 bg-purple-800/20 border border-purple-700 rounded-full hover:bg-purple-700/40 transition-all duration-300">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-16">
        <hr className="border-neutral-800" />
      </div>
    </div>
  );
};

export default Technology;
