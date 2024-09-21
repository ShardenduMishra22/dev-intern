import React from 'react';
import FAQSection from "./FAQ";
import { useTheme } from '@/store/theme-provider';

const FAQ_Part: React.FC = () => {

  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Add your questions here, don't touch the code
  const faqs = [
    {
      question: "What is DevForces?",
      answer: "DevForces is a community for developers to learn, collaborate, and grow together."
    },
    {
      question: "How do I join DevForces?",
      answer: "You can join by signing up on our website and becoming a member of the community."
    },
    {
      question: "Is DevForces free?",
      answer: "Yes, DevForces is completely free for all users."
    },
    // Add more questions here
  ];

  return (
    <div className={`h-auto pt-10 pb-20 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-300 text-gray-900'} p-6`}>
      <FAQSection faqs={faqs} />
    </div>
  );
};

export default FAQ_Part;
