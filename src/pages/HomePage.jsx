import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import TrustSignals from '../components/shared/TrustSignals';
import FAQ from '../components/shared/FAQ';

const HomePage = () => {
  const products = [
    {
      name: 'Blinders',
      tagline: 'Focused Weekly Review',
      description: 'A concept for a focused Omnifocus Weekly Review that keeps the user on one decision at a time.',
      href: '/blinders',
      icon: '🎯',
      color: 'from-primary-500 to-primary-600',
    },
    {
      name: 'Brace',
      tagline: 'Project Support Automation',
      description: 'A concept for creating project-support databases around Omnifocus, Notion, or Evernote.',
      href: '/brace',
      icon: '📚',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      name: 'Phil',
      tagline: 'Private-Local Autofill',
      description: 'A concept for an autofill agent designed around local storage and explicit data control.',
      href: '/phil',
      icon: '🤖',
      color: 'from-accent-500 to-accent-600',
    },
  ];

  const features = [
    {
      title: 'Bespoke Solutions',
      description: 'Each concept starts from a specific professional workflow rather than a generic feature list.',
      icon: '⚡',
    },
    {
      title: 'Privacy First',
      description: 'Local processing is a design goal that each implementation would need to prove.',
      icon: '🔒',
    },
    {
      title: 'Seamless Integration',
      description: 'The concepts explore how new tools might fit around Omnifocus, Notion, and Evernote.',
      icon: '🔗',
    },
  ];

  const handlePrimaryCTA = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Boost Your Productivity{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Around Real Workflows
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Three early product concepts exploring focused reviews, project-support automation,
              and private local autofill around existing productivity workflows.
            </p>

            {/* Single Primary CTA - Mobile First */}
            <div className="flex justify-center mb-8">
              <Button
                variant="primary"
                size="lg"
                className="min-h-[44px] min-w-[44px]"
                onClick={handlePrimaryCTA}
                aria-label="Explore the Farrier Software product concepts"
              >
                Explore the concepts
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-secondary-200 to-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Product Concepts
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Three interface directions for focused professional work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <Link key={product.name} to={product.href} className="product-link">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <Card.Header>
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                      {product.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-primary-600 font-semibold">
                      {product.tagline}
                    </p>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-gray-600">
                      {product.description}
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <span className="btn btn-ghost btn-sm w-full min-h-[44px]">
                      Learn More →
                    </span>
                  </Card.Footer>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What the concepts explore
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We understand that professionals need tools that work with their existing systems, not against them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-3xl mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
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
            Ready to boost your productivity?
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-6 sm:mb-8">
            Review the routes as design artifacts, then compare the concepts with the implemented products.
          </p>
          <div className="flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="min-h-[44px]"
              onClick={handlePrimaryCTA}
              aria-label="Return to the product concept cards"
            >
              Explore concepts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
