import React from 'react';
import usePasswordlessEmailLogin from '../../hooks/auth/usePasswordlessEmailLogin';
import FullPageSpinner from '../FullPageSpinner';

const PasswordlessEmailCallback: React.FC = () => {
  const { loading, error, success } = usePasswordlessEmailLogin();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {loading && <FullPageSpinner />}
      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-500">Login successful! Redirecting...</p>
      )}
    </div>
  );
};

export default PasswordlessEmailCallback;
