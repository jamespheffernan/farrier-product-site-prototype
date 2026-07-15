import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

const BracePage = () => {
  const features = [
    {
      title: 'Automatic Database Creation',
      description: 'Instantly creates organized databases in Notion or Evernote for each of your Omnifocus projects.',
      icon: '🗄️',
    },
    {
      title: 'Smart Organization',
      description: 'Intelligently categorizes and structures your project materials for easy access and reference.',
      icon: '🧠',
    },
    {
      title: 'Seamless Integration',
      description: 'Works with your existing Notion workspaces and Evernote notebooks without disrupting your workflow.',
      icon: '🔗',
    },
    {
      title: 'Real-time Sync',
      description: 'Keeps your project databases updated as your Omnifocus projects evolve and change.',
      icon: '⚡',
    },
  ];

  const integrations = [
    {
      name: 'Notion',
      description: 'Create beautiful, organized databases that integrate with your existing Notion workspace.',
      icon: '📝',
    },
    {
      name: 'Evernote',
      description: 'Generate structured notebooks that work seamlessly with your Evernote organization system.',
      icon: '📓',
    },
    {
      name: 'Omnifocus',
      description: 'Direct integration with your Omnifocus projects for automatic material collection.',
      icon: '📋',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
              📚
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Brace
            </h1>
            <p className="text-2xl text-secondary-600 font-semibold mb-6">
              Project Support Materials Automation
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A product concept for creating and maintaining project-support databases around
              Omnifocus, Notion, and Evernote workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center concept-actions">
              <Button variant="secondary" size="lg" disabled>
                Product concept
              </Button>
              <Link to="/" className="btn btn-outline btn-lg">Back to products</Link>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
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
              Intelligent automation for your project support materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
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

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Works with the tools you already use and love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((integration) => (
              <Card key={integration.name} className="text-center p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center text-3xl mx-auto mb-6">
                  {integration.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {integration.name}
                </h3>
                <p className="text-gray-600">
                  {integration.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple setup, powerful results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Connect Your Tools
              </h3>
              <p className="text-gray-600">
                Link your Omnifocus, Notion, and Evernote accounts with secure authentication.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Automatic Setup
              </h3>
              <p className="text-gray-600">
                Brace automatically creates organized databases for each of your existing projects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Stay Organized
              </h3>
              <p className="text-gray-600">
                New projects automatically get their own organized space for support materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to organize your project materials?
          </h2>
          <p className="text-xl text-secondary-100 mb-8">
            Review the proposed workflow as an interface artifact rather than a live service promise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center concept-actions">
            <Button variant="primary" size="lg" disabled>
              Archived concept
            </Button>
            <Link to="/" className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-secondary-600">
              ← Back to Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BracePage;
