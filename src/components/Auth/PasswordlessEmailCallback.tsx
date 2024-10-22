// components/EmailSignInCallback.tsx
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase-config';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { Spacer } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const EmailSignInCallback: React.FC = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const emailForSignIn = window.localStorage.getItem('emailForSignIn');
    if (!emailForSignIn) {
      setMessage('No email found for sign-in.');
      return;
    }

    const handleSignIn = async () => {
      try {
        if (isSignInWithEmailLink(auth, window.location.href)) {
          await signInWithEmailLink(auth, emailForSignIn, window.location.href);
          window.localStorage.removeItem('emailForSignIn');
          setMessage('Sign-in successful!');
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      } catch (error) {
        setMessage('Error signing in. Please try again later.');
      }
    };

    handleSignIn();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center">
      <Spacer y={1.5} />
      <p>{message}</p>
    </div>
  );
};

export default EmailSignInCallback;
