import React from 'react'
import { FaCode, FaRobot, FaShieldAlt, FaChartLine, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa'

const About = () => {
  const expertise = [
    {
      icon: <FaRobot size={32} />,
      title: 'AI & Automation',
      description: 'Advanced AI solutions and intelligent automation systems'
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: 'Cybersecurity',
      description: 'Comprehensive security analysis and network protection'
    },
    {
      icon: <FaCode size={32} />,
      title: 'Software Engineering',
      description: 'Full-stack development and scalable architecture design'
    },
    {
      icon: <FaChartLine size={32} />,
      title: 'International Finance',
      description: 'Strategic financial planning and international operations'
    },
    {
      icon: <FaProjectDiagram size={32} />,
      title: 'Project Management',
      description: 'PMP® certified with proven track record of delivery'
    },
    {
      icon: <FaGraduationCap size={32} />,
      title: 'EdTech Leadership',
      description: 'Advancing equitable learning solutions across Africa'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">ZeaTechGuru</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A <span className="text-white font-semibold">results-driven technology leader</span> with deep expertise in 
              AI, automation, cybersecurity, and software engineering. With a proven track record of delivering 
              innovative solutions across multiple domains, I specialize in transforming complex challenges into 
              elegant, scalable systems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As a <span className="text-white font-semibold">PMP® certified project manager</span>, I bring strategic 
              leadership to international projects, combining technical excellence with business acumen. My work in 
              educational technology is driven by a commitment to advancing equitable learning opportunities across Africa.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From architecting AI-powered applications to implementing robust cybersecurity frameworks, I deliver 
              solutions that drive <span className="text-white font-semibold">digital transformation</span> and create 
              measurable business value.
            </p>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-400 text-sm">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

