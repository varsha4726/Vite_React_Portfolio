"use client";

import {
  ArrowUp,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/varsha-s-s-3b8464305",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://twitter.com/ShaSha42600",
      label: "Twitter",
    },
    {
      icon: <Youtube size={18} />,
      href: "https://t.me/Varsha7426",
      label: "Telegram",
    },
    {
      icon: <Github size={18} />,
      href: "https://github.com/varsha4726",
      label: "GitHub",
    },
  ];

 const quickLinks = [
  { name: "Home", href: "#HeroSection" },
  { name: "About", href: "#AboutSection" },
  { name: "Work", href: "#ProjectsSection" },
  { name: "Contact", href: "#ContactSection" },
];

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "varshasuresh7426@gmail.com",
      href: "mailto:varshasuresh7426@gmail.com",
    },
    {
      icon: <Phone size={16} />,
      text: " +91 9080335364",
      href: "tel:+919080335364",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

 const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/varshasuresh7426@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            _subject: "New Portfolio Newsletter Subscription",
            message: `New newsletter subscriber: ${email}`,
            _captcha: "false",
          }),
        }
      );

      if (response.ok) {
        alert(
          "Thank you for subscribing! You will receive updates on my latest work."
        );
        setEmail("");
      } else {
        alert("Unable to subscribe right now. Please try again.");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="px-6 py-12 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Glass background container */}
        <motion.div
          className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 rounded-xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Branding */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                VARSHA
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Full Stack Developer building responsive, scalable, and
                user-focused web applications.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants}>
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">
                Navigation
              </h4>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 2 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <a
                      href={link.href}
                      className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm text-gray-600 dark:text-gray-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">
                Contact
              </h4>

              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3 text-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-gray-600 dark:text-gray-400 mt-0.5">
                      {info.icon}
                    </span>

                    {info.href ? (
                      <a
                        href={info.href}
                        className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-gray-600 dark:text-gray-300"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-300">
                        {info.text}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h4 className="text-gray-900 dark:text-white font-medium text-sm uppercase tracking-wider">
                Newsletter
              </h4>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Subscribe to get updates on my latest work.
              </p>

              <form
                className="space-y-3"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 dark:bg-gray-800/50 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-300 focus:border-gray-900 dark:focus:border-gray-300 w-full"
                  required
                  disabled={isSubmitting}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/50 flex flex-col items-center text-xs text-gray-600 dark:text-gray-400 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <p>
                © {currentYear} Varsha. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Privacy
              </a>

              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Terms
              </a>

              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Cookies
              </a>

              <motion.a
                href="#HeroSection"
                aria-label="Back to top"
                className="p-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};