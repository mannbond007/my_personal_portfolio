const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "TechZion",
    description:
      "Building scalable full-stack applications and contributing to UI/UX decisions while collaborating with product teams.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "WebX Labs",
    description:
      "Developed responsive and accessible frontend components with modern JavaScript frameworks.",
    technologies: ["Next.js", "Framer Motion", "SCSS", "TypeScript"],
  },
  {
    year: "2022 - 2023",
    role: "Backend Developer",
    company: "ServerStack",
    description:
      "Designed and maintained RESTful APIs and optimized server-side performance for high-traffic platforms.",
    technologies: ["Node.js", "Express", "Redis", "JWT", "PostgreSQL"],
  },
  {
    year: "2021 - 2022",
    role: "Web Developer Intern",
    company: "CodeCraft",
    description:
      "Supported frontend teams, fixed bugs, and implemented features on client websites under mentorship.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
  },
  {
    year: "2020 - 2021",
    role: "UI/UX Designer",
    company: "PixelFury",
    description:
      "Created wireframes, visual designs, and user flows that elevated product interfaces and brand consistency.",
    technologies: ["Figma", "Adobe XD", "Illustrator"],
  },
  {
    year: "2019 - 2020",
    role: "Tech Support Engineer",
    company: "CloudNet",
    description:
      "Handled technical queries and ensured seamless product experiences for users across cloud platforms.",
    technologies: ["Linux", "AWS", "Shell Scripting"],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="relative py-20 px-4 sm:px-6 bg-slate-950 overflow-hidden border-b border-neutral-900"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto py-6">
        <h1 className="text-center mb-16">
          <span className="inline-block border border-purple-700 rounded px-4 py-2 text-2xl sm:text-5xl font-bold tracking-wide bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 text-transparent bg-clip-text">
            Experience
          </span>
        </h1>

        <div className="space-y-12">
          {EXPERIENCES.map((item, index) => (
            <div
              key={index}
               className="bg-neutral-900/50 border border-neutral-800 rounded-xl shadow-md px-6 py-10 sm:px-8 sm:py-16 flex flex-col lg:flex-row lg:gap-10 hover:bg-neutral-800/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Year */}
              <div className="mb-4 lg:mb-0 lg:w-1/4 text-sm text-purple-300 font-mono">
                {item.year}
              </div>

              {/* Experience Info */}
              <div className="lg:w-3/4">
                <h3 className="text-lg sm:text-xl font-semibold text-teal-400 mb-1">
                  {item.role}
                  <span className="ml-2 text-sm text-purple-400 font-medium">
                    @ {item.company}
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-800/10 border border-purple-800 text-purple-300 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
