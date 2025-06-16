
import { url } from 'inspector';
import React, { useState } from 'react';

const Skills = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const skills = [
    {
      name: 'Python',
      logo: '🐍',
      url: 'src/Images/python.1024x1018.png',
      rating: 5,
      description: 'Programming with Pandas, NumPy, Matplotlib, Seaborn, Data preprocessing'
    },
    {
      name: 'SQL',
      logo: '🗃️',
      url: 'src/Images/sql.png',
      rating: 5,
      description: 'Expert in complex queries, data manipulation, MySQL, PostgreSQL, SQLite, Query optimization, Stored procedures, Complex joins, Data warehousing'
    },
    {
      name: 'MS Excel',
      logo: '📊',
      url: 'src/Images/ms-excel.png',
      rating: 4,
      description: 'Advanced formulas, Lookup formulas, Index Match, Pivot tables, Conditional Formatting, Data validation, Advanced charts'
    },
    {
      name: 'Power BI',
      logo: '📈',
      url: 'src/Images/power-bi.png',
      rating: 5,
      description: 'Creating interactive dashboards, DAX calculations, Custom Visuals and enterprise-level BI solutions'
    },
    {
      name: 'Tableau',
      logo: '📋',
      url: 'https://img.icons8.com/color/96/tableau-software.png',
      rating: 4,
      description: 'Calculated fields, Parameters, Story points, Advanced filters, Dashboard actions, Data blending'
    },
    {
      name: 'Product Analytics',
      logo: '🎯',
      url: 'src/Images/product_analytics.png',
      rating: 4,
      description: 'User behavior analysis, Product performance metrics, RCA, CRM, Customer segmentation, A/B testing, Funnel analysis, Guesstimation'
    },
    {
      name: 'Statistical Analytics',
      logo: '📉',
      url: 'src/Images/histogram.png',
      rating: 4,
      description: 'Sampling, Distributions, Hypothesis testing, ANOVA, Chi-square tests, T-tests, Correlation analysis'
    },
    {
      name: 'AWS',
      logo: '☁️',
      url: 'src/Images/aws.png',
      rating: 3,
      description: 'Cloud data services including S3, Redshift, and Lambda for scalable analytics solutions'
    },
    // {
    //   name: 'Azure',
    //   logo: '☁️',
    //   rating: 3,
    //   // url: 'https://azure.microsoft.com/',
    //   description: 'Cloud data services including S3, Redshift, and Lambda for scalable analytics solutions'
    // }
  ];

  const scrollingSkills = [...skills, ...skills]; // Duplicate for seamless loop

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to turn raw data into meaningful   insights
          </p>
        </div>

        {/* Auto-scrolling ticker */}
        <div className="relative overflow-hidden mb-12 bg-secondary/20 py-4">
          <div className="flex space-x-12 animate-scroll-right-to-left">
            {scrollingSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-8 whitespace-nowrap"
              >
                <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center text-2xl shadow-md">
                  {/* {skill.logo} */}
                  <img src={skill.url} alt={skill.name} className="w-10 h-10 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive skill grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative h-72"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div 
                className={`
                  relative w-full h-full transition-transform duration-1000 cursor-pointer
                  ${flippedCard === index ? 'rotate-y-180' : ''}
                `}
                style={{ 
                  transformStyle: 'preserve-3d' 
                }}
              >
                {/* Front of card */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-xl p-6 bg-background border border-border text-foreground shadow-lg flex flex-col items-center justify-center text-center"
                  style={{ 
                    backfaceVisibility: 'hidden' 
                  }}
                >
                  <div className="text-4xl mb-4"><img
                          src={skill.url}
                          alt={skill.name}
                          className="w-16 h-16 object-contain"
                        /></div>
                  <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-xl p-6 bg-background border border-border text-foreground shadow-lg flex flex-col justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h3 className="text-lg font-semibold mb-4 text-center">{skill.name}</h3>
                  <p className="text-sm leading-relaxed text-center text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .animate-scroll-right-to-left {
            animation: scroll-rtl 30s linear infinite;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          @keyframes scroll-rtl {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `
      }} />
    </section>
  );
};

export default Skills;
