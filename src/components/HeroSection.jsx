import { MousePointerClick, Code, Award, Download, Briefcase, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [downloading, setDownloading] = useState(false);
const [downloaded, setDownloaded] = useState(false);

 const handleViewResume = () => {
  setDownloading(true);

  setTimeout(() => {
    setDownloading(false);
    setDownloaded(true);

    window.open("/Varsha_ss.pdf", "_blank");

    setTimeout(() => setDownloaded(false), 2000);
  }, 1800);
};

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/10"
    >

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-emerald-500/10 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-16 sm:mt-0">

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
          }}
        >

          {/* LEFT SIDE */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            >
              <Briefcase className="h-4 w-4" />
              Currently Accepting Opportunities
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            >
              <span className="block text-foreground">Hi, It's Varsha S.S</span>

              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Frontend Engineer",
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2"
              />

            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mt-6 leading-relaxed"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            >
              I build <span className="text-primary font-semibold">modern web applications </span>
               using React, js and scalable technologies to create powerful digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            >

              <a
                href="#projects"
                className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-white flex items-center gap-2"
              >
                <Code className="h-4 w-4" />
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-primary text-foreground flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>

             <motion.button
  onClick={handleViewResume}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative px-6 py-4 rounded-xl border border-border text-muted-foreground flex items-center gap-2 overflow-hidden"
>
  <Download className="h-4 w-4" />

  {!downloading && !downloaded && "Resume"}
  {downloading && "Downloading..."}
  {downloaded && "Downloaded ✓"}

  {/* Progress bar */}
  {downloading && (
    <motion.div
      className="absolute bottom-0 left-0 h-[3px] bg-primary"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1.6 }}
    />
  )}

  {/* Flying file animation */}
  {downloaded && (
    <motion.div
      initial={{ y: -10, opacity: 1 }}
      animate={{ y: 40, opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute left-1/2 -translate-x-1/2"
    >
      📄
    </motion.div>
  )}
</motion.button>


            </motion.div>

          </div>

          {/* RIGHT SIDE IMAGE profile*/}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end w-full"
            variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          >

            <div className="relative flex justify-center items-center">

              {/* Glow */}
              <motion.div
                className="absolute w-[380px] h-[380px] rounded-full bg-cyan-400/20 blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Rotating ring */}
              <motion.div
                className="absolute w-[360px] h-[360px] rounded-full border border-cyan-400/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile image */}
              <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.7)]">

  <img
    src="/profile.png"
    alt="Varsha"
    className="absolute top-[-20px] w-full h-[380px] object-cover object-top"
  />

</div>

{/* Floating Tech Icons */}
<motion.div
  className="absolute -top-6 left-10 text-orange-500 text-2xl"
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  <FaHtml5 />
</motion.div>

<motion.div
  className="absolute top-10 -left-8 text-blue-500 text-2xl"
  animate={{ y: [0, 12, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  <FaCss3Alt />
</motion.div>

<motion.div
  className="absolute bottom-6 -left-10 text-yellow-400 text-2xl"
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3.5, repeat: Infinity }}
>
  <FaJs />
</motion.div>

<motion.div
  className="absolute -top-8 right-10 text-cyan-400 text-2xl"
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  <FaReact />
</motion.div>

<motion.div
  className="absolute top-12 -right-10 text-purple-500 text-2xl"
  animate={{ y: [0, 12, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  <FaBootstrap />
</motion.div>

<motion.div
  className="absolute bottom-7 -right-10 text-green-500 text-2xl"
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3.5, repeat: Infinity }}
>
  <FaNodeJs />
</motion.div>

<motion.div
  className="absolute bottom-[-20px] left-1/2 text-green-600 text-2xl"
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  <SiMongodb />
</motion.div>




 </div> {/* relative container */}
</motion.div> {/* right side motion div */}
</motion.div> {/* main flex container */}
</div> {/* container */}

        

     

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >

        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center items-start p-1">

          <motion.div
            className="w-1.5 h-2 bg-primary rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

        </div>

      </motion.div>

    </section>
  );
};