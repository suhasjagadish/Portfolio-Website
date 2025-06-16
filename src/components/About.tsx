
import React from 'react';
import { Target, Heart, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const topicCards = [
    {
      icon: Target,
      title: 'Background',
      content: 'Backend Developer with 2+ years of experience with strong technical skills.',
      color: 'bg-blue-500'
    },
    {
      icon: Lightbulb,
      title: 'Goals',
      content: 'Leveraging technical expertise and analytical skills to solve business problems and drive decisions effectively.',
      color: 'bg-green-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      content: 'Enjoy discovering data patterns, building visuals and turning insights into actionable business decisions.',
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: 'Action',
      content: 'Exploring new technologies and innovative methods to turn complex data into strategic business solutions.',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the story behind me
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Personal Narrative */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm Suhas, <span className="text-primary font-semibold">aspiring data analyst</span> with 2.5 years of
                  experience in backend development. My journey started with a deep curiosity about how data shapes business
                  decisions in today's fast-paced world.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Through a strong technical foundation and self-directed learning, I've honed my skills in <span className="text-primary font-semibold">
                    statistical analysis, data manipulation, data visualization,
                  </span> and <span className="text-primary font-semibold">business intelligence tools</span>. I believe data has the power to tell
                  compelling stories and drive meaningful change. My passion lies in transforming complex datasets into
                  actionable insights, optimizing workflows, and automating processes to build efficient, data-driven
                  solutions.

                </p>
                <p className="text-muted-foreground leading-relaxed">
                 With expertise in <span className="text-primary font-semibold">SQL, Python, Tableau, and Power BI</span>, I thrive on problem-solving and am
                 eager to apply my skills in a role that enhances data-driven decision-making.

                </p>
              </div>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Problem Solver</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Critical Thinker</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Continuous Learner</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Innovation Focused</span>
              </div>
            </div>

            {/* Right Column - Interactive Topic Cards */}
            <div className="grid grid-cols-2 gap-4">
              {topicCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="group cursor-pointer"
                  >
                    <div className={`
                      relative overflow-hidden rounded-xl p-6  transition-all duration-300 transform
                      group-hover:scale-105 group-hover:shadow-xl
                      ${card.color} text-white
                    `}
                    style={{ height: '14rem' }}
                    >
                      <div className="relative z-10">
                        <div
                          className={'flex  items-center'} >
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2 mr-2">
                          <Icon className="w-6 h-6" />
                          
                        </div>
                        <h4 className="text-sm font-semibold mb-2">{card.title}</h4>
                        </div>
                        <p className="text-sm leading-relaxed opacity-90">
                          {card.content}
                        </p>  
                      </div>
                      
                      {/* Animated background effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
