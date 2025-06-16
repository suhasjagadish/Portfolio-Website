
import React from 'react';
import { Github, Linkedin, Mail, Users, GitBranch, Clock } from 'lucide-react';

const Contact = () => {
  const socialConnections = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/suhasjagadish',
      color: 'bg-gray-900 text-white border-gray-900',
      hoverColor: 'hover:bg-gray-800 hover:border-gray-800',
      metric: '20+ repositories',
      metricIcon: GitBranch,
      description: 'View my repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/suhas-jagadish/',
      color: 'bg-blue-600 text-white border-blue-600',
      hoverColor: 'hover:bg-blue-700 hover:border-blue-700',
      metric: '500+ Connections',
      metricIcon: Users,
      description: 'Connect with me professionally'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:jsuhas2204@gmail.com',
      color: 'bg-red-500 text-white border-red-500',
      hoverColor: 'hover:bg-red-600 hover:border-red-600',
      metric: '24h Response Rate',
      metricIcon: Clock,
      description: 'Get in touch directly via email : jsuhas2204@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next data analytics project? Let's discuss how we can turn your data into actionable insights.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {socialConnections.map((connection, index) => {
              const Icon = connection.icon;
              const MetricIcon = connection.metricIcon;
              
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <a
                    href={connection.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className={`
                      relative overflow-hidden rounded-xl p-8 h-64 transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl
                      border-2 ${connection.color} ${connection.hoverColor}
                    `}>
                      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 transition-all duration-500 transform group-hover:scale-110">
                          <Icon className="w-8 h-8" />
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">
                          {connection.label}
                        </h3>
                        
                        <div className="flex items-center space-x-2 mb-3 opacity-90">
                          <MetricIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">{connection.metric}</span>
                        </div>
                        
                        <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                          {connection.description}
                        </p>
                      </div>
                      
                      {/* Expanding hover effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 p-6 bg-background rounded-xl border border-border shadow-lg">
              <div className="text-2xl">🚀</div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Ready to start a project?</h3>
                <p className="text-muted-foreground text-sm">Let's transform your data into competitive advantage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
