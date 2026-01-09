import React from 'react'
import { 
  FaLaptopCode, 
  FaRobot, 
  FaShieldAlt, 
  FaCogs, 
  FaPalette, 
  FaBriefcase 
} from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: 'Website & Software Development',
      description: 'Custom websites, automated software solutions, and AI-powered applications built with modern technologies and best practices.',
      features: [
        'Full-stack web development',
        'Progressive web applications',
        'E-commerce solutions',
        'API development & integration'
      ]
    },
    {
      icon: <FaRobot size={40} />,
      title: 'AI & Automation Solutions',
      description: 'Intelligent automation systems and AI-powered tools that streamline operations and enhance decision-making capabilities.',
      features: [
        'AI chatbots & virtual assistants',
        'Machine learning models',
        'Process automation',
        'Predictive analytics'
      ]
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: 'Cybersecurity & Network Services',
      description: 'Comprehensive security analysis, network infrastructure design, and system protection to safeguard your digital assets.',
      features: [
        'Security audits & assessments',
        'Network architecture design',
        'Penetration testing',
        'Incident response planning'
      ]
    },
    {
      icon: <FaCogs size={40} />,
      title: 'Odoo & Zoho Implementations',
      description: 'Expert implementation, configuration, and optimization of Odoo and Zoho platforms tailored to your business needs.',
      features: [
        'System installation & setup',
        'Custom module development',
        'Data migration & integration',
        'Training & support'
      ]
    },
    {
      icon: <FaPalette size={40} />,
      title: 'Design & Creative Services',
      description: 'Professional graphic design, product design, and digital marketing services that elevate your brand presence.',
      features: [
        'Brand identity & logo design',
        'UI/UX design',
        'Social media management',
        'Content creation & strategy'
      ]
    },
    {
      icon: <FaBriefcase size={40} />,
      title: 'Business & IT Consulting',
      description: 'Strategic IT consulting and project management services to drive digital transformation and business growth.',
      features: [
        'IT strategy & roadmap',
        'Digital transformation',
        'Project management (PMP®)',
        'Technology advisory'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services <span className="gradient-text">& Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start">
                    <span className="text-white mr-2">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to build innovative solutions that drive real results
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Let's Build Your Next AI-Powered Solution
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

