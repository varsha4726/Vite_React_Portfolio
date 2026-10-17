"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Python IIT",
    category: "python",
    image: "/certificates/python IIT.jpg",
  },

  // Pumo Technovation replaces EXOR Robotics
  {
    id: 2,
    title: "MERN Stack Development",
    category: "web development",
    image: "/certificates/pumo-mern-front.png",
    backImage: "/certificates/pumo-mern-back.png",
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

  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  const filteredCertificates =
    activeFilter === "all"
      ? certificates
      : certificates.filter(
          (certificate) =>
            certificate.category === activeFilter
        );

  const filters = [
    "all",
    "python",
    "web development",
    "workshop",
  ];

  return (
    <section
      id="certificates"
      className="
        py-24
        px-4
        bg-gradient-to-b
        from-background
        via-primary/5
        to-background
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* ==============================
            HEADER
        ============================== */}

        <div className="text-center mb-16">

          <div
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
              mb-4
            "
          >
            <Award size={16} />

            Certificates
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-4
            "
          >
            My Certifications
          </h2>

          <p
            className="
              text-muted-foreground
              max-w-xl
              mx-auto
            "
          >
            Certifications and workshops that strengthened
            my technical knowledge and practical skills.
          </p>

        </div>

        {/* ==============================
            FILTER BUTTONS
        ============================== */}

        <div
          className="
            flex
            justify-center
            flex-wrap
            gap-3
            mb-14
          "
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6
                py-2
                rounded-full
                text-sm
                font-medium
                transition

                ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "bg-secondary/50 hover:bg-secondary"
                }
              `}
            >
              {filter.charAt(0).toUpperCase() +
                filter.slice(1)}
            </button>
          ))}
        </div>

        {/* ==============================
            CERTIFICATES GRID
        ============================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-8
          "
        >
          {filteredCertificates.map(
            (certificate) => (
              <motion.div
                key={certificate.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  bg-background
                  border
                  border-border
                  rounded-xl
                  overflow-hidden
                  shadow-lg
                  hover:shadow-xl
                  transition
                "
              >

                {/* ==============================
                    CERTIFICATE IMAGE
                ============================== */}

                <div className="overflow-hidden bg-muted">

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="
                      w-full
                      h-64
                      object-cover
                      hover:scale-105
                      transition
                      duration-500
                    "
                  />

                </div>

                {/* ==============================
                    TITLE + VIEW
                ============================== */}

                <div
                  className="
                    p-5
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <h3 className="font-semibold text-lg">
                    {certificate.title}
                  </h3>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCertificate(
                        certificate
                      )
                    }
                    className="
                      shrink-0
                      text-sm
                      px-4
                      py-2
                      rounded-md
                      bg-primary
                      text-white
                      hover:bg-primary/90
                      transition
                    "
                  >
                    View
                  </button>
                </div>

              </motion.div>
            )
          )}
        </div>

      </div>

      {/* =================================================
          CERTIFICATE VIEW MODAL
      ================================================= */}

      <AnimatePresence>
        {selectedCertificate && (
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
              bg-black/80
              backdrop-blur-sm
              flex
              items-center
              justify-center
              p-4
            "
            onClick={() =>
              setSelectedCertificate(null)
            }
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                bg-background
                border
                border-border
                rounded-2xl
                shadow-2xl
                max-w-5xl
                w-full
                max-h-[90vh]
                overflow-y-auto
              "
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              {/* ==============================
                  MODAL HEADER
              ============================== */}

              <div
                className="
                  sticky
                  top-0
                  z-10
                  flex
                  items-center
                  justify-between
                  gap-4
                  p-5
                  bg-background
                  border-b
                  border-border
                "
              >
                <div>
                  <h3 className="text-xl font-bold">
                    {selectedCertificate.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Certificate
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedCertificate(null)
                  }
                  className="
                    p-2
                    rounded-full
                    hover:bg-muted
                    transition
                  "
                >
                  <X size={22} />
                </button>
              </div>

              {/* ==============================
                  FRONT + BACK
              ============================== */}

              <div className="p-5 md:p-8 space-y-8">

                {/* FRONT */}

                <div>
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-primary
                      mb-3
                    "
                  >
                    Front
                  </p>

                  <div
                    className="
                      rounded-xl
                      overflow-hidden
                      border
                      border-border
                      bg-muted
                    "
                  >
                    <img
                      src={selectedCertificate.image}
                      alt={`${selectedCertificate.title} Front`}
                      className="
                        w-full
                        h-auto
                        object-contain
                      "
                    />
                  </div>
                </div>

                {/* BACK */}

                {selectedCertificate.backImage && (
                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold
                        text-primary
                        mb-3
                      "
                    >
                      Back
                    </p>

                    <div
                      className="
                        rounded-xl
                        overflow-hidden
                        border
                        border-border
                        bg-muted
                      "
                    >
                      <img
                        src={
                          selectedCertificate.backImage
                        }
                        alt={`${selectedCertificate.title} Back`}
                        className="
                          w-full
                          h-auto
                          object-contain
                        "
                      />
                    </div>
                  </div>
                )}

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};