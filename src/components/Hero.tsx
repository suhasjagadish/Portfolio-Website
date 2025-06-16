
import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/suhasjagadish',
      tooltip: 'View my repositories',
      hoverColor: '#24292e',
      tooltipBg: '#171515'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/suhas-jagadish/',
      tooltip: 'Connect with me',
      hoverColor: '#0A66C2',
      tooltipBg: '#0077B5'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:jsuhas2204@gmail.com',
      tooltip: 'Send me mail',
      hoverColor: '#EA4335',
      tooltipBg: '#EA4335'
    }
  ];

  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="relative inline-block group">
                <img
                  src="src\Images\me_page-0001 (1).jpg"
                  alt="Suhas J"
                  className="profile-image w-48 h-48 rounded-full mx-auto object-cover shadow-2xl transition-all duration-700"
                />
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 font-['Poppins']">
              SUHAS J
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              <span className="block mb-2">Aspiring Data Analyst</span>
              <span className="text-lg">My passion lies in bridging data and decision-making, crafting solutions that unlock business potential and deliver measurable impact with data-driven insights using <b>Python</b> and <b>SQL</b> and other <b>Analytical</b> and <b>Business Intelligence</b> tools</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <div key={index} className="relative group">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link flex items-center justify-center w-14 h-14 rounded-full border-2 border-slate-400 bg-transparent transition-all duration-500 transform hover:scale-110 hover:shadow-lg"
                      data-hover-color={link.hoverColor}
                      onMouseEnter={() => setHoveredIcon(link.label)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <Icon className="w-6 h-6 text-slate-600" />
                    </a>
                    
                    {/* Tooltip */}
                    {hoveredIcon === link.label && (
                      <div 
                        className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-white text-xs rounded whitespace-nowrap animate-fade-in"
                        style={{ backgroundColor: link.tooltipBg }}
                      >
                        {link.tooltip}
                        <div 
                          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                          style={{ borderTopColor: link.tooltipBg }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Resume Button */}
              <div className="ml-4">
                <a
                  href="https://drive.google.com/file/d/1-K8N5X99sCFIRTRwuFQe7hZ39_Jhr04k/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-button flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-primary/90"
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">See Resume</span>
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <span>Discover my journey</span>
                <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center animate-bounce">
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          .profile-image {
            filter: brightness(1);
            transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .profile-image:hover {
            transform: scale(1.1) rotate(5deg);
            filter: brightness(1.1) contrast(1.1);
            box-shadow: 0 25px 50px rgba(0,0,0,0.25);
          }
          
          .social-link[data-hover-color="#24292e"]:hover {
            background-color: #24292e !important;
            border-color: #24292e !important;
          }
          
          .social-link[data-hover-color="#24292e"]:hover .lucide {
            color: white !important;
          }
          
          .social-link[data-hover-color="#0A66C2"]:hover {
            background-color: #0A66C2 !important;
            border-color: #0A66C2 !important;
          }
          
          .social-link[data-hover-color="#0A66C2"]:hover .lucide {
            color: white !important;
          }
          
          .social-link[data-hover-color="#EA4335"]:hover {
            background-color: #EA4335 !important;
            border-color: #EA4335 !important;
          }
          
          .social-link[data-hover-color="#EA4335"]:hover .lucide {
            color: white !important;
          }
          
          .resume-button {
            position: relative;
            overflow: hidden;
          }
          
          .resume-button:hover {
            transform: scale(1.05) translateY(-2px);
          }
          
          .resume-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }
          
          .resume-button:hover::before {
            left: 100%;
          }
          
          .animate-fade-in {
            animation: fadeIn 200ms ease-in-out;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(4px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
        `
      }} />
    </>
  );
};

export default Hero;
