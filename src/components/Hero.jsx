import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left space-y-6 animate-fadeInUp">
            <div className="space-y-2">
              <h2 className="text-gray-400 text-lg md:text-xl font-mono tracking-wider">
                &lt;Developer /&gt;
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">ZeaTechGuru</span>
              </h1>
            </div>

            <div className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed border-l-2 border-white pl-4">
              <p className="font-medium">AI & Automation Specialist</p>
              <p>Cybersecurity Analyst | Software Engineer</p>
              <p>International Financier | PMP® Certified Project Manager</p>
              <p>Graphics Designer & Digital Marketer</p>
              <p className="text-white font-semibold">
                AI & Educational Technology Leader advancing equitable learning in Africa
              </p>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="#contact" className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </a>
              <a href="#portfolio" className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-all duration-300">
                View Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-6">
              <a href="https://www.linkedin.com/in/abdulhakim-ahmad-413b2514b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/hakimbdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <FaGithub size={24} />
              </a>
              <a href="https://x.com/ZeaTechGuru" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <FaTwitter size={24} />
              </a>
              <a href="mailto:aahmaddadani@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center md:justify-end animate-fadeInUp">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-white">
                <img
                  src="https://res.cloudinary.com/ddgtxaels/image/upload/v1767996809/Blue_and_White_Simple_Law_Firm_Logo_3_ejp2gi.png"
                  alt="ZeaTechGuru Profile"
                  className="w-full h-full object-contain p-8 hover:scale-110 transition-all duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-white/30"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-white/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

