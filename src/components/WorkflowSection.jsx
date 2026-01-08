import React from 'react';

const WorkflowSection = ({ workflowSteps }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-['Helvetica'] text-4xl md:text-5xl font-bold tracking-[-0.01em] mb-16 text-center">
          Our Process
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-24">
              {workflowSteps.map((step, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 text-right md:text-left' : 'md:pl-12 text-left md:text-right'}`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-['Helvetica'] text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="md:w-2/12 hidden md:block">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 bg-black rounded-full"></div>
                    </div>
                  </div>
                  <div className="md:w-5/12 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
    );
};

export default WorkflowSection;