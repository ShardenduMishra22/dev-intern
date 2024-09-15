import React from 'react';
import FAQSection from "./FAQ";

const FAQ_Part: React.FC = () => {
  
  // Please add your questions here dont touch the code // 
  // this part could be included in backend as of now its front end specific //
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
    // un-comment and add question here
    // {
    //   question: "Dummy Question",
    //   answer: "Dummy Answer"
    // }
  ];

  return (
    <div className="h-auto pt-10 pb-20 bg-gray-900 p-6">
      <FAQSection faqs={faqs} />
    </div>
  );
};

export default FAQ_Part;