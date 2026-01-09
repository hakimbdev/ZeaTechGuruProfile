import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'AI & Automation', href: '#services' },
      { name: 'Cybersecurity', href: '#services' },
      { name: 'Software Development', href: '#services' },
      { name: 'IT Consulting', href: '#services' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' }
    ]
  }

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Zea</span>
              <span className="text-gray-400">Tech</span>
              <span className="text-white">Guru</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming businesses through innovative AI solutions, cybersecurity excellence, 
              and cutting-edge software development. Building the future, one line of code at a time.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} className="text-white" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={20} className="text-white" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={20} className="text-white" />
              </a>
              <a 
                href="#contact" 
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} ZeaTechGuru. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Crafted with <FaHeart className="text-red-500 mx-2" size={14} /> by ZeaTechGuru
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

