import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTheme } from '@/store/theme-provider';

type FAQProps = {
  question: string;
  answer: string;
};

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${isDarkMode ? 'text-slate-200' : 'text-gray-900'} font-medium`}>{question}</span>
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
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white': 'text-gray-900'}`}>FAQ</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
