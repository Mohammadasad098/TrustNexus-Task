"use client"

import { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Send,
  ArrowUp,
  Heart,
  ExternalLink,
  MessageCircle,
  Star,
  Award,
  Users,
  Globe,
} from "lucide-react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app" },
    { name: "UI/UX Design", href: "/services/ui-ux" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "SEO Services", href: "/services/seo" },
    { name: "E-commerce Solutions", href: "/services/ecommerce" },
  ]

  const resources = [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-700" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:text-red-600" },
    { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-gray-800" },
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "150+", label: "Projects Completed" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Globe, value: "25+", label: "Countries Served" },
  ]

  return (
    <footer className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ec4899' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Stats Section */}
      <div className="relative border-b border-pink-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="images/logo.png"
                alt="Company Logo"
                className="h-24 object-contain mb-4"
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                We are a leading digital agency specializing in web development, mobile apps, and digital marketing
                solutions. Transform your business with our innovative technology solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <MapPin size={18} className="mr-3 text-pink-500" />
                <span className="text-sm">123 Business Street, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <Phone size={18} className="mr-3 text-pink-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <Mail size={18} className="mr-3 text-pink-500" />
                <span className="text-sm">hello@company.com</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <Clock size={18} className="mr-3 text-pink-500" />
                <span className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-gray-800 font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-white rounded-lg text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg border border-pink-100`}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Resources */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6 relative">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500"></span>
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 shadow-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-lg font-medium hover:from-pink-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-lg"
                >
                  <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Subscribe
                </button>
              </div>
              {isSubscribed && (
                <div className="mt-3 text-green-600 text-sm flex items-center">
                  <MessageCircle size={16} className="mr-2" />
                  Thank you for subscribing!
                </div>
              )}
            </form>

            {/* Resources */}
            <div>
              <h4 className="text-gray-800 font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {resources.slice(0, 4).map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ExternalLink
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-pink-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-gray-600 text-sm">
              <span>© 2024 Your Company Name. Made with</span>
              <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
              <span>in Tech City</span>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              {resources.slice(2, 5).map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                >
                  {resource.name}
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full text-white hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 group shadow-md hover:shadow-lg"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-pulse delay-500"></div>
    </footer>
  )
}

export default Footer
