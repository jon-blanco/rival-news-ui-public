import React from 'react';
import MainLayout from '../layouts/MainLayout';

const NotFoundPage: React.FC = () => {
  // UseParams with type definition

  return (
    <MainLayout>
      <p>Sorry, the content you are looking for does not exist here!</p>
    </MainLayout>
  );
};

export { NotFoundPage };
