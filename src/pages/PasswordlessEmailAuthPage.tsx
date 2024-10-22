import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PasswordlessEmailCallback from '../components/Auth/PasswordlessEmailCallback';

const PasswordlessEmailCallbackPage: React.FC = () => {
  return (
    <MainLayout>
      <PasswordlessEmailCallback />
    </MainLayout>
  );
};

export { PasswordlessEmailCallbackPage };
