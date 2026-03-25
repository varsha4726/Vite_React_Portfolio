import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Code,
  User,
  Download,
  Calendar,
  Sparkles,
  Target,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Star,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AboutSection = () => {

  const [activeTab, setActiveTab] = useState("personal");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

 const achievements = [
  { number: "5+", label: "Projects", icon: <Code /> },
  { number: "1", label: "Internship", icon: <Briefcase /> },
  { number: "15+", label: "Tech Skills", icon: <Sparkles /> },
  { number: "2025", label: "Graduate", icon: <Calendar /> }
];

 const techStack = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Bootstrap",
      "Tailwind CSS",
      "Framer Motion"
    ]
  },
  {
    category: "Backend / Database",
    items: [
      "MongoDB",
      "MySQL",
      "Node.js",
      "API",
      "Firebase"
    ]
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code"
    ]
  },
  {
    category: "Other Tools",
    items: [
      "Microsoft Word", 
      "Microsoft PowerPoint", 
      "Microsoft Excel"
    ]
  }
];
  const features = [
    "Clean and maintainable code",
    "Responsive UI design",
    "Performance optimization",
    "Agile workflow",
    "Team collaboration",
    "Timely delivery"
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/varsha4726" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/varsha-s-s-3b8464305" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:varshasuresh7426@gmail.com" }
  ];

  const tabContent = {

    personal:
      "I am a passionate Full Stack developer (MERN) who enjoys building modern and responsive web applications. I love transforming ideas into clean, user-friendly digital experiences using technologies like HTML, CSS, JavaScript and React.",

    education:
      "I completed my Bachelor of Technology in Information Technology from Rajiv Gandhi College of Engineering and Technology (2021-2025). During my academic journey I developed strong foundations in programming, web development and problem solving.",

    internship:
      "Currently I am working as a MERN Full Stack Intern at Pumo Technovation, Coimbatore. I develop responsive frontend components using React.js, improve UI functionality and collaborate with developers using Git and GitHub."
  };

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Varsha_React.pdf";
    link.download = "Varsha_React.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
    >

      {/* Header */}

      <div className="text-center mb-16">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 mb-6">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="font-semibold text-primary">ABOUT ME</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Transforming
          </span>
          <span className="block text-primary">Ideas Into Reality</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Building digital experiences that combine innovation,
          performance and elegant UI design.
        </p>

      </div>

      <div className="grid xl:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* LEFT SIDE */}

        <div className="xl:col-span-2 space-y-8">

          {/* Profile Card */}

          <div className="bg-card/60 border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl">

            <div className="flex flex-col md:flex-row gap-6 items-center">

              {/* Image */}

              <div className="w-28 h-28 rounded-xl overflow-hidden border-4 border-primary/20">
                <img
                  src="/profile.png"
                  alt="Varsha"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}

              <div className="flex-1 text-center md:text-left">

                <h2 className="text-3xl font-bold">Varsha S.S</h2>

                <p className="text-primary font-semibold mb-4">
                  Full Stack Developer
                </p>

                {/* Achievements */}

                <div className="grid grid-cols-2 gap-4">

                  {achievements.map((a, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl border border-border transition ${
                        counter === i
                          ? "bg-primary/10 border-primary"
                          : "bg-background/50"
                      }`}
                    >
                      <div className="font-bold">{a.number}</div>
                      <div className="text-xs text-muted-foreground">
                        {a.label}
                      </div>
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* Tabs */}

            <div className="flex border-b border-border mt-8 mb-6">

              {[
                {
                  id: "personal",
                  label: "Personal",
                  icon: <User className="h-4 w-4" />
                },
                {
                  id: "education",
                  label: "Education",
                  icon: <GraduationCap className="h-4 w-4" />
                },
                {
                  id: "internship",
                  label: "Internship",
                  icon: <Briefcase className="h-4 w-4" />
                }
              ].map((tab) => (

                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 flex items-center justify-center gap-2 font-medium transition ${
                    activeTab === tab.id
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >

                  {tab.icon}
                  {tab.label}

                </button>

              ))}

            </div>

            {/* Tab Content */}

            <AnimatePresence mode="wait">

              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-muted-foreground leading-relaxed"
              >
                {tabContent[activeTab]}
              </motion.p>

            </AnimatePresence>

          </div>

          {/* Tech Stack */}

          <div className="bg-card/60 border border-border rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Tech Stack
            </h3>

            <div className="grid md:grid-cols-3 gap-6">

              {techStack.map((stack, i) => (

                <div
                  key={i}
                  className="border border-border rounded-xl p-4"
                >

                  <h4 className="font-semibold mb-3">{stack.category}</h4>

                  {stack.items.map((item, j) => (
                    <div
                      key={j}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </div>
                  ))}

                </div>

              ))}

            </div>

          </div>
          {/* RIGHT SIDE */}

       

          {/* Work together */}

          <div className="bg-card/60 border border-border rounded-3xl p-6">

            <h3 className="text-xl font-bold mb-4 text-center">
              Let's Work Together
            </h3>

            <div className="flex flex-col gap-4">

              <a
                href="#contact"
                className="p-3 bg-primary text-white rounded-xl text-center"
              >
                Start a Project
              </a>

              <button
                onClick={handleDownload}
                className="p-3 border border-border rounded-xl"
              >
                <div className="flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </div>
              </button>

            </div>

            {/* Social */}

            <div className="flex justify-center gap-4 mt-6">

              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="p-2 bg-background rounded-lg hover:text-primary"
                >
                  {s.icon}
                </a>
              ))}

            </div>

        

        </div>

        

          {/* Why choose me */}

          <div className="bg-card/60 border border-border rounded-3xl p-6">

            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              Why Choose Me
            </h3>

            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-muted-foreground mb-2"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                {f}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};