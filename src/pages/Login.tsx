import { useState } from 'react';
import { signInflow } from '../package/auth/SignInFlow';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInflow.handle({
        username,
        password,
        has2FA: false,
        acceptedTerms: true,
      });
    } catch (error: Error) {
      switch (error.message) {
        case 'invalid_credentials':
          window.alert('Invalid Credentials');
          break;
        case 'move_2fa':
          console.log('moving to mfa page');
          break;
      }
    }

    return false;
  };

  return (
    <>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Username:</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </>
  );
}
