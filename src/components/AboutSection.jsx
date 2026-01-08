import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Helvetica'] text-4xl md:text-5xl font-bold tracking-[-0.01em] mb-12 text-center">
            About OGUZ
          </h2>
          <div className="space-y-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;