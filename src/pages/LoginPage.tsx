import { useState } from 'react';
import { signInflow } from '../package/auth/flows/SignInFlow';
import { useNavigate } from "react-router";
import { PAGE_NAMES } from '../package/routes/constants';

export function LoginPage() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInflow.handle({
        username,
        password,
      });

      navigate(PAGE_NAMES.HOME)
    } catch (error: Error) {
      switch (error.message) {
        case 'invalid_credentials':
          window.alert('Invalid Credentials');
          break;
        case 'move_mfa':
          console.log("redirecting mfa...");
          navigate(PAGE_NAMES.MFA)
          break;
        case 'move_accepted_terms':
          console.log("redirecting terms...");
          navigate(PAGE_NAMES.TERMS) 
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
