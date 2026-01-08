import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = ({ faqs, activeFaq, onToggleFaq }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-['Helvetica'] text-4xl md:text-5xl font-bold tracking-[-0.01em] mb-16 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => onToggleFaq(index)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className="font-['Helvetica'] text-xl font-semibold group-hover:text-gray-700 transition-colors">
                  {faq.question}
                </span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                  {activeFaq === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;