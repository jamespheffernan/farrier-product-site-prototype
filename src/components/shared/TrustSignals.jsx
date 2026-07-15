import React from 'react';

const TrustSignals = () => {
  const goals = [
    { icon: '🔒', title: 'Privacy boundary', description: 'Prefer local processing and verify every external data flow.' },
    { icon: '⚡', title: 'Focused workflow', description: 'Reduce friction around one well-defined professional job.' },
    { icon: '🔗', title: 'Tool fit', description: 'Explore integrations without forcing a replacement workflow.' },
    { icon: '🛡️', title: 'Proof before claims', description: 'Treat security and reliability as requirements to demonstrate.' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Design goals explored</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are prototype principles, not certifications or shipped-product guarantees.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal) => (
            <div key={goal.title} className="text-center p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-4">{goal.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{goal.title}</h3>
              <p className="text-sm text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
