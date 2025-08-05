import portfolio from "../assets/portfolio.png";
import ecommerce from "../assets/e-commerce.jpg";
import weatherapp from "../assets/weatherApp.png";
import taskmanager from "../assets/taskManager.png";
import chatapp from "../assets/chat.png";
import gradient from "../assets/gradient.jpg";
import virtualR from "../assets/virtualR.jpg";
import openSource from "../assets/openSource.jpg";
import saas from "../assets/saas.png";
import aiBlog from "../assets/ai-blog.jpg";
import devConnect from "../assets/devConnect.png";
import taskManager from "../assets/taskManager.jpg";
import docConverter from "../assets/doc-converter.jpg";
import crypto from "../assets/crypto.jpg";

const PROJECTS = [
   {
    title: "Portfolio Website",
    description:
      "A modern and responsive developer portfolio to showcase skills, experience, and projects.",
    image: portfolio, 
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://myportfolio-phi-henna.vercel.app",
    githubUrl: "https://github.com/mannbond007/myportfolio",
  },
  {
    title: "E-Commerce App",
    description:
      "A full-stack e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    image: ecommerce,
    technologies: ["Next.js", "MongoDB", "Stripe"],
    liveUrl: "https://your-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-app",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging platform with markdown support, login system, and comment section.",
    image: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg?ga=GA1.1.1025357636.1722736331&semt=ais_hybrid&w=740",
    technologies: ["Node.js", "Express", "MongoDB"],
    liveUrl: "https://your-blog.com",
    githubUrl: "https://github.com/yourusername/blog-platform",
  },
  {
    title: "Weather App",
    description:
      "A real-time weather forecasting web app using OpenWeatherMap API.",
    image: weatherapp,
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    liveUrl: "https://your-weatherapp.com",
    githubUrl: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Task Manager",
    description:
      "A productivity tool to manage daily tasks, deadlines, and progress tracking.",
    image: taskmanager,
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://taskmanagerapp-xu61.onrender.com",
    githubUrl: "https://github.com/mannbond007/TaskManagerApp",
  },
  {
    title: "Chat App",
    description:
      "A real-time messaging app with socket.io and user authentication.",
    image: chatapp,
    technologies: ["React", "Node.js", "Socket.io"],
    liveUrl: "https://your-chatapp.com",
    githubUrl: "https://github.com/yourusername/chat-app",
  },

  // Infinite Gradient Generator
  {
    title: "Infinite Gradient Generator",
    description:
      "A modern and responsive developer portfolio to showcase skills, experience, and projects.",
    image: gradient,
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://randomcolorgnerater.vercel.app",

    githubUrl: "https://github.com/mannbond007/randomcolorgnerater",
  },

  //Virtual Reality
  {
    title: "Virtual Reality",
    description:
      "A Virtual Reality website to showcase skills, experience, and projects.",
    image: virtualR,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://virtua-r.vercel.app",

    githubUrl: "https://github.com/mannbond007/virtualR",
  },

  // Open Source Portfolio
  {
    title: "Open Source Portfolio",
    description:
      "A Open Source Portfolio website to showcase skills, experience, and projects.",
    image: openSource,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://personal-portfolio-umber-two.vercel.app",

    githubUrl: "https://github.com/mannbond007/personal-portfolio",
  },
  // Sass Landing Page
  {
    title: "SaaS LaunchPad",
    description:
      "A dynamic and customizable landing page builder for startups and SaaS businesses with drag-and-drop UI.",
    image: saas,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Zustand", "Vite"],
    liveUrl: "https://personal-portfolio-umber-two.vercel.app",

    githubUrl: "https://github.com/mannbond007/personal-portfolio",
  },
  // AI-Powered Blog Generator
  {
    title: "AI Writer Pro",
    description:
      "A blog generator using OpenAI API that takes prompts and turns them into SEO-optimized articles with export & publish options.",
    image: aiBlog,
    technologies: ["React", "Tailwind CSS", "OpenAI API", "Node.js", "Express"],
    liveUrl: "https://personal-portfolio-umber-two.vercel.app",

    githubUrl: "https://github.com/mannbond007/personal-portfolio",
  },
  // DevConnector – Developer Community Platform
  {
    title: " DevConnector ",
    description:
      "A platform where developers can connect, post their work, collaborate, and chat in real-time.",
    image: devConnect,
    technologies: [ "React", "Tailwind CSS", "Socket.IO", "Firebase/Node.js"],
    liveUrl: "https://personal-portfolio-umber-two.vercel.app",

    githubUrl: "https://github.com/mannbond007/personal-portfolio",
  },
  // TaskFlow – Kanban Task Manager
  {
    title: " TaskFlow ",
    description:
      " A full-stack Trello-style task manager with drag-and-drop boards, team collaboration, and deadline tracking.",
    image: taskManager,
    technologies: [ "React", "Tailwind CSS", "DnD Kit", "Supabase/Firebase"],
    liveUrl: "https://taskmanagerapp-xu61.onrender.com",

    githubUrl: "https://github.com/mannbond007/TaskManagerApp",
  },
  // ZionDocs – File Converter & Compressor
  {
    title: " ZionDocs ",
    description:
      " Convert and compress documents (PDF, DOCX, JPG) with real-time preview and dark mode.",
    image: docConverter,
    technologies: [ "React", "Tailwind CSS", "Node.js"," Express", "Multer"],
    liveUrl: "https://personal-portfolio-umber-two.vercel.app",

    githubUrl: "https://github.com/mannbond007/personal-portfolio",
  },
  // CryptoPulse – Real-Time Crypto Tracker
  {
    title: " CryptoPulse ",
    description:
   " Real-time dashboard to track crypto prices, market cap, and trends with charts and news feed.",
    image: crypto,
    technologies: [ "React", "Tailwind CSS", "Chart.js", "CoinGecko API"],
    liveUrl: "https://personal-portfolio-umber-two.vercel.app",

    githubUrl: "https://github.com/mannbond007/personal-portfolio",
  },
];


const Projects = () => {
  return (
    <div id="projects" className="relative border-b border-neutral-800 pb-20 px-4 bg-slate-950 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="my-16 text-center">
          <span className="inline-block border border-purple-700 rounded px-4 py-[10px] text-2xl sm:text-5xl font-bold tracking-wide bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 text-transparent bg-clip-text">
            Projects
          </span>
        </h1>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-6 ">
          {PROJECTS.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900/60 hover:bg-neutral-800/80 transition duration-300 p-6 rounded-xl shadow-xl flex flex-col items-start border border-neutral-700 backdrop-blur-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-4 border border-neutral-700"
              />

              <h2 className="text-xl font-bold text-teal-400 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-800/20 text-purple-300 px-3 py-1 text-xs rounded-full border border-purple-700 hover:bg-purple-800/40 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white border border-purple-700 hover:bg-purple-800 px-4 py-2 rounded transition"
                >
                  GitHub
                </a>
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white border border-teal-500 hover:bg-teal-600 px-4 py-2 rounded transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
