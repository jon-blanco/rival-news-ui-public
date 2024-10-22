// src/components/Login.tsx

import React, { useState } from 'react';
import { Input, Button, Spacer, Card } from '@nextui-org/react';
import { login } from '../../auth-service'; // Your Firebase login function

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
      setError(null); // Clear any previous errors on successful login
      console.log('Login successful');
    } catch (loginError) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Card style={{ mw: '400px', margin: '0 auto', padding: '20px' }}>
      <h3 style={{ marginBottom: '10px', textAlign: 'center' }}>Login</h3>
      {/* {error && <Text color="error" style={{ marginBottom: '10px' }}>{error}</Text>} */}
      <form onSubmit={handleSubmit} autoComplete="off">
        <Input
          fullWidth
          isClearable
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Spacer y={1} />
        <Input
          fullWidth
          isClearable
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Spacer y={1.5} />
        <Button type="submit" fullWidth color="primary">
          Log In
        </Button>
      </form>
    </Card>
  );
};

export default Login;
