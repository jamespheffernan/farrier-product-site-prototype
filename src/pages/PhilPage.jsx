import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

const PhilPage = () => {
  const features = [
    {
      title: 'Private & Local',
      description: 'Explores a local-processing boundary that an implementation would need to verify.',
      icon: '🔒',
    },
    {
      title: 'Intelligent Autofill',
      description: 'Learns from your patterns and provides smart suggestions for forms, emails, and repetitive tasks.',
      icon: '🧠',
    },
    {
      title: 'Cross-Platform',
      description: 'Works seamlessly across all your applications and browsers without compromising security.',
      icon: '💻',
    },
    {
      title: 'Offline Capable',
      description: 'Functions completely offline, so your productivity never depends on internet connectivity.',
      icon: '📡',
    },
  ];

  const benefits = [
    {
      title: 'Enhanced Security',
      description: 'Treats local storage and minimal data movement as explicit design requirements.',
      icon: '🛡️',
    },
    {
      title: 'Faster Workflows',
      description: 'Reduce repetitive typing and form-filling with intelligent suggestions tailored to your usage patterns.',
      icon: '⚡',
    },
    {
      title: 'Complete Control',
      description: 'You decide what data to store, how long to keep it, and when to delete it. Full transparency and control.',
      icon: '🎛️',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
              🤖
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Phil
            </h1>
            <p className="text-2xl text-accent-600 font-semibold mb-6">
              Private-Local Autofill Agent
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              An interface concept for an autofill agent designed around local storage, explicit
              control, and minimal data movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center concept-actions">
              <Button variant="accent" size="lg" disabled>
                Product concept
              </Button>
              <Link to="/" className="btn btn-outline btn-lg">Back to products</Link>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Design directions for privacy-first local autofill
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Phil?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A concept centred on local control and transparent data handling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-3xl mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Data, Your Device, Your Control
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                The concept assumes local processing for sensitive data. A real implementation would
                need to prove that passwords, personal information, and usage patterns stay within that boundary.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Document every external data flow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Encrypted local storage as a requirement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Complete control over data retention</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center text-4xl mx-auto mb-6">
                  🔐
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Privacy by Design
                </h3>
                <p className="text-gray-600">
                  The design brief prioritises local control, explicit retention choices, and
                  testable privacy claims before release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to experience private autofill?
          </h2>
          <p className="text-xl text-accent-100 mb-8">
            Review the privacy-oriented interaction concept and its proposed boundaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center concept-actions">
            <Button variant="secondary" size="lg" disabled>
              Archived concept
            </Button>
            <Link to="/" className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-accent-600">
              ← Back to Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhilPage;
