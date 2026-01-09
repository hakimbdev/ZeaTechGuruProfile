import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    setStatus('Message sent successfully! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setStatus(''), 5000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      title: 'Email',
      value: 'aahmaddadani@gmail.com',
      link: 'mailto:aahmaddadani@gmail.com'
    },
    {
      icon: <FaPhone size={24} />,
      title: 'Phone',
      value: '+234 8062558567',
      link: 'tel:+2348062558567'
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: 'Location',
      value: 'Global - Remote Services',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss how we can transform your business with cutting-edge technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Build Your Next AI-Powered Solution
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you need AI automation, cybersecurity solutions, custom software development, 
                or strategic IT consulting, I'm here to help transform your vision into reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-white mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin size={24} className="text-white" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <FaGithub size={24} className="text-white" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <FaTwitter size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors duration-200"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 px-6 font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>

              {status && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-3 rounded">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

