import { motion } from "framer-motion"
import { Search, ArrowRight, Code, Users, Zap, Shield, Globe, Star, Sparkles, Rocket } from "lucide-react"
import { useState } from "react"
import LandingNavbar from "../components/LandingNavbar"
import { Link } from "react-router-dom"

// Animation variants for smooth page transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Floating animation for hero icon
const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      {/* Navigation Component */}
      <LandingNavbar />

      {/* Main Landing Page Content */}
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
        {/* Hero Section - Main landing area */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pt-20 pb-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto text-center">
            {/* Animated Hero Icon */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div variants={floatingVariants} animate="animate" className="inline-block">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
                Build.
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Dream. Achieve.
              </span>
            </motion.h1>

            {/* Hero Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your ideas into reality with our powerful platform. Connect with amazing opportunities and
              create something extraordinary together.
            </motion.p>

            {/* Search Bar */}
            <motion.div variants={itemVariants} className="mx-4 sm:mx-auto max-w-full sm:max-w-2xl mb-8 sm:mb-12">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#F1F5F9] rounded-2xl shadow-md border border-slate-300 p-4 flex flex-col md:flex-row items-stretch md:items-center gap-4"
                >
                  {/* Icon + Input */}
                  <div className="flex items-center gap-3 w-full">
                    <Search className="w-6 h-6 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search for developers, projects, or skills..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full border-0 bg-transparent focus:outline-none focus:ring-0 text-base md:text-lg placeholder:text-slate-400 text-[#1E1E2F]"
                    />
                  </div>

                  {/* Button */}
                  <button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-6 hover:opacity-90 rounded-xl px-6 py-2 text-white flex items-center justify-center">
                    Search
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </motion.div>
              </div>
            </motion.div>



            {/* Call to Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/getstarted">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg flex items-center transition-all duration-300">
                    Get Started
                    <Rocket className="w-5 h-5 ml-2" />
                  </button>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <button className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg rounded-xl bg-transparent transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section - Showcase platform benefits */}
        <motion.section
          id="features"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful features designed to accelerate your success and growth
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Amazing Community",
                  description: "Connect with talented individuals and innovative teams from around the globe",
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "AI-powered matching system that finds perfect opportunities in seconds",
                },
                {
                  icon: Shield,
                  title: "Secure & Safe",
                  description: "Enterprise-grade security with encrypted data and secure transactions",
                },
                {
                  icon: Globe,
                  title: "Global Network",
                  description: "Access worldwide opportunities with 24/7 support and collaboration tools",
                },
                {
                  icon: Star,
                  title: "Premium Quality",
                  description: "Verified profiles and ratings ensure you work with top professionals only",
                },
                {
                  icon: Code,
                  title: "Tech Excellence",
                  description: "Built with cutting-edge technology and modern development practices",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300"
                >
                  {/* Feature Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4"
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Feature Content */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section - Final conversion push */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-purple-600 to-pink-600"
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            {/* CTA Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>

            {/* CTA Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
            >
              Join thousands of successful individuals already building their dreams with our platform
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/getstarted">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <button className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 text-lg rounded-xl shadow-lg font-semibold flex items-center mx-auto transition-all duration-300">
                    Begin Your Adventure
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}
