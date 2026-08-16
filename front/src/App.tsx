import { motion } from "motion/react"
import { ChevronDown } from "lucide-react"

function App() {
  const projects = [
    {
      image: "/projects/project-1.png",
      title: "STATUS",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      image: "/projects/project-2.png",
      title: "STATUS",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      image: "/projects/project-3.png",
      title: "STATUS",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#202020] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden border-b border-white/10">
        {/* Animated glow */}
        <motion.div
          className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-lime-500/40 blur-[140px]"
          animate={{
            x: [0, 60, 20, 0],
            y: [0, 40, 80, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="relative z-10 flex max-w-2xl flex-col items-center px-6 text-center"
        >
          {/* Title */}
          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
            className="text-5xl font-light"
          >
            Hi, I'm{" "}
            <span className="font-bold">
              Flavio <span className="text-lime-400">Fleck</span>
            </span>{" "}
            👋
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            className="mt-5 max-w-xl text-xl leading-[1.45] text-white/80 sm:text-sm"
          >
            Full Stack Developer focused on building modern web applications.
            <br />
            I enjoy turning ideas into functional products, solving problems
            through code, and building software that is both practical and
            well-structured.
          </motion.p>

          {/* Link */}
          <motion.a
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
            href="#about"
            whileHover={{
              scale: 1.05,
            }}
            className="mt-8 text-[11px] font-semibold text-lime-400 transition-colors hover:text-lime-300 sm:text-lg"
          >
            Get to know me a little better.
          </motion.a>

          {/* Scroll arrow */}
          <motion.a
            href="#about"
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-4"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
          className="fixed right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-8 text-[11px]"
        >
          {/* Instagram */}
          <motion.a
            href="#"
            whileHover={{
              scale: 1.2,
              x: -3,
            }}
            className="transition-colors hover:text-lime-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path></g></g>
            </svg>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="#"
            whileHover={{
              scale: 1.2,
              x: -3,
            }}
            className="transition-colors hover:text-lime-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path></g></g>
            </svg>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:your@email.com"
            whileHover={{
              scale: 1.2,
              x: -3,
            }}
            className="transition-colors hover:text-lime-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M12,23.403v-0.013v-13.001l-0.12,-0.089h-0.01l-2.73,-2.02c-1.67,-1.24 -4.05,-1.18 -5.53,0.28c-0.99,0.98 -1.61,2.34 -1.61,3.85v3.602zM38,23.39v0.013l10,-7.391v-3.602c0,-1.49 -0.6,-2.85 -1.58,-3.83c-1.46,-1.457 -3.765,-1.628 -5.424,-0.403l-2.876,2.123l-0.12,0.089zM14,24.868l10.406,7.692c0.353,0.261 0.836,0.261 1.189,0l10.405,-7.692v-13.001l-11,8.133l-11,-8.133zM38,25.889v15.111c0,0.552 0.448,1 1,1h6.5c1.381,0 2.5,-1.119 2.5,-2.5v-21.003zM12,25.889l-10,-7.392v21.003c0,1.381 1.119,2.5 2.5,2.5h6.5c0.552,0 1,-0.448 1,-1z"></path></g></g>
            </svg>
          </motion.a>
        </motion.div>
      </section>

      {/* ABOUT ME */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="mx-auto max-w-4xl px-6 py-24 sm:px-10"
      >
        <div className="grid items-center gap-10 md:grid-cols-[180px_1fr]">
          {/* Title */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -40,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                },
              },
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
              About me
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              A little about
              <br />
              myself.
            </h2>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 40,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  delay: 0.15,
                },
              },
            }}
            className="space-y-4 text-sm leading-7 text-white/65"
          >
            <p>
              I'm an early-career Full Stack Developer currently building my professional experience in an international company, 
              where I contribute to both frontend and backend projects using technologies such as Next.js, React, TypeScript, and NestJS.           
            </p>

            <p>
              Although I'm still at the beginning of my professional journey, 
              I've already had the opportunity to work on real-world applications and 
              collaborate on projects involving different technologies and challenges.
              I enjoy learning through practice, solving problems, and turning ideas into functional and well-structured products. This portfolio showcases some of the projects I've worked on throughout my professional and academic journey.
            </p>
            <p>
              My main technologies include{" "}
              <span className="text-white">
                TypeScript, React, Next.js
              </span>{" "}
              and <span className="text-white">NestJS</span>.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="mx-auto max-w-6xl border-t border-white/10 px-6 py-16 sm:px-10"
      >
        {/* Section title */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
              },
            },
          }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
            Portfolio
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Some of my work
          </h2>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <motion.div
                className="aspect-[1.7/1] overflow-hidden bg-[#292929]"
                whileHover="hover"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  variants={{
                    hover: {
                      scale: 1.05,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Info */}
              <div className="px-2 pt-4 text-center">
                <motion.h2
                  className="text-sm font-medium"
                  whileHover={{
                    color: "#a3e635",
                  }}
                >
                  {project.title}
                </motion.h2>

                <p className="mx-auto mt-3 max-w-[280px] text-[9px] leading-[1.55] text-white/60">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                duration: 0.6,
              },
            },
          }}
          className="mt-16 flex flex-col items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.08,
            }}
            className="text-sm font-semibold text-lime-400 transition-colors hover:text-lime-300"
          >
            Get in touch
          </motion.a>

          <motion.a
            href="#contact"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-2 text-lg"
          >
            <ChevronDown />
          </motion.a>
        </motion.div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="flex min-h-[300px] items-center justify-center border-t border-white/10"
      >
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.95,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.7,
              },
            },
          }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold">
            Let's{" "}
            <span className="text-lime-400">
              work together.
            </span>
          </h2>

          <p className="mt-3 text-sm text-white/50">
            Have a project in mind? Get in touch.
          </p>

          <motion.a
            href="mailto:your@email.com"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#a3e635",
              color: "#000000",
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-6 inline-block border border-lime-400 px-6 py-3 text-xs font-semibold text-lime-400"
          >
            Contact me
          </motion.a>
        </motion.div>
      </motion.section>
    </main>
  )
}

export default App