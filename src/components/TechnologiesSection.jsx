import React from 'react';

const TechnologiesSection = ({ technologies }) => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="font-['Helvetica'] text-4xl md:text-5xl font-bold tracking-[-0.01em] mb-16 text-center">
          Technologies
        </h2>
        <div className="relative">
          <div className="flex animate-pulse">
            {technologies.concat(technologies).map((tech, index) => (
              <div key={index} className="flex-shrink-0 mx-4 px-6 py-3 bg-white rounded-full shadow-md">
                <span className="font-['Helvetica'] text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;