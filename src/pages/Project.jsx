import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Code, Smartphone, Globe, Zap } from "lucide-react"
import DashboardNavbar from "../components/DashboardNavbar"

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Elitotech Solutions – Professional Software House Website",
      description:
        "I designed and developed a responsive website for Elitotech Solutions. The site features a clean UI, showcases services, and ensures smooth user experience across all devices.",
      image: "images/project1.png",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      category: "Web Application",
      status: "Completed",
      demoLink: "https://elitotechsolution.web.app/",
      githubLink: "https://github.com/Mohammadasad098/elitotech",
      icon: Globe,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      title: "Microfinance Web Application – Hackathon Project (SMIT)",
      description:
        "Developed a full-stack Microfinance Web Application during the SMIT final hackathon. The app allows users to register, apply for microloans, track loan status, and view repayment history. Built using React.js for the frontend, Express.js and Node.js for the backend, and MongoDB for the database.",
      image: "images/project2.png",
      technologies: ["React", "Node", "express", "Tailwind CSS"],
      category: "Web Application",
      status: "Completed",
      demoLink: "https://smit-hackathon-frontend-peach.vercel.app/",
      githubLink: "https://github.com/Mohammadasad098/SMIT-HACKATHON-FRONTEND",
      icon: Smartphone,
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 3,
      title: "Memes Maker",
      description:
        "I developed a Meme Maker application using Next.js, allowing users to create and customize their own memes easily. This app features an intuitive interface that lets users add text, and share their creations with friends or on social media.",
      image: "images/project3.png",
      technologies: ["Next.js", "Tailwind CSS"],
      category: "Web Application",
      status: "Completed",
      demoLink: "https://next-meme-maker-alpha.vercel.app/",
      githubLink: "https://github.com/Mohammadasad098/Next-Meme-Maker",
      icon: Zap,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      title: "Blogging App",
      description:
        "I developed a Meme Maker application using Next.js, allowing users to create and customize their own memes easily. This app features an intuitive interface that lets users add text, and share their creations with friends or on social media.",
      image: "images/project4.png",
      technologies: ["React.js", "Firebase", "Tailwind CSS"],
      category: "Web Application",
      status: "Completed",
      demoLink: "https://react-blogging-app-sigma.vercel.app/",
      githubLink: "https://github.com/Mohammadasad098/React-Blogging-App",
      icon: Zap,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      statusColor: "bg-green-100 text-green-800",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My Projects
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore my latest work and creative solutions
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => {
              const IconComponent = project.icon
              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -15,
                    transition: { duration: 0.3 },
                  }}
                  className={`${project.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/50 backdrop-blur-sm relative`}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      variants={imageVariants}
                      whileHover="hover"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`${project.statusColor} px-3 py-1 rounded-full text-xs font-medium`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`${project.iconColor} bg-white/90 backdrop-blur-sm p-2 rounded-lg`}>
                        <IconComponent size={20} />
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Project Title & Category */}
                    <div className="mb-4">
                      <motion.h3
                        className="text-xl font-bold text-gray-800 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{project.category}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 mb-4 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center mb-2">
                        <Code size={16} className="text-gray-500 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            className="bg-white/80 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group text-sm"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        <span>Live Demo</span>
                      </motion.a>

                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex-1 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center text-sm"
                      >
                        <Github size={16} className="mr-2" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-tr ${project.color} opacity-10 rounded-full`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  ></motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom Stats Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <motion.div className="bg-white rounded-xl p-6 shadow-lg" whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>

              <motion.div className="bg-white rounded-xl p-6 shadow-lg" whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
                <div className="text-gray-600">Technologies Used</div>
              </motion.div>

              <motion.div className="bg-white rounded-xl p-6 shadow-lg" whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
