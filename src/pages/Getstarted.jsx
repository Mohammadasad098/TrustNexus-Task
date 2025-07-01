import { motion } from "framer-motion"
import { Code, ArrowRight, Briefcase, Laptop } from "lucide-react"
import LandingNavbar from "../components/LandingNavbar"
import { Link } from "react-router-dom"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
}

export default function SelectRole() {
  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen pt-14 md:pt-0 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center p-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Choose Your Path
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your role to get started with DevConnect and unlock your potential
            </p>
          </motion.div>

          {/* Role Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Developer Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Link to="/signup/developer">
                <div className="bg-white rounded-3xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300 h-full cursor-pointer">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  >
                    <Laptop className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
                    I'm a Developer
                  </h2>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    Showcase your skills, find exciting projects, and connect with innovative companies looking for
                    talent like yours.
                  </p>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-xl group-hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-2">
                    Get Started as Developer
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </Link>
            </motion.div>

            {/* User Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Link to="/signup/user">
                <div className="bg-white rounded-3xl p-8 border border-pink-200 hover:border-pink-300 transition-all duration-300 h-full cursor-pointer">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  >
                    <Briefcase className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 group-hover:text-pink-600 transition-colors">
                    I'm a Client
                  </h2>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    Post your projects, find the perfect developers, and bring your ideas to life with our talented
                    community.
                  </p>
                  <button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white py-3 rounded-xl group-hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-2">
                    Get Started as Client
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Already have account */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">Already have an account?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login/developer">
                <button className="px-6 py-2 border border-purple-300 rounded-xl text-purple-600 hover:bg-purple-50 transition">
                  Developer Login
                </button>
              </Link>
              <Link to="/login/user">
                <button className="px-6 py-2 border border-pink-300 rounded-xl text-pink-600 hover:bg-pink-50 transition">
                  Client Login
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
