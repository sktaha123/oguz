import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = ({ projects }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="font-['Helvetica'] text-4xl md:text-5xl font-bold tracking-[-0.01em] mb-16 text-center">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-400 to-gray-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center space-x-2 bg-white bg-opacity-90 px-6 py-3 rounded-full">
                    <span className="font-['Helvetica'] text-sm font-medium">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-['Helvetica'] text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;