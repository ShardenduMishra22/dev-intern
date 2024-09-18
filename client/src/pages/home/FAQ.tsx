import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

type FAQProps = {
  question: string;
  answer: string;
};

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-slate-200 font-medium">{question}</span>
        <span className={`transition-transform duration-700 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {!isOpen ? (
            <Plus className="text-green-400" />
          ) : (
            <Minus className="text-red-400" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-700 ease-in-out ${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}
      >
        <div className="pb-4 text-slate-300">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

type FAQSectionProps = {
  faqs: { question: string; answer: string }[];
};

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white">FAQ</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
