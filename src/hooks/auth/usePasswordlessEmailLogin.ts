import { useState, useEffect } from 'react';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';

const usePasswordlessEmailLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let storedEmail = window.localStorage.getItem('emailForSignIn');

      if (!storedEmail) {
        // Ask the user to provide their email if not available
        storedEmail = window.prompt(
          'Please provide your email for confirmation',
        );
      }

      if (storedEmail) {
        setLoading(true);

        signInWithEmailLink(auth, storedEmail, window.location.href)
          .then(() => {
            window.localStorage.removeItem('emailForSignIn');
            setSuccess(true);
            setTimeout(() => navigate('/'), 2000); // Redirects after 2 seconds
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setError('Email is required. Please try again.');
      }
    }
  }, [navigate]);

  return { loading, error, success };
};

export default usePasswordlessEmailLogin;
