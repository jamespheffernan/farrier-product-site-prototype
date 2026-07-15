import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: 'Is this a live product site?',
      answer: 'No. This is an archived interface and messaging prototype preserved for design review.',
    },
    {
      question: 'Can I download or buy these products here?',
      answer: 'No. Buttons are non-transactional and the snapshot contains no checkout, account, or download service.',
    },
    {
      question: 'Are the feature descriptions guarantees?',
      answer: 'No. They record product hypotheses and design goals. Each implementation needs its own technical and privacy verification.',
    },
    {
      question: 'Does this site collect analytics?',
      answer: 'No. Analytics, session replay, forms, and deployment configuration were removed from the public snapshot.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">About this archive</h2>
          <p className="text-lg text-gray-600">What the prototype does and does not represent.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className="text-2xl text-gray-400">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
