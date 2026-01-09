import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'AI-Powered Customer Service Platform',
      category: 'ai',
      description: 'Intelligent chatbot system with natural language processing, reducing customer response time by 70%.',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
      image: '/projects/ai-chatbot.jpg',
      outcome: '70% faster response time, 95% customer satisfaction'
    },
    {
      title: 'Enterprise Security Infrastructure',
      category: 'cybersecurity',
      description: 'Comprehensive cybersecurity framework for multinational corporation with 10,000+ employees.',
      technologies: ['Network Security', 'Penetration Testing', 'SIEM', 'Cloud Security'],
      image: '/projects/security.jpg',
      outcome: 'Zero security breaches, 99.9% uptime'
    },
    {
      title: 'E-Learning Platform for African Schools',
      category: 'software',
      description: 'Scalable educational platform serving 50,000+ students across 5 African countries.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      image: '/projects/elearning.jpg',
      outcome: '50,000+ active users, 85% engagement rate'
    },
    {
      title: 'Automated Workflow Management System',
      category: 'automation',
      description: 'Custom automation solution streamlining business processes and reducing manual work by 60%.',
      technologies: ['Python', 'RPA', 'API Integration', 'PostgreSQL'],
      image: '/projects/automation.jpg',
      outcome: '60% reduction in manual tasks, $200K annual savings'
    },
    {
      title: 'Odoo ERP Implementation',
      category: 'software',
      description: 'Full-scale Odoo ERP deployment for manufacturing company with custom modules.',
      technologies: ['Odoo', 'Python', 'PostgreSQL', 'Docker'],
      image: '/projects/odoo.jpg',
      outcome: '40% improvement in operational efficiency'
    },
    {
      title: 'Predictive Analytics Dashboard',
      category: 'ai',
      description: 'Machine learning-powered analytics platform for financial forecasting and risk assessment.',
      technologies: ['Python', 'Scikit-learn', 'React', 'D3.js'],
      image: '/projects/analytics.jpg',
      outcome: '92% prediction accuracy, data-driven insights'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI & Automation' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'software', name: 'Software Development' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions that deliver measurable results
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300"></div>
                <div className="text-6xl text-white/20 group-hover:text-white/30 transition-all duration-300">
                  {project.category === 'ai' && '🤖'}
                  {project.category === 'cybersecurity' && '🛡️'}
                  {project.category === 'software' && '💻'}
                  {project.category === 'automation' && '⚙️'}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white font-medium mb-2">Key Outcome:</p>
                  <p className="text-sm text-gray-400">{project.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

