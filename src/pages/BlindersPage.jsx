import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import TrustSignals from '../components/shared/TrustSignals';
import FAQ from '../components/shared/FAQ';

const BlindersPage = () => {
  const features = [
    {
      title: 'Focused Weekly Review',
      description: 'Streamlined interface that guides you through a comprehensive weekly review process without distractions.',
      icon: '🎯',
    },
    {
      title: 'Omnifocus Integration',
      description: 'Seamlessly connects with your existing Omnifocus projects and tasks for a unified workflow.',
      icon: '📋',
    },
    {
      title: 'Progress Tracking',
      description: 'Visual progress indicators help you stay on track with your weekly goals and commitments.',
      icon: '📊',
    },
    {
      title: 'Customizable Workflow',
      description: 'Adapt the review process to match your personal productivity style and preferences.',
      icon: '⚙️',
    },
  ];

  const useCases = [
    {
      title: 'Weekly Planning',
      description: 'Start each week with clarity by reviewing completed tasks, upcoming priorities, and adjusting your focus areas.',
    },
    {
      title: 'Goal Alignment',
      description: 'Ensure your daily actions align with your larger objectives through regular review and adjustment.',
    },
    {
      title: 'Stress Reduction',
      description: 'Reduce overwhelm by systematically processing your commitments and maintaining a clear view of your workload.',
    },
  ];

  const handlePrimaryCTA = () => {
    document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
              🎯
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Transform Your Weekly Review{' '}
              <span className="block text-primary-600">With Focused Clarity</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Streamline your Omnifocus weekly review with a distraction-free interface
              that helps you stay on track with your goals and maintain clarity in your workflow.
            </p>

            {/* Single Primary CTA - Mobile First */}
            <div className="flex justify-center mb-8">
              <Button
                variant="primary"
                size="lg"
                className="min-h-[44px] min-w-[44px]"
                onClick={handlePrimaryCTA}
                aria-label="Explore the Blinders concept features"
              >
                Explore the concept
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for an effective weekly review process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
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

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're a busy professional or productivity enthusiast, Blinders adapts to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl mx-auto mb-6">
                  {index === 0 && '📅'}
                  {index === 1 && '🎯'}
                  {index === 2 && '😌'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <TrustSignals />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to transform your weekly review?
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-6 sm:mb-8">
            This page records a focused weekly-review interaction concept, not a download offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center concept-actions">
            <Button
              variant="secondary"
              size="lg"
              className="min-h-[44px]"
                onClick={handlePrimaryCTA}
                aria-label="Return to the Blinders concept features"
              >
              Review features
            </Button>
            <Link to="/" className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary-600 min-h-[44px]">
              ← Back to Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlindersPage;
