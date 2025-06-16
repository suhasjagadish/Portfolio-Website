
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

const Experience = () => {
  const [currentCert, setCurrentCert] = useState(0);

  const certifications = [
    {
      title: 'AWS Certified Data Analytics',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Specialized in designing and implementing AWS data analytics solutions',
      url: 'https://aws.amazon.com/certification/'
    },
    {
      title: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      date: '2023',
      description: 'Expert certification in Power BI dashboard creation and data modeling',
      url: 'https://learn.microsoft.com/en-us/credentials/'
    },
    {
      title: 'Tableau Desktop Certified Associate',
      issuer: 'Tableau',
      date: '2023',
      description: 'Advanced data visualization and dashboard development skills',
      url: 'https://www.tableau.com/learn/certification'
    },
    {
      title: 'Google Analytics Individual Qualification',
      issuer: 'Google',
      date: '2022',
      description: 'Comprehensive understanding of Google Analytics and digital marketing metrics',
      url: 'https://skillshop.exceedlms.com/student/catalog'
    }
  ];

  const nextCert = () => {
    setCurrentCert((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCurrentCert((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and recognized accomplishments
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Career Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Career Timeline</h3>
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent ml-6"></div>
              
              {/* Career Card */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg ml-4 mt-6"></div>
                
                <div className="bg-background rounded-xl shadow-lg p-8 border border-border">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div> 
                        <h4 className="text-2xl font-bold text-foreground">System Engineer</h4>
                        <p className="text-lg text-muted-foreground">Infosys Ltd.</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span>March 2022 - July 2024</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold text-foreground mb-4 text-lg">Key Responsibilities</h5>
                      <ul className="space-y-3">
                        <li className="text-sm text-muted-foreground flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Designed and optimized complex SQL queries for relational database (Oracle XE 11g).
                        </li>
                        <li className="text-sm text-muted-foreground flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Developed and maintained robust server-side applications using Java and Spring Boot, ensuring high performance and responsiveness to requests from the front-end.
                        </li>
                        <li className="text-sm text-muted-foreground flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Implemented Stored Procedures and optimization strategies to improve query performance and reduce latency.
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-4 text-lg">Impact Metrics</h5>
                      <ul className="space-y-3">
                        <li className="text-sm text-muted-foreground flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Improved application speed and reliability by 20% through optimized SQL queries and application logic.
                        </li>
                        <li className="text-sm text-muted-foreground flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Improved query performance and reduce latency by 30%.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Technologies Used Section */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h5 className="font-semibold text-foreground mb-4 text-lg">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'Oracle xe-11g', 'Spring Boot', 'MS Visual Studio', 'Software Development Lifecycle','Jira'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Carousel */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Certifications & Awards</h3>
            <div className="relative bg-background rounded-xl shadow-lg border border-border overflow-hidden max-w-md mx-auto" style={{ height: '480px', width: '320px' }}>
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                
                <div className="text-center flex-1 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {certifications[currentCert].title}
                  </h4>
                  <p className="text-primary font-medium mb-3">
                    {certifications[currentCert].issuer}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {certifications[currentCert].date}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    {certifications[currentCert].description}
                  </p>
                  
                  {/* View Button */}
                  <div className="flex justify-center">
                    <a
                      href={certifications[currentCert].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      <span>View</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={prevCert}
                  className="p-2 bg-secondary hover:bg-secondary/80 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={nextCert}
                  className="p-2 bg-secondary hover:bg-secondary/80 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex justify-center space-x-2">
                  {certifications.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCert(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentCert ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
