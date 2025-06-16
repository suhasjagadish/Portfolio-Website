import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [stackedCards, setStackedCards] = useState<number[]>([]);

  const projects = [
    {
      title: 'E-commerce Analytics Dashboard',
      description: 'Restaurant Expaansion analysis with food devilery Partner in other countries',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
      challenges: [
        'Real-time data processing from multiple sources',
        'Complex customer journey mapping',
        'Scalable architecture for growing data volumes'
      ],
      impact: [
        '35% increase in conversion rates',
        '28% reduction in cart abandonment',
        '$2.3M additional revenue generated'
      ],
      metrics: [
        { label: '35% increase in conversion rates', value: '35%' },
        { label: '50% reduction in cart abandonment', value: '50%' },
        { label: '$2M additional annual revenue', value: '$2M' },
        { label: '90% faster reporting processes', value: '90%' }
      ],
      techStack: ['Python', 'SQL', 'Power BI', 'AWS'],
      problemStatement: 'The e-commerce company was struggling with fragmented data across multiple platforms, making it impossible to get a unified view of customer behavior and business performance. Decision-making was slow and often based on incomplete information.',
      solution: 'Developed a comprehensive analytics platform that integrates data from multiple sources including website analytics, sales systems, and customer support. Implemented real-time dashboards with advanced segmentation and predictive analytics capabilities.',
      results: 'The platform transformed how the company understood its customers, leading to more targeted marketing campaigns, improved user experience, and significant revenue growth. The automated reporting system freed up 20+ hours per week for the analytics team.',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Financial Risk Assessment Model',
      description: 'Machine learning model for credit risk evaluation and loan default prediction with 94% accuracy.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop',
      challenges: [
        'Handling imbalanced datasets',
        'Feature engineering for financial data',
        'Regulatory compliance requirements'
      ],
      impact: [
        '94% model accuracy achieved',
        '45% reduction in default rates',
        '$8.7M in prevented losses'
      ],
      metrics: [
        { label: '94% model accuracy achieved', value: '94%' },
        { label: '45% reduction in default rates', value: '45%' },
        { label: '$8.7M in prevented losses', value: '$8.7M' },
        { label: '60% faster loan processing', value: '60%' }
      ],
      techStack: ['Python', 'SQL', 'Tableau', 'Statistical Analytics'],
      problemStatement: 'Financial institutions needed better risk assessment tools to evaluate loan applications and predict potential defaults while maintaining regulatory compliance.',
      solution: 'Built a sophisticated machine learning model using ensemble methods that processes over 200 financial variables and external data sources to predict loan defaults with explainable AI techniques.',
      results: 'Achieved 94% accuracy in default prediction, resulting in 45% reduction in default rates and $8.7M in prevented losses.',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Data-driven solution for optimizing inventory levels and reducing operational costs across multiple warehouses.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=450&fit=crop',
      challenges: [
        'Multi-location inventory synchronization',
        'Demand forecasting accuracy',
        'Integration with legacy systems'
      ],
      impact: [
        '22% reduction in inventory costs',
        '18% improvement in delivery times',
        '$4.1M in operational savings'
      ],
      metrics: [
        { label: '22% reduction in inventory costs', value: '22%' },
        { label: '18% improvement in delivery times', value: '18%' },
        { label: '$4.1M in operational savings', value: '$4.1M' },
        { label: '95% demand forecast accuracy', value: '95%' }
      ],
      techStack: ['Excel', 'Power BI', 'SQL', 'Product Analytics'],
      problemStatement: 'Companies with multiple warehouses faced challenges in inventory management, leading to overstocking, stockouts, and inefficient distribution.',
      solution: 'Created an end-to-end supply chain optimization system using predictive analytics to forecast demand and optimize inventory levels across multiple locations.',
      results: 'Delivered 22% reduction in inventory costs, 18% improvement in delivery times, and $4.1M in operational savings.',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Customer Segmentation Platform',
      description: 'Advanced customer segmentation system using RFM analysis and clustering algorithms for targeted marketing.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop',
      challenges: [
        'Large-scale data processing',
        'Dynamic segment updates',
        'Cross-platform data integration'
      ],
      impact: [
        '67% improvement in campaign ROI',
        '41% increase in customer lifetime value',
        '5.2x better email engagement rates'
      ],
      metrics: [
        { label: '67% improvement in campaign ROI', value: '67%' },
        { label: '41% increase in customer lifetime value', value: '41%' },
        { label: '5.2x better email engagement rates', value: '5.2x' },
        { label: '85% customer satisfaction score', value: '85%' }
      ],
      techStack: ['Python', 'Tableau', 'AWS', 'Statistical Analytics'],
      problemStatement: 'Marketing teams struggled with generic campaigns that failed to resonate with different customer segments, resulting in poor engagement and low ROI.',
      solution: 'Built a sophisticated customer segmentation platform using advanced clustering algorithms and RFM analysis that creates dynamic customer segments updating in real-time.',
      results: 'Achieved 67% improvement in campaign ROI, 41% increase in customer lifetime value, and 5.2x better email engagement rates.',
      githubUrl: 'https://github.com'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById('projects');
      if (!projectSection) return;

      const sectionRect = projectSection.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - sectionTop) / sectionHeight));

      const newStackedCards: number[] = [];
      const totalCards = projects.length;
      
      for (let i = 0; i < totalCards + 1; i++) {
        const cardStackPoint = (i + 1) / totalCards;
        if (scrollProgress > cardStackPoint) {
          newStackedCards.push(i);
        }
      }

      setStackedCards(newStackedCards);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my projects showcasing various skills and techniques
          </p>
        </div>

        {/* Stacking cards */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {projects.map((project, index) => {
            const isStacked = stackedCards.includes(index);
            const stackIndex = stackedCards.indexOf(index);
            
            return (
              <div
                key={index}
                className={`sticky bg-background rounded-xl shadow-xl overflow-hidden transition-all duration-500 ${
                  isStacked ? 'transform scale-100' : 'hover:shadow-2xl'
                }`}
                style={{ 
                  top: `${2 + stackIndex * 2}rem`,
                  zIndex: index,
                  transform: isStacked ? `translateY(${-stackIndex * 17}px) scale(${0.80+stackIndex * 0.005})` : 'none',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Challenges</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Impact</h4>
                        <ul className="space-y-2">
                          {project.impact.map((impact, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {impact}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => openModal(index)}
                        className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal - Redesigned */}
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-background rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors z-10 bg-background/90"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Header with image */}
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-4xl font-bold text-white text-center px-4">
                      {projects[selectedProject].title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8">
                  {/* Problem Statement */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">!</span>
                      </div>
                      <h4 className="text-xl font-semibold text-foreground">Problem Statement</h4>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="text-muted-foreground leading-relaxed">
                        {projects[selectedProject].problemStatement}
                      </p>
                    </div>
                  </div>
                  
                  {/* Solution Approach */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">📊</span>
                      </div>
                      <h4 className="text-xl font-semibold text-foreground">Solution Approach</h4>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="text-muted-foreground leading-relaxed">
                        {projects[selectedProject].solution}
                      </p>
                    </div>
                  </div>
                  
                  {/* Results & Impact */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">🚀</span>
                      </div>
                      <h4 className="text-xl font-semibold text-foreground">Results & Impact</h4>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {projects[selectedProject].results}
                      </p>
                    </div>
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {projects[selectedProject].metrics.map((metric, i) => (
                        <div key={i} className="bg-background border border-border rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center space-x-4 pt-6 border-t border-border">
                    <a
                      href={projects[selectedProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </a>
                    <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;