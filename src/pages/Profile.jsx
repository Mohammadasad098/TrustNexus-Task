import { motion } from "framer-motion"
import {
  MapPin,
  Mail,
  Phone,
  Calendar,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Code,
  Award,
  BookOpen,
  Users,
  Coffee,
  Heart,
  Briefcase,
  Globe,
} from "lucide-react"
import DashboardNavbar from "../components/DashboardNavbar"

const Profile = () => {
  const skills = [
    { name: "React.js", level: 95, color: "bg-purple-500" },
    { name: "Next.js", level: 90, color: "bg-pink-600" },
    { name: "JavaScript", level: 92, color: "bg-purple-600" },
    { name: "HTML5", level: 95, color: "bg-pink-500" },
    { name: "CSS3", level: 90, color: "bg-purple-400" },
    { name: "Tailwind CSS", level: 88, color: "bg-pink-400" },
    { name: "Bootstrap", level: 85, color: "bg-purple-700" },
    { name: "Firebase", level: 80, color: "bg-pink-700" },
  ]


  const experiences = [
    {
      id: 1,
      title: "Co-Founder & Full Stack Developer",
      company: "Elitotech Solutions",
      duration: "2023 - Present",
      description:
        "Founded and leading a tech solutions company, developing scalable web applications and providing comprehensive digital solutions to clients.",
      technologies: ["React.js", "Next.js", "Firebase", "Tailwind CSS"],
      color: "border-purple-500",
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Freelance Projects",
      duration: "2023 - Present",
      description:
        "Developing responsive web applications using modern JavaScript frameworks, focusing on user-friendly interfaces and seamless user experiences.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
      color: "border-pink-500",
    },
    {
      id: 3,
      title: "Student Developer",
      company: "Saylani Mass IT Training (SMIT)",
      duration: "2023 - Present",
      description:
        "Currently expanding skills in full-stack development, mastering both frontend and backend technologies through comprehensive training programs.",
      technologies: ["JavaScript", "React.js", "HTML/CSS", "Firebase"],
      color: "border-purple-400",
    },
  ]

  const achievements = [
    {
      icon: Code,
      title: "Blogging App Developer",
      description: "Built a full-stack blogging app with React.js and Firebase",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Globe,
      title: "Weather App Creator",
      description: "Developed weather app with real-time API integration",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: Users,
      title: "Quiz App Builder",
      description: "Created interactive quiz app with dynamic API data",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Award,
      title: "Meme Generator",
      description: "Built modern meme generator using Next.js",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "15+", icon: Briefcase, color: "text-purple-600" },
    { label: "Years Experience", value: "2+", icon: Calendar, color: "text-pink-600" },
    { label: "Technologies", value: "8+", icon: Code, color: "text-purple-500" },
    { label: "Happy Clients", value: "10+", icon: Heart, color: "text-pink-500" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  }

  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img src="/images/profilecover.jpg" alt="Profile Cover" className="w-full h-full object-cover" />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/70 to-pink-600/70"></div>
              </div>

              {/* Profile Content */}
              <div className="relative px-8 pb-8">
                {/* Profile Picture */}
                <motion.div
                  className="absolute -top-16 left-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </motion.div>

                {/* Profile Info */}
                <div className="pt-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex-1"
                  >
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Muhammad Asad</h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-4">
                     Web And Mobile App Developer
                    </p>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-gray-600 mb-6">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Karachi, Pakistan</span>
                      </div>
                      <div className="flex items-center">
                        <Mail size={16} className="mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base break-all">mohammadasadiam64@gmail.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base">03112998095</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 sm:gap-4">
                      {[
                        { icon: Github, href: "https://github.com/Mohammadasad098", color: "hover:text-gray-800" },
                        {
                          icon: Linkedin,
                          href: "https://linkedin.com/in/asad-ullah-b2a2572a9",
                          color: "hover:text-purple-600",
                        },
                        { icon: ExternalLink, href: "https://portfolio-61eff.web.app/", color: "hover:text-pink-600" },
                        { icon: Instagram, href: "https://instagram.com/m.asad._.07/", color: "hover:text-pink-500" },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-gray-500 ${social.color} transition-colors duration-300`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <social.icon size={20} className="sm:w-6 sm:h-6" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
                    {/* Download CV Button */}
                    <motion.a
                      href="/images/Muhammad Asad.pdf"
                      download="Muhammad Asad.pdf"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={16} className="mr-2" />
                      <span className="whitespace-nowrap">Download CV</span>
                    </motion.a>

                    {/* Portfolio Link Button */}
                    <motion.a
                      href="https://portfolio-61eff.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      <span className="whitespace-nowrap">Portfolio</span>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon size={32} className={`${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Users className="mr-3 text-purple-600" />
                  About Me
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I am a dedicated front-end developer with a passion for creating responsive, user-friendly web
                  applications. Currently, I am expanding my skills in full-stack development through ongoing studies at
                  SMIT, with a focus on mastering both frontend and backend technologies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As the founder of Elitotect Solutions, I lead innovative projects and provide comprehensive digital
                  solutions. I specialize in modern JavaScript frameworks like React.js and Next.js, always staying
                  up-to-date with the latest industry trends and best practices.
                </p>
              </motion.div>

              {/* Experience Section */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Briefcase className="mr-3 text-purple-600" />
                  Work Experience
                </h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      className={`border-l-4 ${exp.color} pl-6 pb-6 relative`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className="absolute w-3 h-3 bg-white border-4 border-current rounded-full -left-2 top-0"></div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{exp.duration}</span>
                      </div>
                      <p className="text-purple-600 font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education Section */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <BookOpen className="mr-3 text-purple-600" />
                  Education
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-800">Web and Mobile App Development</h3>
                    <p className="text-purple-600 font-medium">Saylani Mass IT Training (SMIT)</p>
                    <p className="text-gray-500 text-sm">2023 - Present, Karachi</p>
                  </div>
                  <div className="border-l-4 border-pink-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-800">Intermediate - Pre-Engineering</h3>
                    <p className="text-pink-600 font-medium">Govt. College For Men Nazimabad</p>
                    <p className="text-gray-500 text-sm">2024, Karachi</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-6">
                    <h3 className="text-lg font-semibold text-gray-800">Matriculation - Computer Science</h3>
                    <p className="text-purple-600 font-medium">Hilton Public School</p>
                    <p className="text-gray-500 text-sm">2022, Karachi</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Skills Section */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Code className="mr-3 text-purple-600" />
                  Skills
                </h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${skill.color}`}
                          variants={skillVariants}
                          initial="hidden"
                          animate="visible"
                          custom={skill.level}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Projects/Achievements Section */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Award className="mr-3 text-purple-600" />
                  Featured Projects
                </h2>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className={`${achievement.bgColor} p-4 rounded-lg`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start">
                        <achievement.icon className={`${achievement.color} mr-3 mt-1`} size={20} />
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-1">{achievement.title}</h3>
                          <p className="text-gray-600 text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-lg text-white"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Coffee className="mr-3" />
                  Let's Work Together
                </h2>
                <p className="mb-6 opacity-90">
                  Have a project in mind? Let's discuss how we can bring your ideas to life with modern web
                  technologies.
                </p>
                <motion.a
                  href="mailto:mohammadasadiam64@gmail.com"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 w-full block text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
