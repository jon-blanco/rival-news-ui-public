// components/PasswordlessEmailAuth.tsx
import React, { useState } from 'react';
import { Input, Button, Spacer } from '@nextui-org/react';
import { auth } from '../../firebase-config';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

const PasswordlessEmailAuth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);

  const actionCodeSettings = {
    url: 'http://localhost:3000/finishSignUp', // Replace with your actual URL
    handleCodeInApp: true,
  };

  // timer for setting disabled
  const disableForFiveSeconds = () => {
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    disableForFiveSeconds();
    e.preventDefault();
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      toast('A sign-in link has been sent to your email.');
    } catch (error) {
      toast('Error sending email. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg">Sign-In or Sign-Up</p>
      <p>Passwordless email authentication</p>
      <Spacer y={4} />
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <Input
          isClearable
          type="email"
          placeholder="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Spacer y={4} />
        <Button type="submit" color="primary" disabled={disabled}>
          Continue
        </Button>
      </form>
    </div>
  );
};

export default PasswordlessEmailAuth;
