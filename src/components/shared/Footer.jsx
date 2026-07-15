import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Link to="/" className="text-xl font-bold">Farrier Software</Link>
          <p className="text-gray-300 mt-4 max-w-xl">
            Archived interface concepts for Blinders, Brace, and Phil. No sales, support, or download service is attached.
          </p>
        </div>
        <nav aria-label="Product concepts">
          <ul className="flex space-x-6">
            <li><Link to="/blinders" className="text-gray-300 hover:text-white">Blinders</Link></li>
            <li><Link to="/brace" className="text-gray-300 hover:text-white">Brace</Link></li>
            <li><Link to="/phil" className="text-gray-300 hover:text-white">Phil</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
