import {
  ArrowRight,
  Github,
  ChevronUp,
  Star,
  Code,
  Sparkles,
  Zap,
  Play,
  Eye,
  X,
} from "lucide-react";

import { useState, useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  /* =======================================================
     CURRENT WORK
  ======================================================= */

  {
    id: 1,
    title: "Oranzone Admin Panel",
    category: "Admin Dashboards",

    description:
      "A production administration platform built for managing bookings, customers, revenue, reports, notifications, support workflows, vehicles, payments, and other business operations.",

    image: "/projects/oranzone-admin.png",

    video: "",

    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],

    demoUrl: "https://oranzone-adminpanel.vercel.app/login",
    githubUrl: "#",

    featured: true,

    accentColor: "from-purple-500 to-indigo-600",

    status: "Live",

    highlights: [
      "Admin dashboards and business modules",
      "REST API integration",
      "Search, filters and pagination",
      "Responsive data tables and forms",
      "Revenue and reporting workflows",
      "Production UI development",
    ],
  },

  {
    id: 2,
    title: "Ticket Oranzone",
    category: "Web Applications",

    description:
      "A production ticketing application with responsive interfaces and API-driven workflows for event ticket management, booking processes, ticket generation, and customer-facing features.",

    image: "/projects/ticket-oranzone.png",

    video: "",

    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "REST APIs",
    ],

    demoUrl: "https://ticketoranzone.vercel.app/",
    githubUrl: "#",

    featured: true,

    accentColor: "from-cyan-500 to-blue-600",

    status: "Live",

    highlights: [
      "Responsive ticketing interfaces",
      "API-driven workflows",
      "Booking and ticket handling",
      "Dynamic forms and data handling",
      "QR-based ticket functionality",
      "Responsive frontend development",
    ],
  },

  {
    id: 3,
    title: "Appnstruct Website",
    category: "Web Development",

    description:
      "A responsive company website developed using modern frontend technologies with reusable components, interactive sections, animations, and responsive layouts.",

    image: "/projects/appnstruct-website.png",

    video: "",

    tags: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
    ],

    demoUrl: "https://appnstruct-companywebsite.vercel.app/",
    githubUrl: "#",

    featured: true,

    accentColor: "from-emerald-500 to-teal-600",

    status: "Live",

    highlights: [
      "Responsive company website",
      "Reusable React components",
      "Interactive UI sections",
      "Modern responsive layouts",
      "Smooth animations",
      "Performance-focused frontend",
    ],
  },

  {
    id: 4,
    title: "Oranzone Website",
    category: "Web Development",

    description:
      "A responsive business website built with reusable frontend components and modern UI patterns to create a smooth and user-friendly web experience.",

    image: "/projects/oranzone-website.png",

    video: "",

    tags: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
    ],

    demoUrl: "https://oranzone.vercel.app/",
    githubUrl: "#",

    featured: false,

    accentColor: "from-blue-500 to-cyan-600",

    status: "Live",

    highlights: [
      "Responsive website interfaces",
      "Reusable frontend components",
      "Business-focused user flows",
      "Responsive layouts",
      "Modern UI implementation",
      "Cross-device compatibility",
    ],
  },

  /* =======================================================
     OLD / EARLIER PROJECTS
  ======================================================= */

  {
    id: 5,
    title: "React Portfolio Website",
    category: "Web Development",

    description:
      "A responsive developer portfolio website created to showcase projects, technical skills, experience, and development work with modern UI and smooth animations.",

    image: "/projects/react-portfolio.png",

    video: "",

    tags: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],

    demoUrl:
      "https://vite-react-portfolio-ebon.vercel.app/",

    githubUrl:
      "https://github.com/varsha4726/Vite_React_Portfolio",

    featured: true,

    accentColor: "from-violet-500 to-purple-600",

    status: "Live",

    highlights: [
      "Responsive portfolio design",
      "Reusable React components",
      "Smooth Framer Motion animations",
      "Project showcase section",
      "Modern UI implementation",
      "Vercel deployment",
    ],
  },

  {
    id: 6,
    title: "Portfolio Website",
    category: "Web Development",

    description:
      "A portfolio website designed with responsive layouts, modern UI components, animations, and sections to showcase projects and development skills.",

    image: "/projects/portfolio.png",

    video:
      "https://drive.google.com/file/d/1iNXNkqv18CQEcHFbbvWyha2t1neAydpq/view?usp=sharing",

    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],

    demoUrl:
      "https://github.com/varsha4726/varsha-portfolio",

    githubUrl:
      "https://github.com/varsha4726/varsha-portfolio",

    featured: false,

    accentColor: "from-purple-500 to-indigo-600",

    status: "Live",

    highlights: [
      "Modern responsive UI",
      "Smooth animations",
      "Project showcase",
      "Responsive layouts",
      "Interactive sections",
      "Contact integration",
    ],
  },

  {
    id: 7,
    title: "Mobile Accessories E-commerce",
    category: "E-commerce",

    description:
      "An e-commerce platform for mobile accessories with product listings, search functionality, responsive layouts, and a user-friendly shopping interface.",

    image: "/projects/ecommerce.png",

    video:
      "https://drive.google.com/file/d/1W_JsTJW-ur3yS0eTlWVXjyBZFRiphajT/view?usp=sharing",

    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],

    demoUrl:
      "https://github.com/varsha4726/Mobile-Accessories-E-commerce",

    githubUrl:
      "https://github.com/varsha4726/Mobile-Accessories-E-commerce",

    featured: true,

    accentColor: "from-emerald-500 to-teal-600",

    status: "Development",

    highlights: [
      "Product listing system",
      "Search functionality",
      "Responsive design",
      "Product-focused UI",
      "Category-based browsing",
      "E-commerce interface development",
    ],
  },

  {
    id: 8,
    title: "EduBank Pro",
    category: "Web Applications",

    description:
      "A modern banking exam preparation platform built using React and Tailwind CSS with responsive interfaces and reusable components.",

    image: "/projects/edubank.png",

    video:
      "https://drive.google.com/file/d/1h98_-LIvLUF7YOrCFMG-UYNvuyRgX07_/preview",

    tags: [
      "React",
      "Vite",
      "React Router",
      "Tailwind",
      "Framer Motion",
    ],

    demoUrl:
      "https://github.com/varsha4726/edubank-pro",

    githubUrl:
      "https://github.com/varsha4726/edubank-pro",

    featured: false,

    accentColor: "from-blue-500 to-cyan-600",

    status: "Completed",

    highlights: [
      "Responsive modern UI",
      "Course categories",
      "Featured courses",
      "Dropdown navigation",
      "Reusable component architecture",
      "Interactive course sections",
    ],
  },

  {
    id: 9,
    title: "QR Code Generator",
    category: "Web Applications",

    description:
      "A web-based QR code generator that instantly creates QR codes based on user input using JavaScript.",

    image: "/projects/qrcode.png",

    video:
      "https://drive.google.com/file/d/1QtPAMm00JfrbrEvSYGrmYcjVI4_-dQA1/view?usp=sharing",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    demoUrl:
      "https://github.com/varsha4726/QR-Code-Generator",

    githubUrl:
      "https://github.com/varsha4726/QR-Code-Generator",

    featured: false,

    accentColor: "from-rose-500 to-pink-600",

    status: "Completed",

    highlights: [
      "Instant QR generation",
      "User input handling",
      "Simple user interface",
      "Responsive layout",
      "Dynamic QR generation",
      "JavaScript-based functionality",
    ],
  },

  {
    id: 10,
    title: "Image Gallery",
    category: "API Integration",

    description:
      "A responsive image search web application that allows users to search and explore high-quality images using the Unsplash API.",

    image: "/projects/gallery.png",

    video:
      "https://drive.google.com/file/d/1Uh-sTu2QpL1MPOPkyccD1wIdAQxUEMiC/view?usp=sharing",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Unsplash API",
    ],

    demoUrl:
      "https://github.com/varsha4726/Image-Gallery-Unsplash-API-",

    githubUrl:
      "https://github.com/varsha4726/Image-Gallery-Unsplash-API-",

    featured: false,

    accentColor: "from-amber-500 to-orange-600",

    status: "Completed",

    highlights: [
      "Dynamic image search",
      "Unsplash API integration",
      "Responsive image gallery",
      "Search-based results",
      "API data handling",
      "Interactive image browsing",
    ],
  },
];

/* =========================================================
   CATEGORY COLORS
========================================================= */

const categoryColors = {
  "Web Applications":
    "from-purple-500/20 to-indigo-600/20 text-purple-400 border-purple-500/30",

  "Web Development":
    "from-blue-500/20 to-cyan-600/20 text-blue-400 border-blue-500/30",

  "Admin Dashboards":
    "from-fuchsia-500/20 to-violet-600/20 text-fuchsia-400 border-fuchsia-500/30",

  "E-commerce":
    "from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/30",

  "API Integration":
    "from-amber-500/20 to-orange-600/20 text-amber-400 border-amber-500/30",
};

/* =========================================================
   HIGHLIGHTS
========================================================= */

const ProjectHighlights = ({ highlights }) => {
  return (
    <div className="h-[132px] overflow-hidden flex flex-col justify-between">
      {highlights.slice(0, 6).map((highlight, index) => (
        <div
          key={index}
          className="flex items-center gap-2 h-5 shrink-0"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />

          <span className="text-muted-foreground text-xs leading-5 truncate">
            {highlight}
          </span>
        </div>
      ))}
    </div>
  );
};

/* =========================================================
   PROJECTS SECTION
========================================================= */

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const [activeFilter, setActiveFilter] = useState("All");

  const [hoveredProject, setHoveredProject] =
    useState(null);

  const [selectedVideo, setSelectedVideo] =
    useState(null);

  const videoRef = useRef(null);

  const sectionRef = useRef(null);

  /* =======================================================
     SCROLL ANIMATION
  ======================================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "15%"]
  );

  const opacityBg = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.1, 0.2, 0.1]
  );

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter
        );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const categories = [
    "All",
    "Web Applications",
    "Web Development",
    "Admin Dashboards",
    "E-commerce",
    "API Integration",
  ];

  /* =======================================================
     FILTER CHANGE
  ======================================================= */

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
  };

  /* =======================================================
     VIDEO
  ======================================================= */

  const handleVideoPlay = (project) => {
    if (!project.video) return;

    setSelectedVideo(project);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <section id="ProjectsSection"
      ref={sectionRef}
      className="
        relative
        min-h-screen
        py-20
        md:py-32
        overflow-hidden
        bg-gradient-to-br
        from-background
        via-background
        to-primary/5
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{
            y: yBg,
            opacity: opacityBg,
          }}
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-background
            via-primary/5
            to-background
          "
        />
      </div>

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          {/* BADGE */}

          <motion.div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-primary/10
              text-primary
              text-sm
              font-medium
              mb-6
            "
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            <Sparkles className="h-4 w-4" />

            My Projects
          </motion.div>

          {/* HEADING */}

          <motion.h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              mb-6
            "
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            Project

            <span className="block text-primary">
              Portfolio
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            className="
              text-lg
              text-muted-foreground
              max-w-2xl
              mx-auto
            "
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            A collection of projects I have worked on,
            including production applications,
            websites, dashboards, and development projects.
          </motion.p>
        </motion.div>

        {/* =================================================
            FILTER TABS
        ================================================= */}

        <motion.div
          className="flex justify-center mb-12"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
        >
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-2
              max-w-6xl
            "
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                type="button"
                onClick={() =>
                  handleFilterChange(category)
                }
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className={`
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  border

                  ${
                    activeFilter === category
                      ? `
                        bg-primary
                        text-primary-foreground
                        border-primary
                        shadow-lg
                        shadow-primary/20
                      `
                      : `
                        bg-background
                        text-muted-foreground
                        border-border
                        hover:border-primary
                        hover:text-primary
                      `
                  }
                `}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-7
            items-stretch
          "
        >
          <AnimatePresence mode="wait">
            {displayedProjects.map(
              (project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="group h-full"
                  onMouseEnter={() =>
                    setHoveredProject(project.id)
                  }
                  onMouseLeave={() =>
                    setHoveredProject(null)
                  }
                >
                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className="
                      relative
                      bg-background
                      border
                      border-border
                      rounded-2xl
                      overflow-hidden
                      shadow-lg
                      hover:shadow-xl
                      transition-all
                      duration-500
                      h-full
                      min-h-[700px]
                      flex
                      flex-col
                    "
                  >

                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <div
                      className="
                        relative
                        h-48
                        shrink-0
                        overflow-hidden
                        bg-muted
                      "
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />

                      {/* STATUS */}

                      <div className="absolute top-3 right-3">
                        <div
                          className={`
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            font-medium
                            backdrop-blur-sm
                            border

                            ${
                              project.status === "Live"
                                ? `
                                  bg-emerald-500/20
                                  text-emerald-400
                                  border-emerald-500/30
                                `
                                : `
                                  bg-amber-500/20
                                  text-amber-400
                                  border-amber-500/30
                                `
                            }
                          `}
                        >
                          {project.status}
                        </div>
                      </div>

                      {/* CATEGORY */}

                      <div className="absolute top-3 left-3">
                        <span
                          className={`
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            font-medium
                            backdrop-blur-sm
                            border

                            ${
                              categoryColors[
                                project.category
                              ] ||
                              "bg-primary/10 text-primary border-primary/20"
                            }
                          `}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* HOVER ACTIONS */}

                      <motion.div
                        className="
                          absolute
                          inset-0
                          bg-black/55
                          flex
                          items-center
                          justify-center
                          gap-4
                        "
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity:
                            hoveredProject ===
                            project.id
                              ? 1
                              : 0,
                        }}
                      >
                        {/* VIDEO */}

                        {project.video && (
                          <motion.button
                            type="button"
                            onClick={() =>
                              handleVideoPlay(
                                project
                              )
                            }
                            whileHover={{
                              scale: 1.1,
                            }}
                            whileTap={{
                              scale: 0.9,
                            }}
                            className="
                              p-3
                              rounded-full
                              backdrop-blur-sm
                              border
                              bg-white/20
                              text-white
                              border-white/30
                              hover:bg-white/30
                            "
                          >
                            <Play size={20} />
                          </motion.button>
                        )}

                        {/* GITHUB */}

                        {project.githubUrl !== "#" && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                              scale: 1.1,
                            }}
                            whileTap={{
                              scale: 0.9,
                            }}
                            className="
                              p-3
                              rounded-full
                              backdrop-blur-sm
                              border
                              bg-white/20
                              text-white
                              border-white/30
                              hover:bg-white/30
                            "
                          >
                            <Code size={20} />
                          </motion.a>
                        )}
                      </motion.div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div
                      className="
                        p-6
                        flex-1
                        flex
                        flex-col
                      "
                    >

                      {/* TITLE */}

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-3
                          mb-3
                          min-h-[58px]
                        "
                      >
                        <h3
                          className="
                            text-xl
                            font-bold
                            text-foreground
                            leading-tight
                            line-clamp-2
                          "
                        >
                          {project.title}
                        </h3>

                        {project.featured && (
                          <motion.div
                            className="
                              flex
                              shrink-0
                              items-center
                              gap-1
                              px-2
                              py-1
                              rounded-full
                              bg-amber-500/20
                              text-amber-400
                              text-xs
                              font-medium
                              border
                              border-amber-500/30
                            "
                            initial={{
                              scale: 0,
                            }}
                            animate={{
                              scale: 1,
                            }}
                            transition={{
                              delay:
                                index * 0.08 +
                                0.3,
                            }}
                          >
                            <Star
                              size={12}
                              className="fill-amber-500"
                            />

                            Featured
                          </motion.div>
                        )}
                      </div>

                     {/* =================================================
    DESCRIPTION
    EXACTLY 4 LINES
================================================= */}

<div className="h-[88px] mb-4 overflow-hidden">
  <p
    className="
      text-muted-foreground
      text-sm
      leading-[22px]
      text-justify
    "
    style={{
      display: "-webkit-box",
      WebkitLineClamp: 4,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }}
  >
    {project.description}
  </p>
</div>

                      {/* =================================================
                          HIGHLIGHTS
                          EXACTLY 6 ROWS
                      ================================================= */}

                      <div className="mb-4 shrink-0">
                        <ProjectHighlights
                          highlights={
                            project.highlights
                          }
                        />
                      </div>

                      {/* =================================================
                          TECH STACK
                          FIXED AREA
                      ================================================= */}

                      <div
                        className="
                          min-h-[66px]
                          flex
                          flex-wrap
                          content-start
                          gap-2
                          mb-4
                        "
                      >
                        {project.tags.map(
                          (tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              initial={{
                                opacity: 0,
                                scale: 0.8,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                              }}
                              transition={{
                                delay:
                                  index * 0.08 +
                                  tagIndex *
                                    0.05 +
                                  0.4,
                              }}
                              className="
                                px-3
                                py-1
                                rounded-lg
                                bg-primary/10
                                text-primary
                                text-xs
                                font-medium
                                border
                                border-primary/20
                                whitespace-nowrap
                              "
                            >
                              {tag}
                            </motion.span>
                          )
                        )}
                      </div>

                      {/* =================================================
                          BUTTONS
                      ================================================= */}

                      <div
                        className="
                          flex
                          gap-3
                          pt-4
                          border-t
                          border-border
                          mt-auto
                        "
                      >
                        {/* LIVE DEMO */}

                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            scale: 1.02,
                          }}
                          whileTap={{
                            scale: 0.98,
                          }}
                          onClick={(event) => {
                            if (
                              project.demoUrl ===
                              "#"
                            ) {
                              event.preventDefault();
                            }
                          }}
                          className={`
                            flex-1
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            py-2.5
                            rounded-lg
                            text-sm
                            font-medium
                            transition-all
                            duration-300

                            ${
                              project.demoUrl ===
                              "#"
                                ? `
                                  bg-muted
                                  text-muted-foreground
                                  cursor-not-allowed
                                  border
                                  border-border
                                `
                                : `
                                  bg-primary
                                  text-primary-foreground
                                  hover:bg-primary/90
                                `
                            }
                          `}
                        >
                          <Eye size={16} />

                          Live Demo
                        </motion.a>

                        {/* CODE */}

                        <motion.a
                          href={
                            project.githubUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            scale: 1.02,
                          }}
                          whileTap={{
                            scale: 0.98,
                          }}
                          onClick={(event) => {
                            if (
                              !project.githubUrl ||
                              project.githubUrl ===
                                "#"
                            ) {
                              event.preventDefault();
                            }
                          }}
                          className={`
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            py-2.5
                            px-4
                            rounded-lg
                            text-sm
                            font-medium
                            border
                            transition-all
                            duration-300

                            ${
                              project.githubUrl ===
                              "#"
                                ? `
                                  bg-muted
                                  text-muted-foreground
                                  cursor-not-allowed
                                  border-border
                                `
                                : `
                                  bg-background
                                  text-foreground
                                  border-border
                                  hover:border-primary
                                  hover:bg-primary/5
                                `
                            }
                          `}
                        >
                          <Github size={16} />

                          Code
                        </motion.a>
                      </div>
                    </div>

                    {/* ACCENT */}

                    <div
                      className={`
                        h-1
                        shrink-0
                        bg-gradient-to-r
                        ${project.accentColor}
                      `}
                    />
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {/* =================================================
            NO PROJECTS
        ================================================= */}

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* =================================================
            VIEW MORE
        ================================================= */}

        {filteredProjects.length > 6 && (
          <motion.div
            className="text-center mt-16"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            <motion.button
              type="button"
              onClick={() =>
                setShowAll(!showAll)
              }
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className={`
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-2xl
                font-medium
                transition-all
                duration-300

                ${
                  showAll
                    ? `
                      bg-muted
                      text-foreground
                      border
                      border-border
                    `
                    : `
                      bg-primary
                      text-primary-foreground
                      hover:bg-primary/90
                    `
                }
              `}
            >
              {showAll ? (
                <>
                  <ChevronUp size={18} />

                  Show Less
                </>
              ) : (
                <>
                  View More Projects

                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* =================================================
            CTA
        ================================================= */}

        <motion.div
          className="text-center mt-20"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <div
            className="
              bg-background
              border
              border-border
              rounded-2xl
              p-8
              md:p-12
              max-w-4xl
              mx-auto
            "
          >
            <motion.div
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-primary/10
                text-primary
                text-sm
                font-medium
                mb-6
              "
            >
              <Zap className="h-4 w-4" />

              Get In Touch
            </motion.div>

            <h3
              className="
                text-2xl
                md:text-3xl
                font-bold
                mb-4
              "
            >
              Like what you see?
            </h3>

            <p
              className="
                text-muted-foreground
                mb-8
                max-w-2xl
                mx-auto
              "
            >
              I'm always open to discussing new
              opportunities and interesting projects.
            </p>

            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-center
                gap-4
              "
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-8
                  py-4
                  rounded-2xl
                  font-medium
                  bg-primary
                  text-primary-foreground
                  hover:bg-primary/90
                  transition-all
                "
              >
                Contact Me

                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="https://github.com/varsha4726"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-8
                  py-4
                  rounded-2xl
                  font-medium
                  border
                  border-border
                  text-foreground
                  hover:border-primary
                  hover:bg-primary/5
                  transition-all
                "
              >
                <Github size={18} />

                View GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =================================================
          VIDEO MODAL
      ================================================= */}

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/80
              backdrop-blur-sm
              p-4
            "
            onClick={handleCloseVideo}
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                damping: 25,
              }}
              className="
                relative
                bg-background
                rounded-2xl
                overflow-hidden
                shadow-2xl
                max-w-4xl
                w-full
                max-h-[85vh]
              "
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {/* MODAL HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  p-6
                  border-b
                  border-border
                "
              >
                <div>
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-foreground
                    "
                  >
                    {selectedVideo.title} Demo
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {selectedVideo.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCloseVideo}
                  className="
                    p-2
                    rounded-full
                    hover:bg-muted
                    transition-colors
                  "
                >
                  <X size={24} />
                </button>
              </div>

              {/* VIDEO */}

              <div className="aspect-video bg-black">
                {selectedVideo.video?.includes(
                  "drive.google.com"
                ) ? (
                  <iframe
                    src={selectedVideo.video}
                    className="w-full h-full"
                    allow="autoplay"
                    title={
                      selectedVideo.title
                    }
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={
                      selectedVideo.video
                    }
                    controls
                    autoPlay
                    className="
                      w-full
                      h-full
                      object-contain
                    "
                  />
                )}
              </div>

              {/* FOOTER */}

              <div
                className="
                  p-6
                  border-t
                  border-border
                  flex
                  flex-col
                  sm:flex-row
                  justify-between
                  items-center
                  gap-4
                "
              >
                <p className="text-muted-foreground text-sm">
                  Watch the demo of{" "}
                  {selectedVideo.title}
                </p>

                <div className="flex gap-3">
                  <a
                    href={
                      selectedVideo.demoUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-6
                      py-2
                      rounded-lg
                      bg-primary
                      text-primary-foreground
                      text-sm
                    "
                  >
                    Live Demo
                  </a>

                  {selectedVideo.githubUrl !==
                    "#" && (
                    <a
                      href={
                        selectedVideo.githubUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-6
                        py-2
                        rounded-lg
                        border
                        text-sm
                      "
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};