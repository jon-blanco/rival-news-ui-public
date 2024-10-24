// src/components/Footer.tsx

import { Spacer } from '@nextui-org/react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* <h2 className="text-4xl font-['Tektur'] py-10">rival ↗&#xFE0E; ↘&#xFE0E;</h2> */}
          <img className="h-16 m-12" src="/rival-↗-↘.svg"/>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Rival News. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#!"
              className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#!"
              className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
            >
              Terms of Service
            </a>
            <a
              href="#!"
              className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
            >
              Contact Us
            </a>
          </div>
          <Spacer y={4} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
