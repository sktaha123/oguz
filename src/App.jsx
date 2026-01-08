import React, { useState } from 'react';
/* import HeroSection from './components/HeroSection'; */
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import WorkflowSection from './components/WorkflowSection';
import TechnologiesSection from './components/TechnologiesSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { ChevronDown, Code, Eye, Palette, Zap, Globe, Layers, Smartphone, Monitor, Server, Github, Twitter, Linkedin, Instagram, ExternalLink, Plus, Minus } from 'lucide-react';
import HeroSection from './components/herosection';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "Why should we hire OGUZ?",
      answer: "OGUZ combines technical excellence with strategic thinking. We don't just build websites—we create digital experiences that drive business results and exceed expectations."
    },
    {
      question: "What makes OGUZ different from other agencies?",
      answer: "We believe in experiences, not websites. Our holistic approach considers every touchpoint of your digital presence, ensuring cohesive, memorable interactions that build lasting relationships."
    },
    {
      question: "Why is India a top-tier choice for outsourcing web развития?",
      answer: "India offers world-class talent, competitive pricing, and a proven track record of delivering complex digital solutions. Our team combines global standards with local expertise."
    },
    {
      question: "How do you handle long-term support?",
      answer: "We offer comprehensive maintenance packages with 24/7 monitoring, regular updates, performance optimization, and dedicated support to ensure your digital assets continue to perform optimally."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience across e-commerce, fintech, healthcare, education, and enterprise SaaS. Our adaptable approach ensures we understand and solve industry-specific challenges."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Timelines vary based on scope and complexity, but most projects are delivered within 8-16 weeks. We prioritize quality and thoroughness over speed, ensuring exceptional results."
    }
  ];

  const projects = [
    { id: 1, title: "E-commerce Platform", category: "Retail" },
    { id: 2, title: "Fintech Dashboard", category: "Finance" },
    { id: 3, title: "Healthcare Portal", category: "Healthcare" },
    { id: 4, title: "Educational Platform", category: "Education" },
    { id: 5, title: "Corporate Website", category: "Enterprise" },
    { id: 6, title: "Mobile App", category: "Technology" }
  ];

  const workflowSteps = [
    {
      icon: Eye,
      title: "Discovery & Strategy",
      description: "We dive deep into your business, audience, and goals to craft a strategic foundation that drives success."
    },
    {
      icon: Code,
      title: "Research & Ideation",
      description: "Through competitive analysis and user research, we uncover insights that inform innovative solutions."
    },
    {
      icon: Monitor,
      title: "Wireframes & First Draft",
      description: "We translate ideas into tangible structures, creating intuitive user flows and information architecture."
    },
    {
      icon: Palette,
      title: "Visual Design & Prototyping",
      description: "Our design team brings your brand to life with stunning visuals and interactive prototypes."
    },
    {
      icon: Smartphone,
      title: "Development & Iteration",
      description: "We build robust, scalable solutions using cutting-edge technologies and agile methodologies."
    },
    {
      icon: Zap,
      title: "Testing, Polish & Launch",
      description: "Rigorous quality assurance ensures flawless performance before we deliver your exceptional digital experience."
    }
  ];

  const technologies = [
    "Photoshop", "Illustrator", "WordPress", "JavaScript", "React", 
    "Next.js", "Tailwind CSS", "Three.js", "Blender", "Figma", 
    "Node.js", "MongoDB", "AWS", "Docker", "GitHub"
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="font-['Raleway']">
     <HeroSection/>
      <AboutSection />
      <ProjectsSection projects={projects} />
      <WorkflowSection workflowSteps={workflowSteps} />
      <TechnologiesSection technologies={technologies} />
      <FAQSection 
        faqs={faqs} 
        activeFaq={activeFaq} 
        onToggleFaq={toggleFaq} 
      />
      <Footer />
    </div>
  );
};

export default App;