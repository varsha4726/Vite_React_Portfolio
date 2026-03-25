"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Python IIT",
    category: "python",
    image: "/certificates/python IIT.jpg",
  },
  {
    id: 2,
    title: "EXOR Robotics",
    category: "robotics",
    image: "/certificates/Exor Robotics.jpg",
  },
  {
    id: 3,
    title: "Workshop",
    category: "workshop",
    image: "/certificates/workshop.jpg",
  },
  {
    id: 4,
    title: "Python Certification",
    category: "python",
    image: "/certificates/csc.jpg",
  },
];

export const CertificatesSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCertificates =
    activeFilter === "all"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  return (
    <section
      id="certificates"
      className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
            <Award size={16} />
            Certificates
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Certifications
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Certifications and workshops that strengthened my technical
            knowledge and practical skills.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-14">
          {["all", "python", "workshop", "robotics"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-secondary/50 hover:bg-secondary"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="bg-background border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 flex items-center justify-between">
                <h3 className="font-semibold text-lg">
                  {certificate.title}
                </h3>

                <a
                  href={certificate.image}
                  target="_blank"
                  className="text-sm px-3 py-1 rounded-md bg-primary text-white hover:bg-primary/90"
                >
                  View
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};