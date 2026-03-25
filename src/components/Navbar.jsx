import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  MessageSquare,
  Mail,
  BookOpen,
  Sun,
  Moon,
  Youtube,
  Volume2,
  VolumeX,
  Github,
  Linkedin,
  Globe,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Power } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Certificates", href: "#CertificatesSection", icon: MessageSquare },
  { name: "Contact", href: "#contact", icon: Mail },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [showClosePopup, setShowClosePopup] = useState(false);
  const [emoji, setEmoji] = useState("😊");
  const lastScrollYRef = useRef(0);
  const audioRef = useRef(null);

  const musicUrl = "/music.mp3";

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(musicUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      audioRef.current.preload = "auto";

      const handleCanPlay = () => setIsAudioReady(true);

      audioRef.current.addEventListener("canplaythrough", handleCanPlay);

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
          audioRef.current = null;
        }
      };
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current || !isAudioReady) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }

    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollYRef.current = currentScrollY;

      const sections = navItems.map((item) => item.href);
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Right Buttons */}
      <motion.div
        className="fixed top-4 right-4 z-50 flex gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        

        {/* Website Globe Button */}
        <motion.a
          href="https://portfolio-varsh.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md",
            "text-green-600 hover:bg-green-100 dark:hover:bg-green-900/50",
            "border border-gray-200 dark:border-gray-700 shadow-sm",
            "flex items-center justify-center"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="My Website"
          aria-label="My Website"
        >
          <Globe className="w-4 h-4" />
        </motion.a>

        {/* GitHub Button */}
        <motion.a
          href="https://github.com/varsha4726" 
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md",
            "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50",
            "border border-gray-200 dark:border-gray-700 shadow-sm",
            "flex items-center justify-center"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <Github className="w-4 h-4" />
        </motion.a>


        {/* Music Button */}
        <motion.button
          onClick={toggleMusic}
         disabled={false}
          className={cn(
            "p-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md",
            "text-primary hover:bg-primary/10 dark:hover:bg-primary/20",
            "border border-gray-200 dark:border-gray-700 shadow-sm",
            "flex items-center justify-center",
           
          )}
          whileHover={{ scale: isAudioReady ? 1.05 : 1 }}
          whileTap={{ scale: isAudioReady ? 0.95 : 1 }}
          title={
            isAudioReady ? (isMusicPlaying ? "Pause music" : "Play music") : "Loading music..."
          }
          aria-label={
            isAudioReady ? (isMusicPlaying ? "Pause music" : "Play music") : "Loading music"
          }
        >
          {isMusicPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </motion.button>

        {/* Close Website Button */}
<motion.button

  onClick={() => setShowClosePopup(true)}
  className={cn(
    "p-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md",
    "text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50",
    "border border-gray-200 dark:border-gray-700 shadow-sm",
    "flex items-center justify-center"
  )}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  title="Close Website"
>
  <Power className="w-4 h-4 text-red-500" />
</motion.button>
      </motion.div>

      

      {/* Bottom Navbar */}
      <motion.div
        className={cn(
          "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50",
          "transition-transform duration-300 ease-in-out",
          showNavbar ? "translate-y-0" : "translate-y-full"
        )}
        style={{ willChange: "transform" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg p-2 border border-gray-200 dark:border-gray-700">
          <div className="flex space-x-1 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "p-2 rounded-full transition-colors flex flex-col items-center",
                  activeSection === item.href
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                )}
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs mt-1 hidden md:block">{item.name}</span>
              </a>
            ))}
            <div className="flex items-center px-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.div>

     {showClosePopup && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md">

    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.85, opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white dark:bg-[#0f172a] p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 text-center max-w-sm w-full"
    >

      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center justify-center gap-2">
        <Power className="w-5 h-5 text-red-500" />
        Close Portfolio?
      </h3>

      <p className="text-m text-gray-500 dark:text-gray-400 mb-6">
        Thank you for visiting my portfolio <br />
        ~ <span className="text-lg">{emoji}</span> Varsha SS
      </p>

      <div className="flex justify-center gap-4">

        {/* Cancel */}
        <button
          onMouseEnter={() => setEmoji("😇")}
          onMouseLeave={() => setEmoji("😊")}
          onClick={() => setShowClosePopup(false)}
          className="px-4 py-2 rounded-lg border border-gray-400 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium"
        >
          Cancel
        </button>

        {/* OK */}
        <button
          onMouseEnter={() => setEmoji("😭")}
          onMouseLeave={() => setEmoji("😊")}
          onClick={() => {
            window.close();

            setTimeout(() => {
              window.location.href = "about:blank";
            }, 200);
          }}
          className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg transition font-medium"
        >
          OK
        </button>

      </div>

    </motion.div>

  </div>
)}



    </>
  );
};
