import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PasswordlessEmailAuth from '../components/Auth/PasswordlessEmailAuth';

const PasswordlessEmailAuthPage: React.FC = () => {
  return (
    <MainLayout>
      <PasswordlessEmailAuth />
    </MainLayout>
  );
};

export { PasswordlessEmailAuthPage };
